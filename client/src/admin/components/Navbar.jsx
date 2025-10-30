import { Link, useNavigate } from "react-router-dom";
import adminStore from "../store/adminStore.js"

const Navbar = () => {
    const navigate = useNavigate();
    const logoutFunction = async () => {
        await adminStore.getState().logout();
        navigate("/private/admin/login");
    }
    return (
        <nav className="w-full flex items-center justify-end gap-4 px-8 py-4 bg-white shadow-sm">

            <Link to="/private/admin/change-password" className="bg-gray-900 text-white px-4 cursor-pointer py-2 rounded-lg font-medium transition-colors hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2">
                Change Password
            </Link>
            <button onClick={logoutFunction} className="bg-gray-900 text-white px-4 cursor-pointer py-2 rounded-lg font-medium transition-colors hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2">
                Logout
            </button>

        </nav>
    );
};

export default Navbar;