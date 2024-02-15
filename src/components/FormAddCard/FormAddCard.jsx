import { Formik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import Modal from "react-modal";
import { useModal } from "../../hooks/useModal";
import { SharedModal } from "../../shared/SharedModal/SharedModal";
import { StyledCalendar } from "../StyledCalendar/StyledCalendar";
import icons from "../../shared/images/icons.svg";

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
  IconChevron,
} from "./FormAddCard.styled";
import { addCardThunk } from "../../redux/Dashboard/dashboardOperation";
import { useState } from "react";

Modal.setAppElement("#root");

const validationSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  description: Yup.string().required("Description is required"),
  color: Yup.string().required("Color selection is required"),
  deadline: Yup.date().required("Deadline is required"),
});

export default function FormAddCard({
  isModalOpen,
  modalStateSwapper,
  columnId,
}) {
  const [dateFromCalendar, setDateFromCalendar] = useState(new Date());

  const dispatch = useDispatch();

  const {
    isModalOpen: isCalendarModalOpen,
    openModal: openCalendarModal,
    closeModal: closeCalendarModal,
  } = useModal();

  const customStyles = {
    overlay: {
      backgroundColor: "rgb(21, 21, 21, 0.75)",
    },
    content: {
      width: "233px",
      height: "254px",
      margin: "auto",
      padding: 0,
      border: "none",
      borderRadius: "8px",
    },
  };

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    const addCard = {
      columnId,
      title: values.title,
      description: values.description,
      color: values.color,
      deadline: dateFromCalendar,
    };

    dispatch(addCardThunk(addCard));
    setSubmitting(false);
    resetForm();
    modalStateSwapper();
    setTimeout(() => {
      setDateFromCalendar(new Date());
    }, 1000);
  };

  const formatWeekday = (_, date) => {
    const shortDayNames = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
    return shortDayNames[date.getDay()];
  };

  const deadlineDate = (dateFromCalendar) => {
    const date = new Date(dateFromCalendar);
    const day = date.getDate();

    const monthName = date.toLocaleString("en", { month: "long" });
    const dayOfWeek = date.toLocaleString("en", { weekday: "long" });

    return `${dayOfWeek}, ${monthName} ${day}`;
  };

  return (
    <>
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
                  autoFocus
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
              <StyledDeadlineWrapper onClick={openCalendarModal}>
                <TextDeadlain>{deadlineDate(dateFromCalendar)}</TextDeadlain>
                <IconChevron>
                  <use href={icons + "#icon-chevron-down"} />
                </IconChevron>
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
        <Modal
          isOpen={isCalendarModalOpen}
          onRequestClose={closeCalendarModal}
          style={customStyles}
          closeTimeoutMS={750}
        >
          <StyledCalendar
            formatShortWeekday={formatWeekday}
            selectedDate={new Date()}
            // value={new Date()}
            onChange={setDateFromCalendar}
            onClickDay={closeCalendarModal}
            minDate={new Date()}
            prevLabel={"<"}
            nextLabel={">"}
          />
        </Modal>
      </SharedModal>
    </>
  );
}
