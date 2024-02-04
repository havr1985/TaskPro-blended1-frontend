import styled from "styled-components";

export const CardList = styled.ul`
  overflow-y: auto;
  overflow-x: hidden;
  /* overflow: overlay; */
  /* flex-grow: 1; */
  height: 70vh;
  /* margin-right: -7px; */
  /* margin-right: -16px; */

  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    margin-right: -16px;
  }

  &::-webkit-scrollbar {
    width: 8px; /* ширина всей полосы прокрутки */
  }

  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.05); /* цвет зоны отслеживания */
    border-radius: 12px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #121212; /* цвет бегунка */
    border-radius: 12px; /* округлось бегунка */
    border: 8px solid #121212; /* отступ вокруг бегунка */
  }
`;

export const CardWrap = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 154px;
  padding: 14px 20px;
  margin-bottom: 8px;
  border-left: 4px solid red;
  border-radius: 8px;
  background-color: #121212;
  /* cursor: pointer; */

  @media screen and (min-width: 375px) {
    width: 335px;
    min-width: 335px;
  }
`;

export const CardTitle = styled.h4`
  margin-bottom: 8px;
  font-weight: 600;
  font-size: 14px;
  /* letter-spacing: -0.02em; */
  color: #fff;
`;

export const CardDescriptionWrap = styled.div`
  height: 35px;
  overflow: hidden;
`;

export const CardDescription = styled.p`
  font-size: 12px;
  line-height: 1.33;
  /* letter-spacing: -0.02em; */
  color: rgba(255, 255, 255, 0.5);
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
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

export const CardParams = styled.span`
  display: block;
  font-size: 8px;
  letter-spacing: -0.02em;
  color: rgba(255, 255, 255, 0.5);
`;

export const CardPriorityValue = styled.span`
  font-size: 10px;
  letter-spacing: -0.02em;
  color: #fff;

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
  color: #fff;
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
  stroke: rgba(255, 255, 255, 0.5);
`;
