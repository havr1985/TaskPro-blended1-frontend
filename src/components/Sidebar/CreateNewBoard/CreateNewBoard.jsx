import { ButtonCreateBoard, CreateBoardWrapper, Heading } from "./CreateNewBoard.styled";

export const CreateNewBoard = ({ openModal, icon }) => {
	return (
		<>
			<Heading>My boards</Heading>
			<CreateBoardWrapper>
				<p className='createText'>Create a new board</p>
				<ButtonCreateBoard onClick={() => openModal()} type='submit'>
					<svg className='iconCreateBoard' width='20px' height='20px'>
						<use href={`${icon}#icon-plus`}></use>
					</svg>
				</ButtonCreateBoard>
			</CreateBoardWrapper>
		</>
	);
};
