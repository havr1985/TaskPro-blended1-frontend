import styled from "styled-components";

export const Heading = styled.p`
	font-weight: 400;
	font-size: 12px;
	line-height: 18px;

	margin-bottom: 8px;

	color: var(--sidebar-icon-edit-stroke-color);
`;
export const CreateBoardWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	height: 70px;

	border-top: 1px solid var(--line-border-sidebar-color);
	border-bottom: 1px solid var(--line-border-sidebar-color);

	margin-bottom: 40px;

	@media (max-width: 767px) {
		width: 197px;
	}

	.createText {
		font-weight: 500;
		font-size: 14px;
		line-height: 21px;
		letter-spacing: -0.02em;

		width: 84px;

		color: var(--secondary-text-sidebar-color);
	}
`;

export const ButtonCreateBoard = styled.button`
	width: 40px;
	height: 36px;
	border: transparent;

	cursor: pointer;

	display: flex;
	justify-content: center;
	align-items: center;

	background: var(--sidebar-button-create-background);
	border-radius: 6px;

	transition: 0.5s;

	&:hover {
		background: var(--plus-button-hover-color);
	}

	.iconCreateBoard {
		stroke: var(--shared-plus-icon-dark-big);
	}
`;

export const BoardList = styled.ul`
	font-weight: 500;
	font-size: 14px;
	line-height: 21px;
	letter-spacing: -0.02em;
	color: var(--sidebar-icon-edit-stroke-color);

	display: flex;
	flex-direction: column;
	gap: 4px;

	position: relative;

	// -----
	margin: 0 -24px;

	@media (max-width: 767px) {
		margin: 0 -14px;
	}
	//--------
`;
export const BoardItem = styled.li`
	display: flex;
	align-items: center;
	justify-content: space-between;

	cursor: pointer;

	height: 61px;

	&.active {
		color: var(--secondary-text-sidebar-color);
		background-color: var(--secondary-background-color);
	}

	&.active .iconActive {
		stroke: var(--secondary-text-sidebar-color);
	}

	&.active::after {
		content: "";
		position: absolute;

		right: 0px;

		height: 61px;
		width: 4px;
		border-radius: 4px 0 0 4px;

		background-color: var(--logout-button-color);
	}

	.iconBoard {
		stroke: var(--sidebar-icon-edit-stroke-color);

		margin-right: 8px;
	}
`;

export const BoardContainer = styled.div`
	display: flex;
	align-items: center;
	margin-left: 24px;

	@media (max-width: 767px) {
		margin-left: 14px;
	}
`;

export const BoardTitle = styled.div`
	color: inherit;
`;

export const BoardIcon = styled.svg`
	fill: transparent;
`;
export const ButtonContainer = styled.div`
	display: flex;

	margin-right: 24px;

	@media (max-width: 767px) {
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

	.iconBoard.iconEdit:hover {
		stroke: var(--primary-button-color-sidebar);
		transform: scale(1.1);
		animation: pulse 1s infinite alternate;
	}
`;
