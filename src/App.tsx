import React, { useState, useEffect } from 'react';
import { Layout } from './components/Layout';
import { LoginForm } from './components/Auth/LoginForm';
import { getTranslation } from './lib/i18n';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedKindergarten, setSelectedKindergarten] = useState<string | null>(null);

  const handleLogin = async (email: string, password: string) => {
    setLoading(true);
    // TODO: Implement actual authentication with Supabase
    // For now, just simulate login
    setTimeout(() => {
      setIsAuthenticated(true);
      setLoading(false);
    }, 1000);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setSelectedKindergarten(null);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <LoginForm onLogin={handleLogin} loading={loading} />
      </div>
    );
  }

  return (
    <Layout title={getTranslation('welcome')}>
      <div className="space-y-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            {getTranslation('kindergarten')} Dashboard
          </h3>
          <p className="text-gray-600 mb-4">
            Velkommen til barnehage PWA! Dette er starten på en flott applikasjon for kommunikasjon mellom barnehage og familier.
          </p>
          <div className="flex space-x-4">
            <button className="bg-kindergarten-600 text-white px-4 py-2 rounded-md hover:bg-kindergarten-700 transition-colors">
              {getTranslation('posts')}
            </button>
            <button className="bg-kindergarten-600 text-white px-4 py-2 rounded-md hover:bg-kindergarten-700 transition-colors">
              {getTranslation('calendar')}
            </button>
            <button className="bg-kindergarten-600 text-white px-4 py-2 rounded-md hover:bg-kindergarten-700 transition-colors">
              {getTranslation('messages')}
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Neste steg
          </h3>
          <ul className="space-y-2 text-gray-600">
            <li>• Konfigurer Supabase prosjekter</li>
            <li>• Sett opp autentisering</li>
            <li>• Implementer rollestyring</li>
            <li>• Opprett database skjemaer</li>
            <li>• Legg til PWA funksjonalitet</li>
          </ul>
        </div>

        <div className="flex justify-end">
          <button 
            onClick={handleLogout}
            className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition-colors"
          >
            {getTranslation('logout')}
          </button>
        </div>
      </div>
    </Layout>
  );
}

export default App;
