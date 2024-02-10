import React from "react";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";

import { SharedModal } from "../../../shared/SharedModal/SharedModal";
import { EmailInput, HelpFormSubmitButton, ModalForm, QuestionTextarea, ErrorText } from "./HelpModal.styled";
import { FormWrapper } from "../../BoardModal/newBoardModal.styled";
import { sendNeedHelpThunk } from "../../../redux/Dashboard/dashboardOperation";

const needHelpSchema = Yup.object().shape({
	email: Yup.string().email("Invalid email").required("Email is required"),
	comment: Yup.string().min(50, "Must be at least 50 characters long").required(),
});

export const HelpModal = ({ isModalOpen, modalStateSwapper }) => {
	const dispatch = useDispatch();

	const formik = useFormik({
		initialValues: {
			email: "",
			comment: "",
		},
		validationSchema: needHelpSchema,
		onSubmit: async values => {
			try {
				await dispatch(
					sendNeedHelpThunk({
						email: values.email,
						comment: values.comment,
					})
				).unwrap();
				modalStateSwapper();
				formik.resetForm();
			} catch (error) {}
		},
	});

	return (
		<SharedModal modalIsOpen={isModalOpen} closeModal={modalStateSwapper} title={"Need help"} maxWidth='335px'>
			<ModalForm onSubmit={formik.handleSubmit}>
				<FormWrapper>
					<EmailInput
						type='text'
						name='email'
						placeholder='Email address'
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.email}
						autoComplete='off'
					/>
					{formik.touched.email && formik.errors.email ? <ErrorText>{formik.errors.email}</ErrorText> : null}
				</FormWrapper>

				<FormWrapper>
					<QuestionTextarea
						as='textarea'
						rows='6'
						name='comment'
						placeholder='Comment'
						autoComplete='off'
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.comment}
					/>
					{formik.touched.comment && formik.errors.comment ? <ErrorText>{formik.errors.comment}</ErrorText> : null}
				</FormWrapper>

				<HelpFormSubmitButton type='submit'>Submit</HelpFormSubmitButton>
			</ModalForm>
		</SharedModal>
	);
};
