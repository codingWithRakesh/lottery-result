import { create } from 'zustand';
import axios from 'axios';

const adminStore = create((set) => ({
    user: null,
    isLoading: false,
    error: null,
    message: null,
    isAuthenticated: false,
    register: async (userData) => {
        set({ isLoading: true, error: null, message: null });
        try {
            const response = await axios.post(`${import.meta.env.VITE_SERVER_URI}/admin/register`, userData, {
                withCredentials: true
            });
            if (response.data.success) {
                set({ message: response.data.message });
                console.log('Registration successful:', response.data);
            } else {
                set({ message: response.data.message });
            }

        } catch (error) {
            set({ error: error.message });
        } finally {
            set({ isLoading: false });
        }
    },
    login: async (credentials) => {
        set({ isLoading: true, error: null, message: null });
        try {
            const response = await axios.post(`${import.meta.env.VITE_SERVER_URI}/admin/login`, credentials, {
                withCredentials: true
            });
            if (response.data.success) {
                set({ user: response.data.user, isAuthenticated: true, message: response.data.message });
            } else {
                set({ message: response.data.message });
            }

        } catch (error) {
            set({ error: error.message });
        } finally {
            set({ isLoading: false });
        }
    },
    currentUser : async () => {
        set({ isLoading: true, error: null, message: null });
        try {
            const response = await axios.get(`${import.meta.env.VITE_SERVER_URI}/admin/currentuser`, {
                withCredentials: true
            });
            if (response.data.success) {
                set({ user: response.data.user, isAuthenticated: true, message: response.data.message });
            } else {
                set({ message: response.data.message });
            }

        } catch (error) {
            set({ error: error.message });
        } finally {
            set({ isLoading: false });
        }
    },
    logout: async () => {
        set({ isLoading: true, error: null, message: null });
        try {
            const response = await axios.get(`${import.meta.env.VITE_SERVER_URI}/admin/logout`, {
                withCredentials: true
            });
            if (response.data.success) {
                set({ user: null, isAuthenticated: false, message: response.data.message });
            } else {
                set({ message: response.data.message });
            }

        } catch (error) {
            set({ error: error.message });
        } finally {
            set({ isLoading: false });
        }
    },
    refresh : async () => {
        set({ isLoading: true, error: null, message: null });
        try {
            const response = await axios.get(`${import.meta.env.VITE_SERVER_URI}/admin/refresh`, {
                withCredentials: true
            });
            if (response.data.success) {
                set({ user: response.data.user, isAuthenticated: true, message: response.data.message });
            } else {
                set({ message: response.data.message });
            }

        } catch (error) {
            set({ error: error.message });
        } finally {
            set({ isLoading: false });
        }
    },
    changePassword : async (passwordData) => {
        set({ isLoading: true, error: null, message: null });
        try {
            const response = await axios.post(`${import.meta.env.VITE_SERVER_URI}/admin/changepassword`, passwordData, {
                withCredentials: true
            });
            if (response.data.success) {
                set({ message: response.data.message });
            } else {
                set({ message: response.data.message });
            }
        } catch (error) {
            set({ error: error.message });
        } finally {
            set({ isLoading: false });
        }
    },
}));

export default adminStore;