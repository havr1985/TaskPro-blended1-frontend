import icons from "../../shared/images/icons.svg";
import {
  CardCommandSection,
  CardDescription,
  CardParams,
  CardParamsValue,
  CardTitle,
  CardWrap,
  Icon,
  IconButton,
  IconsWrap,
} from "./Card.styled";

const Card = () => {
  return (
    <ul>
      <li>
        <CardWrap>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Description</CardDescription>
          <CardCommandSection>
            <div>
              <CardParams>Priority</CardParams>
              <CardParamsValue>Low</CardParamsValue>
            </div>
            <div>
              <CardParams>Deadline</CardParams>
              <CardParamsValue>12/05/2023</CardParamsValue>
            </div>
            <IconsWrap>
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
      </li>
    </ul>
  );
};

export default Card;
