import styled from "styled-components";

export const MainDashboardWrap = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 34px;
  /* width: 375px; */
  width: 100%;
  height: 95%;
  overflow-x: auto;
  overflow-y: hidden;
  /* padding-bottom: 26px; */

  @media screen and (min-width: 768px) {
    width: 704px;
  }

  @media screen and (min-width: 1440px) {
    width: 1132px;
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

export const MainDashboardList = styled.ul`
  display: flex;
  gap: 18px;
  height: 100%;
`;

export const MainDashboardColumn = styled.li`
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  width: 100%;
  /* height: 100%; */

  @media screen and (min-width: 375px) {
    width: 335px;
    min-width: 335px;
  }
`;

export const AddColumnButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  width: 100%;
  height: 56px;
  padding: 0;
  border: none;
  border-radius: 8px;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: #ffffff;
  background-color: #121212;
  cursor: pointer;

  @media screen and (min-width: 375px) {
    width: 335px;
    min-width: 335px;
  }
`;

export const AddCardButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  width: 100%;
  height: 56px;
  padding: 0;
  border: none;
  border-radius: 8px;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: #161616;
  background-color: #bedbb0;
  cursor: pointer;

  @media screen and (min-width: 375px) {
    width: 335px;
    min-width: 335px;
  }
`;

export const IconWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  border-radius: 6px;
  background-color: #fff;
`;

export const AddCardIconWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  border-radius: 6px;
  background-color: #161616;
`;

export const IconPlus = styled.svg`
  width: 14px;
  height: 14px;
  stroke: #181818;
`;

export const AddCardIconPlus = styled.svg`
  width: 14px;
  height: 14px;
  stroke: #ffffff;
`;

export const DashboardColumnTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  width: 100%;
  height: 56px;
  padding-left: 20px;
  padding-right: 20px;
  margin-bottom: 14px;
  border: none;
  border-radius: 8px;

  background-color: #121212;

  @media screen and (min-width: 375px) {
    width: 335px;
    min-width: 335px;
  }
`;

export const Title = styled.h3`
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: #ffffff;
`;

export const IconsWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
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
