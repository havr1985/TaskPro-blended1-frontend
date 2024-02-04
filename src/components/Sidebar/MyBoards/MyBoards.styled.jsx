import styled from "styled-components";

export const Heading = styled.p`
	font-weight: 400;
	font-size: 12px;
	line-height: 18px;

	margin-bottom: 8px;

	color: #ffffff80;
`;
export const CreateBoardWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	height: 70px;

	border-top: 1px solid #ffffff1a;
	border-bottom: 1px solid #ffffff1a;

	margin-bottom: 40px;

	@media (max-width: 767px) {
		width: 197px;
	}

	.createText {
		font-weight: 500;
		font-size: 14px;
		line-height: 21px;
		letter-spacing: -0.02em;

		width: 76px;

		color: #ffffff;
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

	background: #bedbb0;
	border-radius: 6px;

	.iconCreateBoard {
		stroke: #121212;
	}
`;

export const BoardList = styled.ul`
	font-weight: 500;
	font-size: 14px;
	line-height: 21px;
	letter-spacing: -0.02em;
	color: #ffffff80;

	display: flex;
	flex-direction: column;
	gap: 4px;

	position: relative;
`;
export const BoardItem = styled.li`
	display: flex;
	align-items: center;
	justify-content: space-between;

	cursor: pointer;

	height: 61px;

	&.active {
		color: #ffffff;
	}

	&.active .iconActive {
		fill: #ffffff;
	}

	&.active::after {
		content: "";
		position: absolute;

		right: -24px;

		height: 61px;
		width: 4px;
		border-radius: 4px 0 0 4px;

		background-color: #bedbb0;
	}

	.iconBoard {
		stroke: #ffffff80;

		margin-right: 8px;
	}
`;

export const BoardContainer = styled.div`
	display: flex;
	align-items: center;
`;
export const ButtonContainer = styled.div`
	display: flex;
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
		stroke: #bedbb0;
		transform: scale(1.1);
		animation: pulse 1s infinite alternate;
	}
`;
