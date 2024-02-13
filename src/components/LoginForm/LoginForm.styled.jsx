import styled from "styled-components";

export const LoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background: var(--welcomeBgColor);`

export const LoginContainer = styled.div`
display: flex;
min-width: 320px;

flex-direction: column;
align-items: start;
background: var(--user-icon-plus-stroke-color);
padding: 24px;
 border: 1px solid var(--loginform-border);
border-radius: 8px;

@media (min-width: 375px) {
    width: 335px
  };

@media (min-width: 768px) {
width: 424px;
padding: 40px;
}     
`
export const InputContainer = styled.div`
position: relative;
width: 287px;
height: 49px;
background: var(--welcome-background-color);
// margin-bottom: 14px;
box-shadow: 0px 4px 16px var(--color-shadow);
border-radius: 8px;

@media (min-width: 767px) {
width: 344px;
} 
`

export const LoginInput = styled.input`
  outline: none;
  overflow: hidden;
  transition: all 250ms ease;
  color: var(--welcome-hover-text-color);
  width: 287px;
  height: 49px;
  border: 1px solid var(--loginform-border);
  margin: 0;
  padding-left: 18px;
  background-color: var(--welcome-background-color);
  border-radius: 8px;
   transition: var(--hover-params);
 
  &:focus {
    border: 1px solid var(--secondary-login-button-color);
  }

  &:active {
    border: 1px solid var(--secondary-login-button-color);
  }

  @media (min-width: 767px) {
    width: 344px;
  }
`

export const NavContainer = styled.nav`
display: flex;
width: 287px;
gap: 14px;
align-items: start;
padding: 0;
margin-bottom: 40px;
color: var(--loginform-text-color);
`

export const InputBthEye = styled.svg`       
position: absolute;
top: 16px;
right: 15px;
width:18px;
height:18px;
background: transparent;

cursor: pointer;
stroke: var(--user-icon-stroke-color);
stroke-width: 1.3px; 
`
export const LoginBtn = styled.button`
  cursor: pointer;
  width: 287px;
  height: 49px;
  border-radius: 8px;
  font-weight: 500;
  background: var(--start-login-button-color);
  transition: var(--hover-params);
  &:hover {
    background: var(--secondary-login-button-color);
    
    font-weight: bold;
  };
  &:focus {
      background: var(--secondary-login-button-color);
  };
 @media (min-width: 767px) {
      width: 344px;
};
`

export const ErrorText = styled.div`
position: absolute;
  bottom: -15px;
  right: 0;
  font-size: 11px;
  font-weight: 400;
  font-style: normal;
  letter-spacing: -1%;
  opacity: 0.9;
  color: #fff;`

export const ErrorContainer = styled.div`
position: fixed;
top: 20px;
right: 20px;
width: 200px;
`


export const CorectDiv = styled.div`
display: flex;
flex-direction: column;
margin-bottom: 24px;
gap: 14px;
position: relative;

`