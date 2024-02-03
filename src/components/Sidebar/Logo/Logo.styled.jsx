import styled from "styled-components";

export const LogoContainer = styled.div`
	display: flex;
	align-items: center;

	margin-bottom: 60px;

	.iconBg {
		width: 32px;
		height: 32px;

		background-color: #1f1f1f;
		border-radius: 8px;

		display: flex;
		align-items: center;
		justify-content: center;

		margin-right: 8px;
	}

	.iconLightning {
		fill: #ffffff;
	}

	.logoText {
		font-weight: 600;
		font-size: 16px;
		line-height: 24px;

		color: #ffffff;
	}
`;
