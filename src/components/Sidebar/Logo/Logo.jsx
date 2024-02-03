import { LogoContainer } from "./Logo.styled";

export const Logo = ({ icon }) => {
	return (
		<LogoContainer>
			<div className='iconBg'>
				<svg className='iconLightning' width='12px' height='16px'>
					<use href={`${icon}#icon-task-pro-lightning`}></use>
				</svg>
			</div>
			<span className='logoText'>Task Pro</span>
		</LogoContainer>
	);
};
