import React, { useState } from 'react';

/**
 * Main App component which renders the change password form.
 * This component is self-contained and includes all logic and styling.
 */
export default function ChangePassword() {
  // State for each input field
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // State for handling error and success messages
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  /**
   * Handles the form submission event.
   * @param {React.FormEvent} e - The form event.
   */
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission

    // Clear previous messages
    setError('');
    setSuccess('');

    // Check if new password and confirm password match
    if (newPassword !== confirmPassword) {
      setError('Error: New password and confirm password do not match.');
      console.error('Password mismatch');
    } else if (!newPassword || !oldPassword) {
      setError('Error: Please fill out all fields.');
    } else {
      // If they match, log the old and new passwords
      console.log('Form Submitted Successfully');
      console.log('Old Password:', oldPassword);
      console.log('New Password:', newPassword);
      
      // Show a success message
      setSuccess('Password updated successfully!');
      
      // Clear the input fields
      setOldPassword('');
      setNewPassword('');
      setConfirmPassword('');
    }
  };

  // --- Reusable Input Field Component ---
  // This helps reduce repetition in the form
  const PasswordInput = ({ label, id, value, onChange }) => (
    <div className="mb-4">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        type="password"
        id={id}
        value={value}
        onChange={onChange}
        required
        className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent"
        placeholder="••••••••"
      />
    </div>
  );

  return (
    // Main container to center the form, mimicking the image's layout
    <div className="flex items-center justify-center min-h-screen bg-gray-100 font-sans p-4">
      
      {/* The form card */}
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-lg">
        
        {/* Header */}
        <h1 className="text-3xl font-bold text-center text-gray-900">
          Change Password
        </h1>
        <p className="text-center text-gray-600">
          Update your password below.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Old Password Field */}
          <PasswordInput
            label="Old Password"
            id="old-password"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
          />

          {/* New Password Field */}
          <PasswordInput
            label="New Password"
            id="new-password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />

          {/* Confirm Password Field */}
          <PasswordInput
            label="Confirm New Password"
            id="confirm-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          {/* Error Message Display */}
          {error && (
            <div className="p-3 bg-red-100 border border-red-300 rounded-lg">
              <p className="text-sm text-red-700 text-center">{error}</p>
            </div>
          )}

          {/* Success Message Display */}
          {success && (
            <div className="p-3 bg-green-100 border border-green-300 rounded-lg">
              <p className="text-sm text-green-700 text-center">{success}</p>
            </div>
          )}

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full px-4 py-3 font-semibold text-white bg-gray-800 rounded-lg shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 transition-colors duration-200"
            >
              Update Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
