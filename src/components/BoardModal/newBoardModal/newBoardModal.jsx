// import { SharedModalBtn } from "../../../shared/SharedModalBtn/SharedModalBtn";
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

const options = [
  "#icon-plus",
  "#icon-board-lightning",
  "#icon-board-loading",
  "#icon-board-puzzle",
  "#icon-board-square",
  "#icon-board-star",
  "#icon-task-pro-lightning",
  "#icon-trash",
  "#icon-arrow-circle-broken-right",
  "#icon-board-hexagon",
];

const validationSchema = Yup.object().shape({
  title: Yup.string().required("Title is required!"),
});

export const AddBoardModal = ({ isModalOpen, modalStateSwapper }) => {
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

  return (
    <SharedModal
      modalIsOpen={isModalOpen}
      closeModal={modalStateSwapper}
      title={"New board"}>
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
                      height={18}>
                      <use href={icons + el} width={18} height={18} />
                    </Icon>

                    <DefaultRadioBtn type="radio" value={el} name="icon" />
                  </IconWrapper>
                ))}
              </RadioBtnWrapper>
            </FormWrapper>

            <FormWrapper>
              <FormTitle>Backgraunds </FormTitle>
              <RadioBtnWrapper>
                {data.map((el, idx) => (
                  <label key={idx}>
                    <BgcItem
                      onClick={() => handleBgSelection(el.url)}
                      className={selectedBg === el.url ? "active" : ""}>
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
