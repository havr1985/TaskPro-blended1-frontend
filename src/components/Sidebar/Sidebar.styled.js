import styled from "styled-components";

export const SidebarContainer = styled.div`
	width: 260px;
	
	
	top: 0;
	left: 0;

	z-index: 1;
	transition: 0.5s;

	display: flex;
	flex-direction: column;
	justify-content: space-between;

	padding: 24px;

	background-color: #121212;

	@media (max-width: 1439.9px) {
		position: absolute;
		height: 100%;

		left: -100%;
	}

	@media (max-width: 767px) {
		width: 225px;

		padding: 14px 14px 24px 14px;
	}

	&.active {
		left: 0;
	}
`;
