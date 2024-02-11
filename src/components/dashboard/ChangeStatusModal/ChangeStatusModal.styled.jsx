import styled from "styled-components";
import { Icon } from "../Card/Card.styled";

export const ModalFilter = styled.div`
  height: auto;
  padding: 15px;
  border: 1px solid var(--shared-input-border-color);
  box-shadow: 0px 4px 16px var(--color-shadow);
  border-radius: 8px;
  background-color: var(--primary-background-color);
  z-index: 1000;
  min-width: 160px;
`;

export const ShowAllBtn = styled.button`
  background-color: transparent;
  color: var(--screens-page-tutorial-text-color);
  font-size: 12px;
  border: none;
  display: flex;
  justify-content: space-between;
  width: 100%;
  transition: color var(--hover-params), stroke var(--hover-params);

  &:hover {
    color: var(--primary-button-color);

    & ${Icon} {
      stroke: var(--primary-button-color);
      scale: 1.1;
    }
  }
`;
