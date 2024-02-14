import styled from "styled-components";

export const MainHeader = styled.header`
	height: 68px;

	background-color: var(--header-background-color);
	transition: all 450ms cubic-bezier(0.4, 0, 0.2, 1);
	display: flex;
	align-items: center;

	@media (min-width: 320px) {
		height: 60px;

		padding: 20px;
	}

	@media (min-width: 768px) {
		padding: 18px 32px;
	}

	@media (min-width: 1440px) {
		padding: 18px 24px;
	}
`;

export const MenuButtonContainer = styled.div`
	@media (min-width: 1440px) {
		display: none;
	}
`;

export const ThemeAndUserContainer = styled.div`
	display: flex;
	column-gap: 14px;
	align-items: center;
	margin-left: auto;
`;

export const UserContainer = styled.div`
	display: flex;
	align-items: center;
	color: var(--primary-heading-color);
	transition: all 450ms cubic-bezier(0.4, 0, 0.2, 1);
	column-gap: 8px;
	cursor: pointer;
`;

export const MenuButton = styled.button`
	background-color: transparent;
	border: none;
	padding: 0;
	cursor: pointer;
`;

export const MenuIcon = styled.svg`
	width: 24px;
	height: 24px;
	fill: transparent;
	stroke: var(--primary-icon-stroke-color);
	transition: all 450ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const UserIcon = styled.svg`
	width: 32px;
	height: 32px;
	stroke: var(--primary-icon-stroke-color);
	transition: all 450ms cubic-bezier(0.4, 0, 0.2, 1);
	fill: transparent;
`;
export const UserAvatar = styled.img`
	width: 32px;
	height: 32px;
	border-radius: 8px;
`;
export const UsernameText = styled.p`
	&:hover {
		color: var(--secondary-button-color);
	}
`;
