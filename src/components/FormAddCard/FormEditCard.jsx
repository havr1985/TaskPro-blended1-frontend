import { Formik } from "formik";
import * as Yup from "yup";
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
  ButtonPlus,
  PlusIcon,
  AuthFormSubmitButton,
  Error,
  ErrorText,
  Container,
} from "./FormAddCard.styled";
import dayjs from "dayjs";
import icons from "../../shared/images/icons.svg";
import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux";
// import { useEffect } from "react";
import {  useState } from "react";
const validationSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  description: Yup.string().required("Description is required"),
  color: Yup.string().required("Color selection is required"),
  deadline: Yup.date().required("Deadline is required"),
});

export default function FormEditCard() { //{ cardId } - prop
  const dispatch = useDispatch();
  const { isModalOpen, openModal, closeModal } = useModal();
//   const cardData = useSelector((state) => getCardById(state, cardId));

  const [initialValues] = useState({ //setInitialValues
    title: "",
    description: "",
    color: "gray",
    deadline: "",
  });

//   useEffect(() => {
//     if (cardData) {
    //   setInitialValues({
    //     title: cardData.title || "",
    //     description: cardData.description || "",
    //     color: cardData.color || "gray",
    //     deadline:cardData.deadline ? dayjs(cardData.deadline).format("YYYY-MM-DD") : "",
    //   });
//     }
//   }, [cardData]);

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    dispatch(
    //   updateCard({
    //     ...values,
        // id: cardId,
    //   })
    );
    setSubmitting(false);
    closeModal();
    resetForm();
  };
  return (
    <>
      <button onClick={openModal}>Edit Card</button>
      <SharedModal
        modalIsOpen={isModalOpen}
        closeModal={closeModal}
        title="Edit card"
        maxWidth={"350px"}
      >
        <Formik
          initialValues={initialValues }
          validationSchema={validationSchema}
          enableReinitialize
          onSubmit={handleSubmit}
        >
          {({ values, handleChange}) => (
            <StyledForm>
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
                  name="Description"
                  component="div"
                  className="error"
                />
              </Container>

              <StyledLabelColor>Label color</StyledLabelColor>
              <StyledContainerRadioBtn>
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
                <TextDeadlain>{dayjs().format("dddd, MMMM DD")}</TextDeadlain> 
                
                {/* <Calendar
                  parentState={(date) => setFieldValue("deadline", date)}
                  initial={values.deadline}
                /> */}
              </StyledDeadlineWrapper>

              <AuthFormSubmitButton type="submit">
                <ButtonPlus>
                  <PlusIcon>
                    <use href={icons + "#icon-plus"} />
                  </PlusIcon>
                </ButtonPlus>
                Edit
              </AuthFormSubmitButton>
            </StyledForm>
          )}
        </Formik>
      </SharedModal>
    </>
  );
}
