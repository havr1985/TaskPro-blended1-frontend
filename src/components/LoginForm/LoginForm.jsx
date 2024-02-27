import { useState } from "react";
import { useDispatch } from "react-redux";
import icons from "../../shared/images/icons.svg";
import { useFormik } from "formik";
import * as Yup from "yup";
import { loginThunk } from "../../redux/Auth/authOperation";
import {
  LoginWrapper,
  LoginContainer,
  InputContainer,
  InputBthEye,
  NavContainer,
  LoginBtn,
  ErrorText,
  LoginInput,
  ErrorContainer,
  CorectDiv,
  RegisterLink,
  LoginLink,
} from "./LoginForm.styled";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginSchema = Yup.object({
  email: Yup.string().required("This field is required"),
  password: Yup.string().required("This field is required"),
});

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
        await dispatch(
          loginThunk({
            email: values.email,
            password: values.password,
          })
        ).unwrap();
        formik.resetForm();
      } catch (error) {
        toast.error(
          "Invalid email or password. Please verify your login details and try again",
          { position: "top-right" }
        );
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
          <RegisterLink to="/auth/register"  style={({ isActive, }) => {
    return {
      color: isActive ? "#ffffff" : "var(--color-pale-white)" ,
     };
  }}>Registration</RegisterLink>

          <LoginLink to="/auth/login" style={({ isActive, }) => {
    return {
      color: isActive ? "#ffffff" : "var(--color-pale-white)" ,
     };
  }} >
            Log in
          </LoginLink>
        </NavContainer>

        <form onSubmit={formik.handleSubmit}>
          <CorectDiv>
            <InputContainer>
              <label htmlFor="email"></label>
              <LoginInput
                type="email"
                placeholder="Enter your email"
                id="email"
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                autoFocus
              />
              {formik.touched.email && formik.errors.email ? (
                <ErrorText>{formik.errors.email}</ErrorText>
              ) : null}
            </InputContainer>

            <InputContainer>
              <label htmlFor="password"></label>
              <LoginInput
                type={showPassword ? "text" : "password"}
                placeholder="Confirm a password"
                id="password"
                name="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              <InputBthEye onClick={togglePasswordVisibility}>
                <use href={icons + "#icon-password-eye"} />
              </InputBthEye>

              {formik.touched.password && formik.errors.password ? (
                <ErrorText>{formik.errors.password}</ErrorText>
              ) : null}
            </InputContainer>
          </CorectDiv>

          <LoginBtn type="submit">Log in Now</LoginBtn>
        </form>
      </LoginContainer>
      <ErrorContainer>
        <ToastContainer />
      </ErrorContainer>
    </LoginWrapper>
  );
};
