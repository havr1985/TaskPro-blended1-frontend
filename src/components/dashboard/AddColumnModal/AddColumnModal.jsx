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
  TitleInput,
  AddColumnFormSubmitButton,
} from "./AddColumnModal.styled";
import { ButtonPlus } from "../../BoardModal/newBoardModal.styled";
import { PlusIcon } from "../../BoardModal/newBoardModal.styled";
import icons from "../../../shared/images/icons.svg";

const validationSchema = Yup.object().shape({
  title: Yup.string().min("6").required("Email is required"),
});

export const AddColumnModal = ({ isModalOpen, modalStateSwapper }) => {
  const initialValues = {
    title: "",
  };

  return (
    <SharedModal
      modalIsOpen={isModalOpen}
      closeModal={modalStateSwapper}
      title={"Add column"}
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
              <ErrorSection name="title" component="div" />
              <TitleInput
                type="text"
                id="title"
                name="title"
                placeholder="title"
                autoComplete="off"
              />
            </FormWrapper>

            <AddColumnFormSubmitButton 
              type="submit">
                <ButtonPlus>
                  <PlusIcon>
                    <use href={icons + "#icon-plus"} />
                  </PlusIcon>
                </ButtonPlus>
                Add
            </AddColumnFormSubmitButton>
          </ModalForm>
        </Formik>
      </Section>
    </SharedModal>
  );
};
