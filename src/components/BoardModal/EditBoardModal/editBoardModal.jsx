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
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentDashboard } from "../../../redux/Dashboard/dashboardsSelectors";
import { updateDashboardThunk } from "../../../redux/Dashboard/dashboardOperation";

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

export const EditBoardModal = ({ isModalOpen, modalStateSwapper }) => {
  const dispatch = useDispatch();
  //
  const dates = useSelector(selectCurrentDashboard);
  console.log(dates.result);
  const {
    _id,
    title: titleDates,
    icon: iconDates,
    backgroundURL: backgroundURLDates,
  } = dates.result;

  const [selectedBg, setSelectedBg] = useState(backgroundURLDates);
  const [setIcon, setSetIcon] = useState(iconDates);

  const initialValues = {
    title: titleDates,
    icon: iconDates,
    backgroundURL: backgroundURLDates,
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newBoardTitle = e.target.elements[0].value;
    const updatedData = {
      title: newBoardTitle,
      icon: setIcon,
      backgroundURL: selectedBg,
    };
    console.log(_id);
    modalStateSwapper();
    dispatch(updateDashboardThunk({ _id, updatedData }));
  };

  // const { name, icon, backgroundURL } = item;
  //   const [selectedBg, setSelectedBg] = useState(backgroundURL);
  //   const [setIcon, setSetIcon] = useState(icon);

  //   const initialValues = {
  //     title: name,
  //     icon: setIcon,
  //     backgroundURL: selectedBg,
  //   };
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
      title={"Edit board"}
      maxWidth={"350px"}>
      <Section>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          //   onSubmit={handleSubmit}>
        >
          <ModalForm onSubmit={(e) => handleSubmit(e)}>
            <FormWrapper>
              <ErrorSection name="title" component="div" />
              <TitleInput
                type="text"
                id="title"
                name="title"
                // placeholder="Title"
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
              Edit
            </AuthFormSubmitButton>
          </ModalForm>
        </Formik>
      </Section>
    </SharedModal>
  );
};
