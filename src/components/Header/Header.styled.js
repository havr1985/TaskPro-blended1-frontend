import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  @media (min-width: 768px) {
    justify-content: end;
  }
`;
export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 14px;
  background-color: #333;
  color: #fff;

  @media (min-width: 768px) {
    justify-content: end;
  }
`;
export const SelectUserWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const OpenSaidbar = styled.button`
  background: none;
  border: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

