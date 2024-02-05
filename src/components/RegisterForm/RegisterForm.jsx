import { useFormik } from "formik";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { registerThunk } from "../../redux/Auth/authOperation";
import * as Yup from "yup";
// import { toast } from "react-hot-toast";
// import { Link } from "react-router-dom";
import {
  Container,
  FormContainer,
  LinkMenu,
  LoginLink,
  RegisterLink,
  InputField,
  RegisterBtn,
  PasswordInput,
  Passwordsvg,
  ErrorText,
  StyledWrapInputAuth,
} from "./RegisterForm.styled";

const RegisterSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .max(32, "Name must be at most 32 characters")
    .required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .max(64, "Password must be at most 64 characters")
    .required("Password is required"),
});

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: RegisterSchema,
    onSubmit: async (values) => {
      try {
        await dispatch(
          registerThunk({
            // Notify.success('You have registered successfully!'),
            username: values.name,
            email: values.email,
            password: values.password,
          })
        ).unwrap();
        formik.resetForm();
      } catch (error) {
        // Notify.error("Oops, it's looks like something went wrong... Please, try again!")
      }
    },
  });

  const togglePasswordVisiblity = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  return (
    <Container>
      <FormContainer>
        <form onSubmit={formik.handleSubmit}>
          <LinkMenu>
            <RegisterLink to="/auth/signup" underline="none">
              Registration
            </RegisterLink>
            <LoginLink to="/auth/login" underline="none">
              Log In
            </LoginLink>
          </LinkMenu>
          <InputField>
            <StyledWrapInputAuth>
              <input
                id="name"
                name="name"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.name}
                onBlur={formik.handleBlur}
                placeholder="Enter your name"
              />
              {formik.touched.name && formik.errors.name ? (
                <ErrorText>{formik.errors.name}</ErrorText>
              ) : null}
            </StyledWrapInputAuth>

            <StyledWrapInputAuth>
              <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                onBlur={formik.handleBlur}
                placeholder="Enter your email"
              />
              {formik.touched.email && formik.errors.email ? (
                <ErrorText>{formik.errors.email}</ErrorText>
              ) : null}
            </StyledWrapInputAuth>
            <StyledWrapInputAuth>
              <PasswordInput>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  placeholder="Create a password"
                />
                <Passwordsvg width="18px" onClick={togglePasswordVisiblity}>
                  {" "}
                  <use href={"#icon-password-eye"}></use>{" "}
                </Passwordsvg>
                {formik.touched.password && formik.errors.password ? (
                  <ErrorText>{formik.errors.password}</ErrorText>
                ) : null}
              </PasswordInput>
            </StyledWrapInputAuth>
          </InputField>

          <RegisterBtn type="submit">Register Now</RegisterBtn>
        </form>
      </FormContainer>
    </Container>
  );
};
