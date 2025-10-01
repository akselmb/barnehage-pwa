import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Feed from './Pages/Feed';
import { LoginForm } from './components/Auth/LoginForm';
import { Navigation } from './components/Navigation';
import { Header } from './components/Header';
import Calendar from './Pages/Calendar';
import Children from './Pages/Children';


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleLogin = async (_email: string, _password: string) => {
    setLoading(true);
    // TODO: Implement actual authentication with Supabase
    // For now, just simulate login
    setTimeout(() => {
      setIsAuthenticated(true);
      setLoading(false);
    }, 1000);
  };

  // const handleLogout = () => {
  //   setIsAuthenticated(false);
  // };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <LoginForm onLogin={handleLogin} loading={loading} />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/children" element={<Children />} />
        </Routes>
        <Navigation />
      </BrowserRouter>
    </div>
  );
}

export default App;
