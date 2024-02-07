import icons from "../../../shared/images/icons.svg";
import {
  CardCommandSection,
  CardDeadlineValue,
  CardDescription,
  CardDescriptionWrap,
  CardList,
  CardParams,
  CardPriorityValue,
  CardTitle,
  CardWrap,
  Icon,
  IconButton,
  IconsWrap,
} from "./Card.styled";

const Card = () => {
  return (
    <CardList>
      <CardWrap>
        <CardTitle>Card Title</CardTitle>
        <CardDescriptionWrap>
          <CardDescription>Description</CardDescription>
        </CardDescriptionWrap>
        <CardCommandSection>
          <div>
            <CardParams>Priority</CardParams>
            <CardPriorityValue>Low</CardPriorityValue>
          </div>
          <div>
            <CardParams>Deadline</CardParams>
            <CardDeadlineValue>12/05/2023</CardDeadlineValue>
          </div>
          <IconsWrap>
            <li>
              <IconButton>
                <Icon className="bell">
                  <use href={icons + "#icon-bell"} />
                </Icon>
              </IconButton>
            </li>
            <li>
              <IconButton>
                <Icon>
                  <use href={icons + "#icon-arrow-circle-broken-right"} />
                </Icon>
              </IconButton>
            </li>
            <li>
              <IconButton>
                <Icon>
                  <use href={icons + "#icon-pencil"} />
                </Icon>
              </IconButton>
            </li>
            <li>
              <IconButton>
                <Icon>
                  <use href={icons + "#icon-trash"} />
                </Icon>
              </IconButton>
            </li>
          </IconsWrap>
        </CardCommandSection>
      </CardWrap>
    </CardList>
  );
};

export default Card;
