import { useState } from 'react';
import { useDispatch } from 'react-redux';
import icons from "../../shared/images/icons.svg";
import { SharedModalBtn } from "../../shared/SharedModalBtn/SharedModalBtn";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { loginThunk } from '../../redux/Auth/authOperation';
import { LoginWrapper, LoginContainer, FormLogin, InputContainer, InputBthEye, NavContainer, StyledNavLink} from './LoginForm.styled';

 
const LoginForm = () => {

 const dispatch = useDispatch(); 

const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()

//         .matches(/^[A-Za-z0-9._%!?+-]+@[a-z]+\.[a-z]{3,}$/
// ,
//         'Please, enter correct format email'
//         )
    
      .required('This field is required'),
      password: Yup.string()
/* .matches(/^(?=.*[0-9])(?=.*[!@#$%^&*.])(?=.*[A-Z]).{8,}$/, 
'Your password must be 8 characters, and include at least one uppercase letter, and a numbesymbol') */
        .required('This field is required'),
    }),
    onSubmit: (values, action) => {
      dispatch(loginThunk(values))
      action.resetForm();
  },
  });

  const togglePasswordVisibility = () => {
    setShowPassword(prevState => !prevState);
  };

  return (
    <LoginWrapper>
      <LoginContainer>
      <NavContainer>
      
          <StyledNavLink to="/auth/register" exact activeClassName="active">
            Registration
          </StyledNavLink>
        
          <StyledNavLink to="/auth/login" activeClassName="active">
            Log in
          </StyledNavLink>
      
     
    </NavContainer>

     <FormLogin onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="email"></label>
        <input
              type="text"
              placeholder="Enter your email:"
          id="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.username}
        />
        {formik.touched.email && formik.errors.email ? (
          <div>{formik.errors.email}</div>
        ) : null}
      </div>

      <div>
        <label htmlFor="password"></label>
         <InputContainer className="password-input-container">
          <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Confirm a password:"
            id="password"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          <InputBthEye
                type="button"
                onClick={togglePasswordVisibility}
                className="toggle-password-button"
                style={{
                stroke:'rgb(255,255,255)',
                strokeWidth:'1.3px' }}
              ><use href={icons + "#icon-password-eye"}/>
          </InputBthEye>
        </InputContainer>
        {formik.touched.password && formik.errors.password ? (
          <div>{formik.errors.password}</div>
        ) : null}
      </div>

      <SharedModalBtn>Log in Now</SharedModalBtn>
      </FormLogin>
        </LoginContainer>
        </LoginWrapper>
 
  );
};

export default LoginForm;
