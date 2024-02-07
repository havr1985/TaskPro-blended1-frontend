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
  EditColumnFormSubmitButton,
} from "./EditColumnModal.styled";
import { ButtonPlus } from "../../BoardModal/newBoardModal.styled";
import { PlusIcon } from "../../BoardModal/newBoardModal.styled";
import icons from "../../../shared/images/icons.svg";

const validationSchema = Yup.object().shape({
  title: Yup.string().min("6").required("specify a column name"),
});

export const EditColumnModal = ({ isModalOpen, modalStateSwapper, title }) => {
  const initialValues = {
    title: title || "",
  };

  return (
    <SharedModal
      modalIsOpen={isModalOpen}
      closeModal={modalStateSwapper}
      title={"Edit column"}
      maxWidth="335px"
    >
      <Section>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
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

            <EditColumnFormSubmitButton 
              type="submit">
                <ButtonPlus>
                  <PlusIcon>
                    <use href={icons + "#icon-plus"} />
                  </PlusIcon>
                </ButtonPlus>
                Add
            </EditColumnFormSubmitButton>
          </ModalForm>
        </Formik>
      </Section>
    </SharedModal>
  );
};
