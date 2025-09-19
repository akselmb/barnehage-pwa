import React from 'react';
import { getTranslation } from '../lib/i18n';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
}

export const Layout: React.FC<LayoutProps> = ({ children, title }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-kindergarten-600 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold">
                {getTranslation('kindergarten')}
              </h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="/" className="hover:text-kindergarten-200 transition-colors">
                {getTranslation('home')}
              </a>
              <a href="/posts" className="hover:text-kindergarten-200 transition-colors">
                {getTranslation('posts')}
              </a>
              <a href="/calendar" className="hover:text-kindergarten-200 transition-colors">
                {getTranslation('calendar')}
              </a>
              <a href="/messages" className="hover:text-kindergarten-200 transition-colors">
                {getTranslation('messages')}
              </a>
            </nav>
          </div>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        {title && (
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
          </div>
        )}
        {children}
      </main>
      
      <footer className="bg-white border-t border-gray-200 mt-auto">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 text-sm">
            © 2024 {getTranslation('kindergarten')} PWA
          </p>
        </div>
      </footer>
    </div>
  );
};
