import styled from "styled-components";

export const HelpWrapper = styled.div`
	width: 212px;
	height: 272px;

	padding: 20px;
	margin-bottom: 24px;

	border-radius: 8px;
	background-color: #1f1f1f;

	@media (max-width: 767px) {
		width: 197px;
		height: 238px;

		padding: 14px;
	}
`;

export const HelpText = styled.p`
	font-weight: 400;
	font-size: 14px;
	line-height: 20px;
	letter-spacing: -0.02em;

	width: 172px;

	margin-bottom: 18px;

	color: #ffffff;

	@media (max-width: 767px) {
		font-size: 12px;
		line-height: 16px;
	}

	.appName {
		color: #bedbb0;
	}
`;

export const ButtonNeedHelp = styled.button`
	height: 20px;
	border: transparent;
	background: none;

	display: flex;
	align-items: center;
	justify-content: center;

	cursor: pointer;

	padding: 0;

	font-weight: 500;
	font-size: 12px;
	line-height: 18px;
	letter-spacing: -0.02em;
	color: #ffffff;

	.iconHelp {
		stroke: #ffffff;
		margin-right: 8px;
	}
`;
