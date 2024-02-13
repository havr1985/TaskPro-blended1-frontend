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
import data from "../newBoardModal/background-last.json";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentDashboard } from "../../../redux/Dashboard/dashboardsSelectors";
import {
	getDashboardByIDThunk,
	updateDashboardThunk,
} from "../../../redux/Dashboard/dashboardOperation";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
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

export const EditBoardModal = ({ isModalOpen, modalStateSwapper, gallery }) => {
	const dispatch = useDispatch();

	const dates = useSelector(selectCurrentDashboard);

	const {
		_id,
		title: titleDates,
		icon: iconDates,
		backgroundURL: backgroundURLDates,
	} = dates.result;

	const [selectedBg, setSelectedBg] = useState(backgroundURLDates);
	const [setIcon, setSetIcon] = useState(iconDates);
	const navigate = useNavigate();
	const initialValues = {
		title: titleDates,
		icon: iconDates,
		backgroundURL: backgroundURLDates,
	};
	const handleSubmit = e => {
		e.preventDefault();

		const newBoardTitle = e.target.elements[0].value;
		const boardTitle = e.target.elements[0].value;
		if (!boardTitle) {
			toast.error("Title is required!");
			return;
		}
		const updatedData = {
			dashboardId: _id,
			title: newBoardTitle,
			icon: setIcon,
			backgroundURL: selectedBg,
		};
		modalStateSwapper();

		dispatch(updateDashboardThunk(updatedData));

		dispatch(getDashboardByIDThunk(_id));
		navigate(`/home/${newBoardTitle}`);
	};

	const handleBgSelection = url => {
		setSelectedBg(url);
	};

	const handleIconSelection = el => {
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
					<ModalForm onSubmit={e => handleSubmit(e)}>
						<FormWrapper>
							<ErrorSection name='title' component='div' />
							<TitleInput
								// onChange={(e) => e.target.elements[0].value(e)}
								type='text'
								id='title'
								defaultValue={titleDates}
								name='title'
								placeholder='Title'
								autoComplete='off'
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

										<DefaultRadioBtn type='radio' value={el} name='icon' />
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
											onClick={() => handleBgSelection(el[gallery])}
											className={selectedBg === el[gallery] ? "active" : ""}>
											{el[gallery] !== "" && (
												<CustomRadioBtn
													$bcgurl={el[gallery]}
													onClick={() => handleBgSelection(el[gallery])}
													className={selectedBg === el[gallery] ? "active" : ""}
												/>
											)}
										</BgcItem>

										<DefaultRadioBtn
											type='radio'
											// value={data[0]["url"]}
											value={el[gallery]}
											name='bg'
										/>
									</label>
								))}
							</RadioBtnWrapper>
						</FormWrapper>

						<AuthFormSubmitButton type='submit'>
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
