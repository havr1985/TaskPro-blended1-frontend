import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const BoardList = styled.ul`
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.02em;
  transition: all 450ms cubic-bezier(0.4, 0, 0.2, 1);
  color: var(--sidebar-icon-edit-stroke-color);

  display: flex;
  flex-direction: column;
  gap: 4px;

  position: relative;
  width: 260px;

  margin: 0 -24px;

  scroll-snap-align: start;

  @media screen and (max-width: 767px) {
    width: 225px;
    margin: 0 -14px;
  }
`;
export const BoardItem = styled.li`
  display: flex;
  align-items: center;

  height: 61px;
  cursor: pointer;

  &.active {
    color: var(--secondary-text-sidebar-color);
    background-color: var(--sidebar-help-backgound-color);
  }

  &.active .iconActive {
    stroke: var(--secondary-text-sidebar-color);
  }

  &.active::after {
    content: "";
    position: absolute;

    right: -1px;

    height: 61px;
    width: 4px;
    border-radius: 4px 0 0 4px;
    transition: all 450ms cubic-bezier(0.4, 0, 0.2, 1);
    background-color: var(--logout-button-color);
  }

  .iconBoard {
    stroke: var(--sidebar-icon-edit-stroke-color);
    transition: all 450ms cubic-bezier(0.4, 0, 0.2, 1);
    margin-right: 8px;
  }
`;
export const Link = styled(NavLink)`
  width: 100%;
  height: 61px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const EditLink = styled(NavLink)`
  width: 100%;
  height: 61px;
  display: flex;
  align-items: center;
`;
export const BoardContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 24px;

  @media (max-width: 767px) {
    margin-left: 14px;
  }
`;

export const Tooltip = styled.div`
  position: relative;

  @media screen and (min-width: 767px) {
    padding-left: 8px;
    padding-right: 8px;
  }

  @media screen and (max-width: 767px) {
    margin-left: 4px;
  }

  @media screen and (min-width: 1439px) {
    &::after {
      transition: all 400ms linear;
      content: attr(data-tooltip);
      width: 100%;

      position: absolute;
      top: 0;
      left: 0;

      padding-left: 8px;

      white-space: wrap;
      z-index: 100;
      background-color: var(--secondary-background-color);
      border-radius: 6px;
      opacity: 0;
      visibility: hidden;
    }

    &.tooltip:hover::after {
      opacity: 1;
      visibility: visible;
    }
  }
`;

export const TitleWrapper = styled.div`
  width: 122px;
  height: 21px;
`;

export const BoardTitle = styled.p`
  color: inherit;

  overflow: hidden;
  text-wrap: nowrap;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const BoardIcon = styled.svg`
  fill: transparent;
`;
export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;

  margin-right: 24px;

  .iconBoard.iconEdit:hover {
    stroke: var(--primary-button-color-sidebar);
    transition: all 450ms cubic-bezier(0.4, 0, 0.2, 1);
    transform: scale(1.1);
    animation: pulse 1s infinite alternate;
  }

  @media screen and (max-width: 767px) {
    margin-right: 14px;
  }
`;
export const ButtonEdit = styled.button`
  height: 20px;
  border: transparent;
  background: none;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  padding: 0;
  &:not(:last-child) {
    margin-right: 8px;
  }
`;
