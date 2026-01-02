'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/auth';
import Link from 'next/link';

interface Credential {
  email: string;
  password: string;
  role: 'admin' | 'user';
  name: string;
  description: string;
  department?: string;
}

interface TechStack {
  category: string;
  technologies: string[];
  icon: string;
}

export default function Home() {
  const { user, isLoading } = useAuth();
  const router = useRouter();
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  useEffect(() => {
    if (!isLoading && user) {
        router.push('/dashboard');
    }
  }, [user, isLoading, router]);

  const credentials: Credential[] = [
    {
      email: 'admin@shiftboard.com',
      password: 'Admin@2025!',
      role: 'admin',
      name: 'Admin User',
      description: 'Full access to create, view, and manage all shifts',
      department: 'Administration',
    },
    {
      email: 'hire-me@anshumat.org',
      password: 'HireMe@2025!',
      role: 'user',
      name: 'Demo Employee',
      description: 'Regular employee - can view own shifts',
      department: 'Engineering',
    },
    {
      email: 'john@example.com',
      password: 'Password123!',
      role: 'user',
      name: 'John Doe',
      description: 'Sales department employee',
      department: 'Sales',
    },
    {
      email: 'jane@example.com',
      password: 'Password123!',
      role: 'user',
      name: 'Jane Smith',
      description: 'Marketing department employee',
      department: 'Marketing',
    },
  ];

  const techStack: TechStack[] = [
    {
      category: 'Frontend',
      technologies: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS 4'],
      icon: '🎨',
    },
    {
      category: 'Backend',
      technologies: ['Node.js', 'Express.js', 'JWT Authentication'],
      icon: '⚙️',
    },
    {
      category: 'Database',
      technologies: ['Prisma ORM', 'SQLite'],
      icon: '💾',
    },
    {
      category: 'Security',
      technologies: ['bcrypt', 'JWT Tokens', 'Role-Based Access Control'],
      icon: '🔒',
    },
  ];

  const features = [
    {
      title: 'Shift Management',
      description: 'Create, view, update, and delete employee shifts with ease',
      icon: '📅',
    },
    {
      title: 'Role-Based Access',
      description: 'Admin and Employee roles with different permission levels',
      icon: '👥',
    },
    {
      title: 'Advanced Filtering',
      description: 'Filter shifts by employee, date, department, and more',
      icon: '🔍',
    },
    {
      title: 'Real-time Statistics',
      description: 'View total shifts, hours, and active employees at a glance',
      icon: '📊',
    },
    {
      title: 'Beautiful UI/UX',
      description: 'Modern, responsive design with smooth animations',
      icon: '✨',
    },
    {
      title: 'Secure Authentication',
      description: 'JWT-based authentication with password hashing',
      icon: '🔐',
    },
  ];

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-indigo-600 border-t-transparent"></div>
          <p className="mt-4 text-gray-600 font-medium">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl mb-6 shadow-2xl transform hover:scale-110 transition-transform duration-300">
            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
            Shift Board
          </h1>
          <p className="text-2xl md:text-3xl text-gray-700 font-semibold mb-3">
            Employee Shift Management System
          </p>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            A modern, full-stack application for managing employee shifts with role-based access control,
            beautiful UI, and powerful features.
          </p>
          <Link
            href="/login"
            className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl hover:from-indigo-700 hover:to-purple-700 font-bold text-lg transition-all duration-200 shadow-2xl hover:shadow-3xl transform hover:scale-105"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
            </svg>
            <span>Get Started - Login Now</span>
          </Link>
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-3">
            Key Features
          </h2>
          <p className="text-center text-gray-600 mb-10">Everything you need for efficient shift management</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Login Credentials Section */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-gray-900 mb-3">Test Accounts</h2>
            <p className="text-lg text-gray-600">Use these credentials to explore the application</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {credentials.map((cred, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${
                      cred.role === 'admin'
                        ? 'bg-gradient-to-br from-indigo-500 to-indigo-600'
                        : 'bg-gradient-to-br from-purple-500 to-purple-600'
                    }`}>
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{cred.name}</h3>
                      <div className="flex items-center space-x-2 mt-1">
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${
                          cred.role === 'admin'
                            ? 'bg-indigo-100 text-indigo-700'
                            : 'bg-purple-100 text-purple-700'
                        }`}>
                          {cred.role === 'admin' ? 'Admin' : 'Employee'}
                        </span>
                        {cred.department && (
                          <span className="text-xs text-gray-500 font-medium">
                            {cred.department}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-gray-600 mb-5">{cred.description}</p>

                <div className="space-y-3 mb-5">
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                      Email Address
                    </label>
                    <div className="flex items-center space-x-2">
                      <code className="flex-1 px-4 py-3 bg-gray-50 rounded-xl text-sm font-mono text-gray-900 border-2 border-gray-200">
                        {cred.email}
                      </code>
                      <button
                        onClick={() => copyToClipboard(cred.email, index * 2)}
                        className="px-4 py-3 bg-indigo-100 hover:bg-indigo-200 text-indigo-700 rounded-xl transition-colors duration-200 shadow-sm hover:shadow"
                        title="Copy email"
                      >
                        {copiedIndex === index * 2 ? (
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        ) : (
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                      Password
                    </label>
                    <div className="flex items-center space-x-2">
                      <code className="flex-1 px-4 py-3 bg-gray-50 rounded-xl text-sm font-mono text-gray-900 border-2 border-gray-200">
                        {cred.password}
                      </code>
                      <button
                        onClick={() => copyToClipboard(cred.password, index * 2 + 1)}
                        className="px-4 py-3 bg-indigo-100 hover:bg-indigo-200 text-indigo-700 rounded-xl transition-colors duration-200 shadow-sm hover:shadow"
                        title="Copy password"
                      >
                        {copiedIndex === index * 2 + 1 ? (
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        ) : (
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                <Link
                  href="/login"
                  className="w-full block text-center px-4 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:from-indigo-700 hover:to-purple-700 font-bold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
                >
                  Login with this account →
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Section */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-gray-900 mb-3">Tech Stack</h2>
            <p className="text-lg text-gray-600">Built with modern technologies</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-2xl transition-all duration-300"
              >
                <div className="text-3xl mb-3">{tech.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{tech.category}</h3>
                <ul className="space-y-2">
                  {tech.technologies.map((item, i) => (
                    <li key={i} className="flex items-center space-x-2 text-gray-700">
                      <svg className="w-4 h-4 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Footer - Made with love */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <span className="text-2xl">❤️</span>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Made with Love by Manya Shukla
              </h3>
              <span className="text-2xl">❤️</span>
            </div>
            <p className="text-gray-600 mb-6">Full-Stack Developer | Web Enthusiast</p>
            
            <div className="flex flex-wrap items-center justify-center gap-6 mb-6">
              <a
                href="https://wa.me/918005586588"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                <span>WhatsApp: 8005586588</span>
              </a>
              <a
                href="https://manya-shukla.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                <span>Portfolio: manya-shukla.vercel.app</span>
              </a>
            </div>

            <div className="pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                © 2025 Shift Board. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
