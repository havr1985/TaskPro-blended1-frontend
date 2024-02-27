import styled from "styled-components";

export const HeaderWrap = styled.div`

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 13px;
  min-width: 100%;
  margin-bottom: 39px;
  background-color: var(--headerdashboard-background-color);
  border-radius: 8px;

   @media screen and (max-width: 767px) {
   padding: 7px 20px;
  }

  @media screen and (max-width: 1439px) {
    padding: 13px 16px;
    margin-bottom: 13px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 10px;
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
