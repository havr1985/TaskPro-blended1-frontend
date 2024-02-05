import styled from "styled-components";

export const SidebarContainer = styled.div`
  width: 260px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 24px;

  background-color: #121212;

  @media (max-width: 767px) {
    width: 225px;

    padding: 14px 14px 24px 14px;
  }

  @media (max-width: 1439px) {
    display: none;
  }
`;
