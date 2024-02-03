import {
	BoardContainer,
	BoardItem,
	BoardList,
	ButtonContainer,
	ButtonCreateBoard,
	ButtonEdit,
	CreateBoardWrapper,
	Heading,
} from "./MyBoards.styled";

export const MyBoards = ({ icon }) => {
	return (
		<div>
			<Heading>My boards</Heading>

			<CreateBoardWrapper>
				<p className='createText'>Create a new board</p>
				<ButtonCreateBoard type='submit'>
					<svg className='iconCreateBoard' width='20px' height='20px'>
						<use href={`${icon}#icon-plus`}></use>
					</svg>
				</ButtonCreateBoard>
			</CreateBoardWrapper>

			<BoardList>
				<BoardItem>
					<BoardContainer>
						<svg className='iconBoard' width='20px' height='20px'>
							<use href={`${icon}#icon-board-square`}></use>
						</svg>
						<p>Project office</p>
					</BoardContainer>

					<ButtonContainer>
						<ButtonEdit type='button'>
							<svg className='iconBoard' width='16px' height='16px'>
								<use href={`${icon}#icon-pencil`}></use>
							</svg>
						</ButtonEdit>
						<ButtonEdit type='button'>
							<svg className='iconBoard' width='16px' height='16px'>
								<use href={`${icon}#icon-trash`}></use>
							</svg>
						</ButtonEdit>
					</ButtonContainer>
				</BoardItem>

				<BoardItem>
					<BoardContainer>
						<svg className='iconBoard' width='20px' height='20px'>
							<use href={`${icon}#icon-board-square`}></use>
						</svg>
						<p>Neon Light Project</p>
					</BoardContainer>
				</BoardItem>
			</BoardList>
		</div>
	);
};
