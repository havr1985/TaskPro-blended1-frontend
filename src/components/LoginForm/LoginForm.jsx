import { useState } from "react";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { loginThunk } from "../../redux/Auth/authOperation";

const LoginForm = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        //         .matches(/^[A-Za-z0-9._%!?+-]+@[a-z]+\.[a-z]{3,}$/
        // ,
        //         'Please, enter correct format email'
        //         )
        .required("This field is required"),
      password: Yup.string()
        .matches(
          /^(?=.*[0-9])(?=.*[!@#$%^&*.])(?=.*[A-Z]).{8,}$/,
          "Your password must be 8 characters, and include at least one uppercase letter, and a number, one symbol"
        )
        .required("This field is required"),
    }),
    onSubmit: (values, action) => {
      dispatch(loginThunk(values));
      action.resetForm();
    },
  });
  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };
  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="email">Enter your email:</label>
        <input
          type="text"
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
        <label htmlFor="password">Confirm a password:</label>
        <div className="password-input-container">
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="toggle-password-button"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>
        {formik.touched.password && formik.errors.password ? (
          <div>{formik.errors.password}</div>
        ) : null}
      </div>

      <button type="submit">Log in Now</button>
    </form>
  );
};

export default LoginForm;
