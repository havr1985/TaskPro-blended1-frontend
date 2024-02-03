import { ButtonLogOut } from "./LogOut.styled";

export const LogOut = ({ icon }) => {
	return (
		<ButtonLogOut type='submit'>
			<svg className='iconLogOut' width='32px' height='32px'>
				<use href={`${icon}#icon-logout`}></use>
			</svg>
			<span>Log out</span>
		</ButtonLogOut>
	);
};
