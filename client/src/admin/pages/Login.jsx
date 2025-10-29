import React, { useState, useEffect } from 'react';
import { ChevronsRight, Home, LogIn, UserPlus, UserCheck } from 'lucide-react';

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

/**
 * Authentication Card Component
 * This component renders the main card for both Login and Register forms.
 * It conditionally displays fields based on the `authMode`.
 * @param {object} props - Component props
 * @param {string} props.authMode - The current authentication mode ('login' or 'register')
 * @param {function} props.setAuthMode - Function to update the auth mode
 */
function AuthCard({ authMode, setAuthMode }) {
  const isLogin = authMode === 'login';

  // State for form inputs
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);

  // Clear form state when switching between login and register
  useEffect(() => {
    setUsername('');
    setEmail('');
    setPassword('');
    setIsAdmin(false);
  }, [authMode]);

  /**
   * Handles form submission for both login and register
   */
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission

    if (isLogin) {
      // --- LOGIN API CALL ---
      // This is where you would make your login API call
      console.log('Logging in with:', { email, password });
      // Example: api.login(email, password);
    } else {
      // --- REGISTER API CALL ---
      // This is where you would make your register API call
      console.log('Registering with:', { username, email, password, isAdmin });
      // Example: api.register(username, email, password, isAdmin);
    }
  };

  /**
   * AuthToggleButton
   * A helper component for the Login/Register toggle buttons inside the card.
   */
  const AuthToggleButton = ({ mode, children }) => {
    const isActive = authMode === mode;
    return (
      <button
        type="button"
        onClick={() => setAuthMode(mode)}
        className={`flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-md transition-all ${
          isActive
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
      {/* Card Header */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold mb-2">Revox Quiz</h1>
        <p className="text-gray-600">Test your knowledge and compete with others</p>
      </div>

      {/* Toggle Buttons */}
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

      {/* Form Area */}
      <form className="space-y-4" onSubmit={handleSubmit}>
        {/* Conditional Fields for Register */}
        {!isLogin && (
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900"
            />
          </div>
        )}

        {/* Common Fields */}
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
          />
        </div>

        {/* Conditional Checkbox for Register */}
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

        {/* Submit Button */}
        <div className="pt-2">
          <button
            type="submit"
            className="w-full bg-gray-900 text-white py-3 rounded-md hover:bg-gray-700 transition-colors font-semibold"
          >
            {isLogin ? 'Login' : 'Register'}
          </button>
        </div>
      </form>
    </div>
  );
}
