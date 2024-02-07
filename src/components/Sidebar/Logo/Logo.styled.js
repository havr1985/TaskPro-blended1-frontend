import styled from "styled-components";

export const LogoContainer = styled.div`
	display: flex;
	align-items: center;

	margin-bottom: 60px;

	@media (max-width: 767px) {
		margin-bottom: 70px;
	}

	.iconBg {
		width: 32px;
		height: 32px;

		background-color: var(--sidebar-lightning-background-color);
		border-radius: 8px;

		display: flex;
		align-items: center;
		justify-content: center;

		margin-right: 8px;
	}

	.iconLightning {
		fill: var(--sidebar-icon-lightning);
	}

	.logoText {
		font-weight: 600;
		font-size: 16px;
		line-height: 24px;

		color: var(--secondary-text-sidebar-color);
	}
`;
