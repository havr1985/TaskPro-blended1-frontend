import styled from "styled-components";

export const Heading = styled.p`
	font-weight: 400;
	font-size: 12px;
	line-height: 18px;
    margin-left: 14px;
	margin-bottom: 8px;

	color: var(--sidebar-icon-edit-stroke-color);
	@media screen and (min-width: 767px) {
		margin-left: 24px;
		
	}
`;

export const CreateBoardWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
    margin-left: 14px;
	margin-right: 14px;
	height: 70px;

	border-top: 1px solid var(--line-border-sidebar-color);
	border-bottom: 1px solid var(--line-border-sidebar-color);

	margin-bottom: 40px;

	@media screen and (max-width: 767px) {
		width: 197px;
	}
	@media screen and (min-width: 767px) {
		margin-left: 24px;
		margin-right: 24px;
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

	transition: all 450ms cubic-bezier(0.4, 0, 0.2, 1);

	&:hover {
		background: var(--plus-button-hover-color);
	}

	.iconCreateBoard {
		stroke: var(--shared-plus-icon-dark-big);
	}
`;
