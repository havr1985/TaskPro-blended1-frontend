import plant from "../../../shared/images/plant.png";

import { ButtonNeedHelp, HelpText, HelpWrapper } from "./NeedHelp.styled";

export const NeedHelp = ({ icon }) => {
	return (
		<HelpWrapper>
			<img src={plant} alt='' />
			<HelpText>
				If you need help with <span className='appName'>TaskPro</span>, check out our support resources or reach out to
				our customer support team.
			</HelpText>
			<ButtonNeedHelp type='submit'>
				<svg className='iconHelp' width='20px' height='20px'>
					<use href={`${icon}#icon-task-pro-lightning`}></use>
				</svg>
				<span>Need help?</span>
			</ButtonNeedHelp>
		</HelpWrapper>
	);
};
