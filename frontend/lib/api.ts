const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface User {
  id: string;
  email: string;
  role: 'admin' | 'user';
  employee: {
    id: string;
    name: string;
    employeeCode: string;
    department: string;
  } | null;
}

export interface LoginResponse {
  token: string;
  user: User;
}

export interface Employee {
  id: string;
  name: string;
  employeeCode: string;
  department: string;
}

export interface Shift {
  id: string;
  date: string;
  startTime: string;
  endTime: string;
  employeeId: string;
  employee: Employee;
  createdAt: string;
  updatedAt: string;
}

export interface CreateShiftData {
  employeeId: string;
  date: string;
  startTime: string;
  endTime: string;
}

class ApiClient {
  private getToken(): string | null {
    if (typeof window === 'undefined') return null;
    return localStorage.getItem('token');
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const token = this.getToken();
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      ...(options.headers as Record<string, string>),
    };

    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    try {
      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        ...options,
        headers,
      });

      // Check if response is JSON
      const contentType = response.headers.get('content-type');
      const isJson = contentType && contentType.includes('application/json');

      let data: any;
      
      if (isJson) {
        try {
          data = await response.json();
        } catch (jsonError) {
          throw new Error('Invalid JSON response from server');
        }
      } else {
        // If not JSON, read as text to see what we got
        const text = await response.text();
        if (response.status === 404) {
          throw new Error(`API endpoint not found. Please ensure the backend server is running on ${API_BASE_URL}`);
        }
        if (text.includes('<!DOCTYPE') || text.includes('<html')) {
          throw new Error(`Received HTML instead of JSON. The backend server may not be running on ${API_BASE_URL}`);
        }
        throw new Error(`Unexpected response format: ${text.substring(0, 100)}`);
      }

      if (!response.ok) {
        throw new Error(data.error || data.errors?.[0]?.msg || data.message || `Request failed with status ${response.status}`);
      }

      return data;
    } catch (error: any) {
      // Handle network errors
      if (error.name === 'TypeError' && error.message.includes('fetch')) {
        throw new Error(`Cannot connect to backend server at ${API_BASE_URL}. Please ensure the server is running.`);
      }
      // Re-throw other errors
      throw error;
    }
  }

  async login(credentials: LoginCredentials): Promise<LoginResponse> {
    return this.request<LoginResponse>('/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    });
  }

  async getEmployees(): Promise<Employee[]> {
    return this.request<Employee[]>('/employees');
  }

  async getShifts(employee?: string, date?: string): Promise<Shift[]> {
    const params = new URLSearchParams();
    if (employee) params.append('employee', employee);
    if (date) params.append('date', date);
    const query = params.toString() ? `?${params.toString()}` : '';
    return this.request<Shift[]>(`/shifts${query}`);
  }

  async createShift(data: CreateShiftData): Promise<Shift> {
    return this.request<Shift>('/shifts', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async deleteShift(id: string): Promise<{ message: string }> {
    return this.request<{ message: string }>(`/shift/${id}`, {
      method: 'DELETE',
    });
  }
}

export const api = new ApiClient();

