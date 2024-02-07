import { useDispatch } from "react-redux";
import { logoutThunk } from "../../../redux/Auth/authOperation";

import { ButtonLogOut } from "./LogOut.styled";

export const LogOut = ({ icon }) => {
	const dispatch = useDispatch();

	return (
		<ButtonLogOut onClick={() => dispatch(logoutThunk())} type='submit'>
			<svg className='iconLogOut' width='32px' height='32px'>
				<use href={`${icon}#icon-logout`}></use>
			</svg>
			<span>Log out</span>
		</ButtonLogOut>
	);
};
