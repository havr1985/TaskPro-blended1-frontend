import styled from "styled-components";

export const FilterButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  width: 64px;
  height: 20px;
  padding: 0;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: var(--filter-text-and-icon-color);
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export const FilterIcon = styled.svg`
  width: 16px;
  height: 16px;
  fill: none;
  stroke-width: 1.5px;
  stroke: var(--filter-text-and-icon-color);
`;
