import styled from "styled-components";

export const MainDashboardWrap = styled.div`
	display: flex;
	align-items: flex-start;

	width: 100%;

	overflow-x: auto;
	overflow-y: hidden;

	&::-webkit-scrollbar {
		width: 8px; /* ширина всей полосы прокрутки */
	}

	&::-webkit-scrollbar-track {
		background: var(--tracking-area-color); /* цвет зоны отслеживания */
		border-radius: 12px;
	}

	&::-webkit-scrollbar-thumb {
		background-color: var(--scroll-bar-color); /* цвет бегунка */
		border-radius: 12px; /* округлось бегунка */
		border: 12px solid var(--scroll-bar-color); /* отступ вокруг бегунка */
	}

	@media screen and (max-width: 767px) {
		width: 347px;
		// padding-bottom: 13px;
	}

	@media screen and (min-width: 767px) and (max-width: 1439px) {
		width: 704px;
		width: calc(100vw - 50px);
		height: calc(100vh - 168px);
	}

	@media screen and (min-width: 1440px) {
		width: calc(100vw - 308px);
		height: calc(100vh - 140px);

		padding-bottom: 10px;


`;

export const MainDashboardList = styled.ul`
	display: flex;
	gap: 34px;
	height: 100%;
	padding-bottom: 10px;

	@media screen and (max-width: 767px) {
		padding-bottom: 23px;
	}
	@media screen and (min-width: 767px) and (max-width: 1439px) {
		padding-bottom: 52px;
	}
`;

export const MainDashboardColumn = styled.li`
	display: flex;
	flex-direction: column;
	width: 100%;

	@media screen and (min-width: 375px) {
		width: 334px;
		min-width: 334px;
	}
`;

export const AddColumnButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 8px;
	width: 100%;
	max-width: 334px;
	height: 56px;
	padding: 0;
	margin-left: 34px;
	border: none;
	border-radius: 8px;
	font-weight: 500;
	font-size: 14px;
	letter-spacing: -0.02em;
	transition: all 450ms cubic-bezier(0.4, 0, 0.2, 1);
	color: var(--modal-board-text);
	background-color: var(--background-add-column-btn-color);
	cursor: pointer;

	@media screen and (max-width: 768px) {
		width: 335px;
		min-width: 335px;
		margin-left: 12px;
	}
	@media screen and (min-width: 1439px) {
		min-width: 334px;
	}
`;

export const AddCardButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 8px;
	width: 100%;
	height: 56px;
	padding: 0;
	border: none;
	border-radius: 8px;
	font-weight: 500;
	font-size: 14px;
	letter-spacing: -0.02em;
	color: var(--shared-button-text-color);
	background-color: var(--primary-button-color);
	cursor: pointer;
	transition: all 450ms cubic-bezier(0.4, 0, 0.2, 1);

	@media screen and (min-width: 375px) {
		width: 335px;
		min-width: 335px;
	}

	&:hover {
		background-color: var(--secondary-button-color);
	}
`;

export const IconWrap = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 28px;
	height: 28px;
	border-radius: 6px;
	background-color: var(--add-column-icon-wrap-color);
	transition: all 450ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const AddCardIconWrap = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 28px;
	height: 28px;
	border-radius: 6px;
	background-color: var(--shared-black-plus-button);
	transition: all 450ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const IconPlus = styled.svg`
	width: 14px;
	height: 14px;
	stroke: var(--add-column-icon-plus-color);
	transition: all 450ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const AddCardIconPlus = styled.svg`
	width: 14px;
	height: 14px;
	stroke: var(--add-card-icon-plus-color);
	transition: all 450ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const DashboardColumnTitle = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 8px;
	width: 100%;
	height: 56px;
	padding-left: 20px;
	padding-right: 20px;
	margin-bottom: 14px;
	border: none;
	border-radius: 8px;
	background-color: var(--primary-card-background-color);
	transition: all 450ms cubic-bezier(0.4, 0, 0.2, 1);
	overflow: hidden;

	@media screen and (min-width: 375px) {
		width: 335px;
		min-width: 335px;
	}
`;

export const Title = styled.h3`
	font-weight: 500;
	font-size: 14px;
	letter-spacing: -0.02em;
	color: var(--card-title-color);
	transition: all 450ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const IconsWrap = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 8px;
`;

export const IconButton = styled.button`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0;
	border: none;
	background-color: transparent;
	transition: all 450ms cubic-bezier(0.4, 0, 0.2, 1);
	cursor: pointer;
	/* z-index: 1000; */
`;

export const Icon = styled.svg`
	width: 16px;
	height: 16px;
	fill: none;
	stroke-width: 1.3px;
	stroke: var(--radio-icons-color);
	transition: stroke var(--hover-params), scale var(--hover-params);

	&:hover {
		stroke: var(--primary-button-color);
		scale: 1.1;
	}
`;
