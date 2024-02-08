import { useState } from 'react';
import { useDispatch } from 'react-redux';
import icons from "../../shared/images/icons.svg";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { loginThunk } from '../../redux/Auth/authOperation';
import { LoginWrapper, LoginContainer, FormLogin, InputContainer, InputBthEye, NavContainer,  LoginBtn, ErrorText} from './LoginForm.styled';
import { NavLink } from 'react-router-dom';
  
const LoginSchema = Yup.object({
      email: Yup.string().required('This field is required'),
      password: Yup.string().required('This field is required'),
})
  
export const LoginForm = () => {

 const dispatch = useDispatch(); 
 const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginSchema,
    onSubmit: async (values) => {
      try {
        await dispatch(loginThunk({
          email: values.email,
          password: values.password,
        })).unwrap();
        formik.resetForm();
      } catch (error) {
        console.log(error)
      }
    },
  });
  
  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <LoginWrapper>
      <LoginContainer>
        <NavContainer>
          <NavLink to="/auth/register">Registration</NavLink>

          <NavLink
            to="/auth/login"
            style={{ color: "#ffffff", fontWeight: "bold" }}
          >
            Log in
          </NavLink>
        </NavContainer>

        <FormLogin onSubmit={formik.handleSubmit}>
          <div>
            <label htmlFor="email"></label>
            <input
              type="email"
              placeholder="Enter your email:"
              id="email"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <ErrorText>{formik.errors.email}</ErrorText>
            ) : null}
          </div>

          <div>
            <label htmlFor="password"></label>
            <InputContainer className="password-input-container">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Confirm a password:"
                id="password"
                name="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              <InputBthEye
                type="button"
                onClick={togglePasswordVisibility}
                className="toggle-password-button"
                style={{
                  stroke: "rgb(255,255,255)",
                  strokeWidth: "1.3px",
                }}
              >
                <use href={icons + "#icon-password-eye"} />
              </InputBthEye>
            </InputContainer>
            {formik.touched.password && formik.errors.password ? (
              <ErrorText>{formik.errors.password}</ErrorText>
            ) : null}
          </div>
          <LoginBtn type="submit">Log in Now</LoginBtn>
        </FormLogin>

      </LoginContainer>

    </LoginWrapper>
  );
};



