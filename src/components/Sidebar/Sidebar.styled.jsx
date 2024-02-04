import styled from "styled-components";

export const SidebarContainer = styled.div`
	width: 260px;
	height: 100%;

	position: absolute;
	top: 0;
	left: 0;

	display: flex;
	flex-direction: column;
	justify-content: space-between;

	padding: 24px;

	background-color: #121212;

	@media (max-width: 1439px) {
		display: none;
	}

	@media (max-width: 767px) {
		width: 225px;

		padding: 14px 14px 24px 14px;
	}
`;
