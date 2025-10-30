import { Navigate } from "react-router-dom";
import adminStore from "../admin/store/adminStore.js"

const ProtectRoute = ({children}) => {
    const {user,isAuthenticated} = adminStore();
    
    if(!user && !isAuthenticated){
        return <Navigate to="/private/admin/login" replace />
    }

    return children
}

const AuthenticatedUserRoute = ({children}) => {
    const {user,isAuthenticated} = adminStore();
    if(user && isAuthenticated){
        return <Navigate to="/private/admin" replace />
    }

    return children
}

export {
    ProtectRoute,
    AuthenticatedUserRoute
}