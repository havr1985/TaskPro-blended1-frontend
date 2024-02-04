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

export const MyBoards = ({ icon, boards, selectedItem, choice }) => {
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
				{boards.map(board => (
					<BoardItem
						key={board.id}
						onClick={() => choice(board)}
						className={selectedItem.id === board.id ? "active" : ""}>
						<BoardContainer>
							<svg className='iconBoard iconActive' width='20px' height='20px'>
								<use href={`${icon}#${board.icon}`}></use>
							</svg>
							<p>{board.name}</p>
						</BoardContainer>

						{selectedItem.id === board.id && (
							<ButtonContainer>
								<ButtonEdit type='button'>
									<svg className='iconBoard iconEdit' width='16px' height='16px'>
										<use href={`${icon}#icon-pencil`}></use>
									</svg>
								</ButtonEdit>
								<ButtonEdit type='button'>
									<svg className='iconBoard iconEdit' width='16px' height='16px'>
										<use href={`${icon}#icon-trash`}></use>
									</svg>
								</ButtonEdit>
							</ButtonContainer>
						)}
					</BoardItem>
				))}
			</BoardList>
		</div>
	);
};
