import React, { useState, useEffect } from 'react';
import { ChevronsRight, Home, LogIn, UserPlus, UserCheck } from 'lucide-react';
import adminStore from "../store/adminStore.js"
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [authMode, setAuthMode] = useState('login');

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 font-sans text-gray-900">
      <main className="flex-grow flex items-center justify-center p-4">
        <AuthCard authMode={authMode} setAuthMode={setAuthMode} />
      </main>
    </div>
  );
}

function AuthCard({ authMode, setAuthMode }) {
  const isLogin = authMode === 'login';

  const {
    login,
    register,
    isLoading,
    error,
    message,
    isAuthenticated
  } = adminStore();
  const navigate = useNavigate();

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    setFullName('');
    setEmail('');
    setPassword('');
    setIsAdmin(false);
  }, [authMode]);

  useEffect(() => {
    if (isAuthenticated) {
      console.log('User authenticated successfully!');
      navigate('/private/admin');
    }
  }, [isAuthenticated]);

  useEffect(() => {
    if (message) {
      console.log('Message:', message);
      alert(message);

      if (!isLogin && message.includes('success') || message.toLowerCase().includes('registered')) {
        setAuthMode('login');
      }
    }

    if (error) {
      console.error('Error:', error);
      alert(`Error: ${error}`);
    }
  }, [message, error]);

  const handleSubmit = async (e) => {
    e.preventDefault(); 

    if (!email || !password) {
      alert('Please fill in all required fields');
      return;
    }

    if (!isLogin && !fullName) {
      alert('Please fill in all required fields');
      return;
    }

    if (isLogin) {
      console.log('Logging in with:', { email, password });
      await login({ email, password });
    } else {
      console.log('Registering with:', { fullname: fullName, email, password, isAdmin });
      await register({ email, fullname: fullName, password });
    }
  };

  const AuthToggleButton = ({ mode, children }) => {
    const isActive = authMode === mode;
    return (
      <button
        type="button"
        onClick={() => setAuthMode(mode)}
        className={`flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-md transition-all ${isActive
            ? 'bg-gray-900 text-white shadow-md'
            : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-100'
          }`}
      >
        {children}
      </button>
    );
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold mb-2">Revox Quiz</h1>
        <p className="text-gray-600">Test your knowledge and compete with others</p>
      </div>

      <div className="flex gap-2 mb-6">
        <AuthToggleButton mode="login">
          <LogIn className="w-4 h-4" />
          <span>Login</span>
        </AuthToggleButton>
        <AuthToggleButton mode="register">
          <UserPlus className="w-4 h-4" />
          <span>Register</span>
        </AuthToggleButton>
      </div>

      <form className="space-y-4" onSubmit={handleSubmit}>
        {!isLogin && (
          <div>
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              FullName
            </label>
            <input
              type="text"
              id="fullName"
              placeholder="Enter your full name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900"
              required={!isLogin}
            />
          </div>
        )}

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900"
            required
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900"
            required
          />
        </div>

        {!isLogin && (
          <div className="flex items-center">
            <input
              type="checkbox"
              id="admin"
              checked={isAdmin}
              onChange={(e) => setIsAdmin(e.target.checked)}
              className="h-4 w-4 text-gray-900 border-gray-300 rounded focus:ring-gray-900"
            />
            <label htmlFor="admin" className="ml-2 block text-sm text-gray-900">
              Register as Admin
            </label>
          </div>
        )}

        {isLoading && (
          <div className="text-center text-blue-600">
            Processing...
          </div>
        )}

        <div className="pt-2">
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full bg-gray-900 text-white py-3 rounded-md transition-colors font-semibold ${isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-700'
              }`}
          >
            {isLoading ? 'Processing...' : (isLogin ? 'Login' : 'Register')}
          </button>
        </div>
      </form>
    </div>
  );
}