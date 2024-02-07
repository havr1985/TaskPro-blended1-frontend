import styled from "styled-components";

export const ButtonLogOut = styled.button`
	width: 105px;
	height: 32px;

	border: transparent;
	background: none;
	padding: 0;

	display: flex;
	align-items: center;
	justify-content: space-between;

	cursor: pointer;

	font-size: 16px;
	font-weight: 500;
	line-height: 24px;
	letter-spacing: 0em;
	color: var(--secondary-text-sidebar-color);

	.iconLogOut {
		stroke: var(--logout-button-color);
		fill: var(--sidebar-icon-fill-color);

		transition: 0.5s;
	}
	&:hover .iconLogOut {
		stroke: var(--logout-hover-button-color);
	}
`;
