import { create } from 'zustand';
import axios from 'axios';

const commonStore = create((set) => ({
    isLoading: false,
    error: null,
    message: null,
    update : async (data) => {
        set({ isLoading: true, error: null, message: null });
        try {
            const response = await axios.post(`${import.meta.env.VITE_SERVER_URI}/common/update`, data, {
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

export default commonStore;