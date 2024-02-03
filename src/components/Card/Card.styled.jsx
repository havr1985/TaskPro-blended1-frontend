import styled from "styled-components";

export const CardWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 154px;
  padding: 14px 20px;
  margin-bottom: 8px;
  border: none;
  border-radius: 8px;
  background-color: #121212;
  /* cursor: pointer; */

  @media screen and (min-width: 375px) {
    width: 335px;
    min-width: 335px;
  }
`;

export const CardTitle = styled.h4`
  margin-bottom: 8px;
  font-weight: 600;
  font-size: 14px;
  /* letter-spacing: -0.02em; */
  color: #fff;
`;

export const CardDescription = styled.p`
  font-size: 12px;
  line-height: 1.33;
  /* letter-spacing: -0.02em; */
  color: rgba(255, 255, 255, 0.5);
`;

export const CardCommandSection = styled.div`
  position: relative;
  display: flex;
  margin-top: auto;
  gap: 14px;

  &::before {
    content: "";
    position: absolute;
    top: -14px;
    left: 0;
    width: 290px;
    height: 1px;
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

export const CardParams = styled.span`
  display: block;
  font-size: 8px;
  letter-spacing: -0.02em;
  color: rgba(255, 255, 255, 0.5);
`;

export const CardParamsValue = styled.span`
  font-size: 10px;
  letter-spacing: -0.02em;
  color: #fff;
`;

export const IconsWrap = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-left: auto;
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
