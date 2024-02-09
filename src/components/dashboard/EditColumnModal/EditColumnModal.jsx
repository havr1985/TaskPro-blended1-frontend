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
import { useDispatch, useSelector } from "react-redux";
import { updateColumnThunk } from "../../../redux/Dashboard/dashboardOperation";
import { selectCurrentDashboard } from "../../../redux/Dashboard/dashboardsSelectors";

const validationSchema = Yup.object().shape({
  title: Yup.string().min("6").required("specify a column name"),
});

export const EditColumnModal = ({ isModalOpen, modalStateSwapper, title }) => {
  const currentDashboard = useSelector(selectCurrentDashboard);
  const dispatch = useDispatch();
  const initialValues = {
    title: title || "",
  };

  // Need some fixes request is not sent
  const handleSubmit = ({ title }, action) => {
    const dashboardId = currentDashboard.result._id;
    dispatch(updateColumnThunk({ dashboardId, title }));
    action.resetForm();
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
          onSubmit={handleSubmit}
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

            <EditColumnFormSubmitButton type="submit">
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
