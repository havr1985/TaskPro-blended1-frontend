import { NavLink } from "react-router-dom";

const WelcomePage = () => {
    return (
        <div>
            <NavLink to='/auth/login'>login</NavLink>
            <NavLink to='/auth/register'>register</NavLink>
        </div>
    )
}

export default WelcomePage;