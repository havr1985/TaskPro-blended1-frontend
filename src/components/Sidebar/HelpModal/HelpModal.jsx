import { SharedModal } from "../../../shared/SharedModal/SharedModal";
import { Formik } from "formik";
import * as Yup from "yup";
import {
  ErrorSection,
  FormWrapper,
  ModalForm,
  Section,
} from "../../BoardModal/newBoardModal.styled";

import {
  EmailInput,
  HelpFormSubmitButton,
  QuestionTextarea,
} from "./HelpModal.styled";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  question: Yup.string().min("10").required("Email is required"),
});

export const HelpModal = ({ isModalOpen, modalStateSwapper }) => {
  const initialValues = {
    email: "",
    question: "",
  };

  return (
    <SharedModal
      modalIsOpen={isModalOpen}
      closeModal={modalStateSwapper}
      title={"Need help"}
      maxWidth="335px"
    >
      <Section>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          //   onSubmit={handleSubmit}>
        >
          <ModalForm>
            <FormWrapper>
              <ErrorSection name="email" component="div" />
              <EmailInput
                type="text"
                id="email"
                name="email"
                placeholder="Email address"
                autoComplete="off"
              />
            </FormWrapper>

            <FormWrapper>
              <ErrorSection name="question" component="div" />
              <QuestionTextarea
                type="text"
                id="question"
                name="question"
                placeholder="Comment"
                autoComplete="off"
                as="textarea"
              />
            </FormWrapper>

            <HelpFormSubmitButton type="submit">Send</HelpFormSubmitButton>
          </ModalForm>
        </Formik>
      </Section>
    </SharedModal>
  );
};
