import styled from "styled-components";

export const CardList = styled.ul`
  overflow-y: auto;
  overflow-x: hidden;
  /* overflow: overlay; */
  /* flex-grow: 1; */
  height: 70vh;

  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    margin-right: -16px;
  }

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
`;

export const CardWrap = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 154px;
  padding: 14px 20px;
  margin-bottom: 8px;
  /* border-left: 4px solid red; */
  border-radius: 8px;
  background-color: var(--primary-card-background-color);
  /* cursor: pointer; */

  @media screen and (min-width: 375px) {
    width: 335px;
    min-width: 335px;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 154px;
    border-radius: 4px 0 0 4px;
    background-color: red;
  }
`;

export const CardTitle = styled.h4`
  margin-bottom: 8px;
  font-weight: 600;
  font-size: 14px;
  /* letter-spacing: -0.02em; */
  color: var(--card-title-color);
`;

export const CardDescriptionWrap = styled.div`
  height: 35px;
  overflow: hidden;
`;

export const CardDescription = styled.p`
  font-size: 12px;
  line-height: 1.33;
  /* letter-spacing: -0.02em; */
  color: var(--screens-page-tutorial-text-color);
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
  }
`;

export const CardParams = styled.span`
  display: block;
  font-size: 8px;
  letter-spacing: -0.02em;
  color: var(--screens-page-tutorial-text-color);
`;

export const CardPriorityValue = styled.span`
  font-size: 10px;
  letter-spacing: -0.02em;
  color: var(--card-params-value-text-color);

  &::before {
    content: "";
    display: inline-block;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    margin-right: 5px;
    background-color: red;
    vertical-align: middle;
  }
`;

export const CardDeadlineValue = styled.span`
  font-size: 10px;
  letter-spacing: -0.02em;
  color: var(--card-params-value-text-color);
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
