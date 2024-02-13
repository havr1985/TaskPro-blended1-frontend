import styled from "styled-components";

export const HeaderWrap = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  margin-bottom: 40px;
  background-color: var(--headerdashboard-background-color);
  border-radius: 4px;

  @media (min-width: 768px) {
    margin-bottom: 26px;
  }

  @media (min-width: 1440px) {
    margin-bottom: 14px;
  }
`;

export const DashboardName = styled.h2`
  margin: 0;
  font-weight: 500;
  font-size: 18px;
  letter-spacing: -0.02em;
  color: var(--card-title-color);
  border-radius: 4px;
  background-color: transparent;
  padding: 2px;
  transition: all 450ms cubic-bezier(0.4, 0, 0.2, 1);
`;
