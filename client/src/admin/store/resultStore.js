import { create } from 'zustand';
import axios from 'axios';

const resultStore = create((set) => ({
    isLoading: false,
    error: null,
    message: null,
    updateFR: async (data) => {
        set({ isLoading: true, error: null, message: null });
        try {
            const response = await axios.post(`${import.meta.env.VITE_SERVER_URI}/result/update-fr`, data, {
                withCredentials: true
            });
            if (response.data.success) {
                set({ message: response.data.message });
            } else {
                set({ message: response.data.message });
            }
        } catch (err) {
            set({ error: err.message })
        } finally {
            set({ isLoading: false });
        }
    },
    updateSR: async (data) => {
        set({ isLoading: true, error: null, message: null });
        try {
            const response = await axios.post(`${import.meta.env.VITE_SERVER_URI}/result/update-sr`, data, {
                withCredentials: true
            });
            if (response.data.success) {
                set({ message: response.data.message });
            } else {
                set({ message: response.data.message });
            }
        } catch (err) {
            set({ error: err.message })
        } finally {
            set({ isLoading: false });
        }
    }
}));

export default resultStore;