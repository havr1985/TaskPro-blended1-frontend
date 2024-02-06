import styled from "styled-components";

export const Conteiner = styled.div`
  margin-left: auto;
  margin-right: auto;
 
  @media screen and (max-width: 767.9px) {
    max-width: 375px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
  }

  @media screen and (min-width: 1440px) {
   width: 100vw;
  }
`;
