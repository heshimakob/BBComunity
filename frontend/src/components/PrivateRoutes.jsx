import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

export default function PrivateRoutes() {
    const { currentUser } = useSelector((state) => state.users);
    if (!currentUser) {
        return <Navigate to="/signin" />;
    }
    return <Outlet />;
}

// Pour les routes admin
export function AdminRoutes() {
    const { currentUser } = useSelector((state) => state.users);
    return currentUser && currentUser.isAdmin ? <Outlet /> : <Navigate to="/ErrorPage" />;
}

// Pour les routes membre
export function MemberRoutes() {
    const { currentUser } = useSelector((state) => state.users);
    return currentUser && !currentUser.isAdmin ? <Outlet /> : <Navigate to="/ErrorPage" />;
}