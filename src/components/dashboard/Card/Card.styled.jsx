import styled from "styled-components";
import TextTruncate from "react-text-truncate";

export const CardList = styled.ul`
  overflow-y: auto;
  overflow-x: hidden;
  min-width: 320px
  margin-right: -12px;

  height: calc(100vh - 348px);

  margin-bottom: 14px;
  &::-webkit-scrollbar {
    width: 8px; /* ширина всей полосы прокрутки */
  }
  &::-webkit-scrollbar-track {
    background: var(--tracking-area-color); /* цвет зоны отслеживания */
    border-radius: 12px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--scroll-bar-color); /* цвет бегунка */
    border-radius: 12px; /* округлось бегунка */
    border: 8px solid var(--scroll-bar-color); /* отступ вокруг бегунка */
  }

  @media screen and (min-width: 375px) {
    width: 335px;
  }

  @media screen and (min-width: 767px) and (max-width: 1439px) {
    width: 334px;
    margin-right: -16px;
    height: calc(100vh - 370px);
  }

  @media screen and (min-width: 1439px) {
    margin-right: -16px;
    height: calc(100vh - 286px);
  }
`;

export const CardWrap = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 320px;
  height: 154px;
  padding: 14px 20px;
  margin-bottom: 8px;
  border-radius: 8px;
  background-color: var(--primary-card-background-color);
  /* transition: var(--hover-paramas); */
  transition: transform 0.2s ease, opacity 0.2s ease;

  @media screen and (min-width: 375px) {
    width: 335px;
   /*  min-width: 335px; */
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 154px;
    border-radius: 4px 0 0 4px;
    background-color: ${(props) => props.$prioritycolor};
  }

  ${({ $isdragging }) =>
    $isdragging &&
    `transform: rotate(4deg) translateY(-10px);
		opacity: 0.8;
    `};
`;

export const CardTitle = styled.h4`
  margin-bottom: 10px;
  font-weight: 600;
  font-size: 14px;
  /* letter-spacing: -0.02em; */
  color: var(--card-title-color);
`;

export const CardDescriptionWrap = styled.div`
  height: 50px;
  overflow: hidden;
`;

export const CardDescription = styled(TextTruncate)`
  font-size: 12px;
  line-height: 1.33;
  /* letter-spacing: -0.02em; */
  color: var(--screens-page-tutorial-text-color);
  transition: var(--hover-paramas);
`;

export const CardCommandSection = styled.div`
  position: relative;
  display: flex;
  margin-top: auto;
  gap: 14px;

  &::before {
    content: "";
    position: absolute;
    top: -14px;
    left: 0;
    width: 290px;
    height: 1px;
    background-color: var(--modal-filter-form-line);
    transition: var(--hover-paramas);
  }
`;

export const CardParams = styled.span`
  display: block;
  font-size: 8px;
  letter-spacing: -0.02em;
  color: var(--screens-page-tutorial-text-color);
  transition: var(--hover-paramas);
`;

export const CardPriorityValue = styled.span`
  font-size: 10px;
  letter-spacing: -0.02em;
  color: var(--card-params-value-text-color);
  transition: var(--hover-paramas);

  &::before {
    content: "";
    display: inline-block;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    margin-right: 5px;
    background-color: ${(props) => props.$prioritycolor};
    vertical-align: middle;
  }
`;

export const CardDeadlineValue = styled.span`
  font-size: 10px;
  letter-spacing: -0.02em;
  color: var(--card-params-value-text-color);
  transition: var(--hover-paramas);
`;

export const IconsWrap = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-left: auto;
`;

export const IconButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export const Icon = styled.svg`
  width: 16px;
  height: 16px;
  fill: none;
  stroke-width: 1.3px;
  stroke: var(--radio-icons-color);
  transition: all 450ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    stroke: var(--primary-button-color);
    scale: 1.1;
  }

  &.bell {
    cursor: auto;
    animation-timing-function: ease;
    animation: MOVE 0.5s infinite;
    transform-origin: 50% 0;

    @keyframes MOVE {
      0% {
        transform: rotateZ(0);
        stroke: var(--primary-button-color);
      }
      25% {
        transform: rotateZ(-25deg);
      }
      50% {
        transform: rotateZ(25deg);
        stroke: var(--radio-icons-color);
      }
      75% {
        transform: rotateZ(-25deg);
      }
      100% {
        transform: rotateZ(0);
        stroke: var(--primary-button-color);
      }
    }
  }
`;
