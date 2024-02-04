import styled from "styled-components";




export const SelectWrapper = styled.div`
  display: flex;
justify-content: end;
  align-items: center;
  margin-right: 14px;

  p {
    margin-right: 6px;
    font-size: 14px;
    @media (min-width: 768px) {
      font-size: 24px;
    }
  }

  select {
    font-size: 21px;
    border-radius: 4px;
    cursor: pointer;
    @media (min-width: 768px) {
      border-radius: 5px;
    }
  }
  option {

    @media (min-width: 768) {
    }
  }
`;
