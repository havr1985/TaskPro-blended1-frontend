import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const BoardList = styled.ul`
	font-weight: 500;
	font-size: 14px;
    width: 225px; 
	line-height: 21px;
	letter-spacing: -0.02em;
	transition: all 450ms cubic-bezier(0.4, 0, 0.2, 1);
	color: var(--sidebar-icon-edit-stroke-color);

	display: flex;
	flex-direction: column;
	gap: 4px;

	position: relative;
	width: 100%;

	/* margin: 0 -14px; */

	@media screen and (min-width: 767px) {
		width: 260px; 
		/* margin: 0 -24px; */
	}
`;
export const BoardItem = styled.li`
	display: flex;
	align-items: center;
    position: relative;
	height: 61px;
	cursor: pointer;

	&.active {
		color: var(--secondary-text-sidebar-color);
		background-color: var(--sidebar-help-backgound-color);
	}

	&.active .iconActive {
		stroke: var(--secondary-text-sidebar-color);
	}

	&.active::after {
		content: "";
		position: absolute;
        top: 0;
		right: 1px;

		height: 61px;
		width: 4px;
		border-radius: 4px 0 0 4px;
		transition: all 450ms cubic-bezier(0.4, 0, 0.2, 1);
		background-color: var(--logout-button-color);
	}

	.iconBoard {
		stroke: var(--sidebar-icon-edit-stroke-color);
		transition: all 450ms cubic-bezier(0.4, 0, 0.2, 1);
		margin-right: 8px;
	}
`;
export const Link = styled(NavLink)`
	width: 100%;
	height: 61px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
export const EditLink = styled(NavLink)`
	width: 100%;
	height: 61px;
	display: flex;
	align-items: center;
`;
export const BoardContainer = styled.div`
	display: flex;
	align-items: center;
	margin-left: 24px;

	@media (max-width: 767px) {
		margin-left: 14px;
	}
`;

export const TitleWrapper = styled.div`
	width: 122px;
	height: 21px;
`;

export const BoardTitle = styled.p`
	color: inherit;

	overflow: hidden;

	white-space: nowrap;
	text-overflow: ellipsis;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
`;

export const BoardIcon = styled.svg`
	fill: transparent;
`;
export const ButtonContainer = styled.div`
	display: flex;
	align-items: center;

	margin-right: 24px;

	.iconBoard.iconEdit:hover {
		stroke: var(--primary-button-color-sidebar);
		transition: all 450ms cubic-bezier(0.4, 0, 0.2, 1);
		transform: scale(1.1);
		animation: pulse 1s infinite alternate;
	}

	@media screen and (max-width: 767px) {
		margin-right: 14px;
	}
`;
export const ButtonEdit = styled.button`
	height: 20px;
	border: transparent;
	background: none;

	display: flex;
	align-items: center;
	justify-content: center;

	cursor: pointer;

	padding: 0;
	&:not(:last-child) {
		margin-right: 8px;
	}
`;
