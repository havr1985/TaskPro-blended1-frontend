import { SharedModal } from "../../../shared/SharedModal/SharedModal";
import { Formik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import icons from "../../../shared/images/icons.svg";
import {
  AuthFormSubmitButton,
  BgcItem,
  ButtonPlus,
  CustomRadioBtn,
  DefaultRadioBtn,
  ErrorSection,
  FormTitle,
  FormWrapper,
  Icon,
  IconWrapper,
  ModalForm,
  PlusIcon,
  RadioBtnWrapper,
  Section,
  TitleInput,
} from "../newBoardModal.styled";
import data from "../background.json";
import { useDispatch } from "react-redux";

import { addDashboardThunk } from "../../../redux/Dashboard/dashboardOperation";

const options = [
  "#icon-board-square",
  "#icon-board-star",
  "#icon-board-loading",
  "#icon-board-puzzle",
  "#icon-board-container",
  "#icon-board-lightning",
  "#icon-board-colors",
  "#icon-board-hexagon",
];

const validationSchema = Yup.object().shape({
  title: Yup.string().required("Title is required!"),
});

export const AddBoardModal = ({ isModalOpen, modalStateSwapper }) => {
  const dispatch = useDispatch();
  const [setIcon, setSetIcon] = useState(options[0]);
  const [selectedBg, setSelectedBg] = useState("");
  const initialValues = {
    title: "",
    icon: setIcon,
    bg: selectedBg,
  };
  const handleBgSelection = (url) => {
    setSelectedBg(url);
  };

  const handleIconSelection = (el) => {
    setSetIcon(el);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const boardTitle = e.target.elements[0].value;

    const newBoardData = {
      title: boardTitle,
      icon: setIcon,
      backgroundURL: selectedBg,
    };

    modalStateSwapper();
    dispatch(addDashboardThunk(newBoardData));
  };

  return (
    <SharedModal
      modalIsOpen={isModalOpen}
      closeModal={modalStateSwapper}
      title={"New board"}
      maxWidth={"350px"}
    >
      <Section>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
        >
          <ModalForm onSubmit={(e) => handleSubmit(e)}>
            <FormWrapper>
              <ErrorSection name="title" component="div" />
              <TitleInput
                type="text"
                id="title"
                name="title"
                placeholder="Title"
                autoComplete="off"
              />
            </FormWrapper>

            <FormWrapper>
              <FormTitle>Icons </FormTitle>
              <RadioBtnWrapper>
                {options.map((el, idx) => (
                  <IconWrapper key={idx}>
                    <Icon
                      className={setIcon === el ? "active" : ""}
                      onClick={() => handleIconSelection(el)}
                      width={18}
                      height={18}
                    >
                      <use href={icons + el} width={18} height={18} />
                    </Icon>

                    <DefaultRadioBtn type="radio" value={el} name="icon" />
                  </IconWrapper>
                ))}
              </RadioBtnWrapper>
            </FormWrapper>

            <FormWrapper>
              <FormTitle>Backgrounds </FormTitle>
              <RadioBtnWrapper>
                {data.map((el, idx) => (
                  <label key={idx}>
                    <BgcItem
                      onClick={() => handleBgSelection(el.url)}
                      className={selectedBg === el.url ? "active" : ""}
                    >
                      {el.url !== "" && (
                        <CustomRadioBtn
                          url={el.url}
                          onClick={() => handleBgSelection(el.url)}
                          className={selectedBg === el.url ? "active" : ""}
                        />
                      )}
                    </BgcItem>

                    <DefaultRadioBtn type="radio" value={el.url} name="bg" />
                  </label>
                ))}
              </RadioBtnWrapper>
            </FormWrapper>

            <AuthFormSubmitButton type="submit">
              <ButtonPlus>
                <PlusIcon>
                  <use href={icons + "#icon-plus"} />
                </PlusIcon>
              </ButtonPlus>
              Create
            </AuthFormSubmitButton>
          </ModalForm>
        </Formik>
      </Section>
    </SharedModal>
  );
};
