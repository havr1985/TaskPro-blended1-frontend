import { useSelector } from "react-redux"
import { selectAuthRegister } from "../redux/Auth/authSelectors"
import { Navigate } from "react-router-dom";


export const RestictedRoute = ({ component: Component, redirectTo = '/' }) => {
    const registered = useSelector(selectAuthRegister);

    return registered ? <Navigate to={redirectTo} /> : Component;
}