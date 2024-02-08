import { Formik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { useModal } from "../../hooks/useModal";
import { SharedModal } from "../../shared/SharedModal/SharedModal";

import {
  StyledForm,
  StyledInput,
  StyledLabel,
  StyledRadioInput,
  StyledTextArea,
  StyledDeadlineWrapper,
  StyledDeadlineTitle,
  StyledLabelColor,
  StyledContainerRadioBtn,
  StyledSpan,
  TextDeadlain,
  Container,
  ButtonPlus,
  PlusIcon,
  Error,
  ErrorText,
  AuthFormSubmitButton,
} from "./FormAddCard.styled";
// import Calendar from "../Calendar/Calendar";
import dayjs from "dayjs";
import icons from "../../shared/images/icons.svg";

const validationSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  description: Yup.string().required("Description is required"),
  color: Yup.string().required("Color selection is required"),
  deadline: Yup.date().required("Deadline is required"),
});

export default function FormAddCard({ isModalOpen, modalStateSwapper }) {
  const dispatch = useDispatch();
  const { closeModal } = useModal();

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    dispatch();
    // addCard({
    //   title: values.title,
    //   description: values.description,
    //   color: values.color,
    //   deadline: values.deadline,
    // })
    setSubmitting(false);
    resetForm();
    closeModal();
  };

  return (
    <>
      {/* <button onClick={openModal}>Add New Card</button> */}
      <SharedModal
        modalIsOpen={isModalOpen}
        closeModal={modalStateSwapper}
        title="Add card"
        maxWidth={"350px"}
      >
        <Formik
          initialValues={{
            title: "",
            description: "",
            color: "gray",
            deadline: new Date(),
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ values, handleChange, handleSubmit }) => (
            <StyledForm onSubmit={handleSubmit}>
              <Container>
                <StyledInput
                  type="text"
                  name="title"
                  onChange={handleChange}
                  value={values.title}
                  placeholder="Title"
                />
                <Error name="title" component="div" className="error" />
              </Container>
              <Container>
                <StyledTextArea
                  name="description"
                  onChange={handleChange}
                  value={values.description}
                  placeholder="Description"
                />
                <ErrorText
                  name="description"
                  component="div"
                  className="error"
                />
              </Container>

              <StyledLabelColor>Label color</StyledLabelColor>
              <StyledContainerRadioBtn
                onChange={handleChange}
                value={values.color}
              >
                <StyledLabel>
                  <StyledRadioInput
                    type="radio"
                    name="color"
                    value="blue"
                    className="blue"
                    checked={values.color === "blue"}
                    onChange={handleChange}
                  />
                  <StyledSpan className="blue"></StyledSpan>
                </StyledLabel>

                <StyledLabel>
                  <StyledRadioInput
                    type="radio"
                    name="color"
                    value="pink"
                    className="pink"
                    checked={values.color === "pink"}
                    onChange={handleChange}
                  />
                  <StyledSpan className="pink"></StyledSpan>
                </StyledLabel>
                <StyledLabel>
                  <StyledRadioInput
                    type="radio"
                    name="color"
                    value="green"
                    className="green"
                    checked={values.color === "green"}
                    onChange={handleChange}
                  />
                  <StyledSpan className="green"></StyledSpan>
                </StyledLabel>
                <StyledLabel>
                  <StyledRadioInput
                    type="radio"
                    name="color"
                    value="gray"
                    className="gray"
                    checked={values.color === "gray"}
                    onChange={handleChange}
                  />
                  <StyledSpan className="gray"></StyledSpan>
                </StyledLabel>
              </StyledContainerRadioBtn>

              <StyledDeadlineTitle>Deadline</StyledDeadlineTitle>
              <StyledDeadlineWrapper>
                <TextDeadlain>
                  {dayjs(values.deadline).format("dddd, MMMM DD")}
                </TextDeadlain>
                {/* <Calendar
                  onDateChange={(date) => setFieldValue("deadline", date)}
                  selectedDate={values.deadline}
                /> */}
              </StyledDeadlineWrapper>

              <AuthFormSubmitButton type="submit">
                <ButtonPlus>
                  <PlusIcon>
                    <use href={icons + "#icon-plus"} />
                  </PlusIcon>
                </ButtonPlus>
                Add
              </AuthFormSubmitButton>
            </StyledForm>
          )}
        </Formik>
      </SharedModal>
    </>
  );
}
