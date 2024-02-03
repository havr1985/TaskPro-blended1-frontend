import styled from "styled-components";

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

export const IconWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  border-radius: 6px;
  background-color: #fff;
`;

export const IconPlus = styled.svg`
  width: 14px;
  height: 14px;
  stroke: #181818;
`;

export const MainDashboardWrap = styled.div`
  display: flex;
  align-items: flex-start;
  height: 100%;
  gap: 18px;
  overflow-x: auto;
`;

export const MainDashboardList = styled.ul`
  display: flex;
  gap: 18px;
`;

export const MainDashboardColumn = styled.li`
  width: 100%;
  max-height: 100%;
  overflow-y: auto;

  @media screen and (min-width: 375px) {
    width: 335px;
    min-width: 335px;
  }
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
