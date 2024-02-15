import styled from "styled-components";

import { Form, Field, ErrorMessage } from "formik";

export const Section = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: start;
`;

export const SectionTitle = styled.h2`
	font-size: 18px;
	font-family: "Poppins";
	font-weight: 500;
	letter-spacing: -0.36px;
	margin-bottom: 24px;
	color: rgb (22, 22, 22);
`;

export const FormWrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: start;
	position: relative;

	margin-bottom: 24px;

	// &:last-of-type {
	// 	margin-bottom: 40px;
	// }
`;

export const FormTitle = styled.h3`
	color: var(--modal-title-color);
	font-size: 14px;
	font-family: "Poppins";
	font-weight: 500;
	letter-spacing: -0.28px;
	transition: var(--hover-params);
	margin-bottom: 14px;
`;

export const TitleInput = styled.input`
	position: relative;
	width: 100%;
	height: 49px;
	padding: 14px 18px;
	color: var(--shared-input-text-color);
	font-size: 14px;
	font-family: "Poppins";
	letter-spacing: -0.28px;
	background-color: transparent;
	border: 1px solid;
	border-color: var(--shared-input-border-color);
	outline: none;
	overflow: hidden;
	border-radius: 8px;
	opacity: 0.4;
	transition: var(--hover-params);

	&::placeholder {
		font-size: 14px;
		font-family: "Poppins";
		letter-spacing: -0.28px;
	}

	&:focus {
		opacity: 1;
		border-color: var(--shared-input-border-hover-color);
	}
`;

export const RadioBtnWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: start;
	align-items: flex-start;
	padding-right: 25px;
	gap: 4px;
`;

export const IconWrapper = styled.label``;

export const Icon = styled.svg`
	cursor: pointer;
	stroke: var(--radio-icons-color);
	fill: transparent;
	transition: var(--hover-params);

	&.active {
		scale: 1.3;
		transform: rotate(360deg);
	}
	&:hover {
		scale: 1.3;
		transform: rotate(360deg);
	}
`;

export const DefaultRadioBtn = styled(Field)`
	appearance: none;
	position: absolute;
	width: 1px;
	height: 1px;
	margin: -1px;
	border: 0;
	padding: 0;

	white-space: nowrap;
	clip-path: inset(100%);
	clip: rect(0 0 0 0);
	overflow: hidden;
`;

export const CustomRadioBtn = styled.div`
	border-radius: 8px;
	width: 28px;
	height: 28px;

	background-image: url(${props => props.$bcgurl});
	background-position: center;
	background-size: cover;

	cursor: pointer;
	transition: var(--hover-params);

	&.active {
		scale: 1.1;
	}
`;

export const BgcItem = styled.div`
	border-radius: 6px;
	border: none;
	outline: none;
	width: 28px;
	height: 28px;
	background-position: center;
	background-size: contain;
	background-color: var(--radio-icons-color);

	cursor: pointer;
	transition: var(--hover-params);

	&.active {
		scale: 1.1;
	}
`;

export const AuthFormSubmitButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	padding: 14px;
	border: none;
	border-radius: 8px;

	font-family: "Poppins";
	font-weight: 500;
	font-size: 14px;
	letter-spacing: -0.28px;

	// color: rgb(22, 22, 22);
	color: var(--shared-button-text-color);
	background-color: var(--plus-button-color);

	transition: var(--hover-params);
	cursor: pointer;

	&:hover {
		background: var(--plus-button-hover-color);
	}
`;

export const ButtonPlus = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 8px;

	width: 28px;
	height: 28px;
	background-color: var(--shared-black-plus-button);
	margin-right: 8px;
	padding: 7px;
	transition: var(--hover-params);
`;

export const PlusIcon = styled.svg`
	width: 14px;
	height: 14px;
	stroke: var(--shared-plus-icon-color);
	transition: var(--hover-params);
`;

export const ErrorSection = styled(ErrorMessage)`
 position: absolute;
 bottom: -15px;
 right: 0;
 letter-spacing: -1%;
 opacity: 0.9;
 font-size: 11px;
 font-weight: 400;
 font-style: normal; 
 letter-spacing: -0.36px; 
 color: var(--modal-need-help-text);
 
`;



export const ModalForm = styled(Form)`
	margin: 0;
	width: 100%;
	display: flex;
	flex-direction: column;
`;
