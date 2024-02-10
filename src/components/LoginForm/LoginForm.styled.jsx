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
/* border: 1px solid var(--loginform-border); */
border-radius: 8px;

@media (min-width: 375px) {
    width: 335px
  }

@media (min-width: 768px) {
width: 424px;
padding: 40px;
}     
`
export const LoginInput = styled.input`
/* appearance: none; */
  outline: none;
  opacity: 0.4;
  transition: all 250ms ease;
  color: rgb(255, 255, 255);
width: 267px;
height: 47px;
justify-content: center;
border:none;
margin:0;
background: var(--user-icon-plus-stroke-color);
  &::placeholder {
    color: rgb(255, 255, 255);
  
    letter-spacing: -0.28px;
    border: none;
    outline: none;
  }

  &:focus {
    opacity: 1;
    background: var(--user-icon-plus-stroke-color);
  }

    @media (min-width: 767px) {
      width: 324px;
    }
  
`
export const NavContainer = styled.nav`
display: flex;
width: 287px;
gap: 14px;
align-items: start;
/* justify-content: start; */
padding: 0;
margin-bottom: 40px;
color: var(--loginform-text-color);

`

export const InputContainer = styled.div`
position: relative;
margin-bottom: 10px;
 width: 287px;
    height: 49px;
    
    background: var(--welcome-background-color);
    margin-bottom: 14px;
    border: 1px solid var(--loginform-border);
    padding-left: 18px;
    box-shadow: 0px 4px 16px var(--color-shadow);
    border-radius: 8px;
     @media (min-width: 767px) {
      width: 344px;
 } 
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

stroke: var(--user-icon-stroke-color);
stroke-width: 1.3px; 
`
export const LoginBtn = styled.button`
  cursor: pointer;
  width: 287px;
  height: 49px;
  border-radius: 8px;
  border: none;
  font-weight: bold;
  background: var(--user-icon-plus-fill-color);
  transition: all 300ms;
  &:hover {
    background: var(--secondary-login-button-color);
    };
  @media (min-width: 767px) {
      width: 344px;
 }
`;

export const ErrorNotifickation = styled.div`
color: var(--secondary-login-button-color);
`

export const ErrorText = styled.div`
position: absolute;
top: -10px;
right: 10px;
font-size: 14px;
font-weight: 400;
font-style: normal;
letter-spacing: -1%;
opacity: 0.9;
color: red;`

export const ErrorContainer = styled.div`
position: fixed;
top: 20px;
right: 20px;
width: 200px;

`