import { NavLink } from "react-router-dom";
import styled from "styled-components";


export const FormLogin = styled.div`
  input {
    width: 287px;
    height: 49px;
    left: 40px;
    top: 107px;
    color: var(--welcome-hover-text-color);
    background: var(--welcome-background-color);
    margin-bottom: 14px;
    border: 1px solid rgba(190,219,176, 0.4);
    padding-left: 18px;
    box-shadow: 0px 4px 16px var(--color-shadow);
    border-radius: 8px;
    @media (min-width: 767px) {
      width: 344px;
    }

`
export const LoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background: linear-gradient(
    180deg,
    rgba(196, 196, 196, 0) 25%,
    #bedbb0 92.19%
  );
`;
export const LoginContainer = styled.div`
display: flex;
min-width: 320px;

flex-direction: column;
align-items: center;
background: var(--user-icon-plus-stroke-color);
padding: 24px;
border: 1px solid rgba(190, 219, 176, 0.5);
border-radius: 8px;

@media (min-width: 375px) {
    width: 335px
  }

@media (min-width: 768px) {
width: 424px;
padding: 40px;
}     
`
export const InputContainer = styled.div`
position: relative;
margin-bottom: 10px;
`

export const InputBthEye = styled.svg`       
position: absolute;
top: 16px;
right: 15px;
width:18px;
height:18px;
background: transparent;
/* top: 50%;
transform: translateY(-50%); 
border: none;
 */
cursor: pointer;
stroke: rgb(255,255,255);
stroke-width: 1.3px; 
`
export const NavContainer = styled.nav`
display: flex;
width: 287px;
gap: 14px;
justify-content: start;
padding: 0;
margin-bottom: 40px;
color: rgba(255, 255, 255, 0.3);
@media (min-width: 767px) {
      width: 344px;
 }
`
export const StyledNavLink = styled(NavLink)`

color: rgba(255, 255, 255, 0.3);
&.active {
    color: rgb(255, 255, 255);
    font-weight: bold;
  }
`