// import React from "react";
import { useFormik } from "formik";
// import { useDispatch } from "react-redux";
import { Conteiner } from "../../shared/Container/Conteiner";
import { Link } from "react-router-dom";

export const RegisterForm = () => {
  // const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <Conteiner>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <Link to="/auth/register" underline="none">
            Registration
          </Link>
          <Link to="/auth/login" underline="none">
            Log In
          </Link>
        </div>

        <input
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.name}
          onBlur={formik.handleBlur}
          placeholder="Enter your name"
        />

        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          onBlur={formik.handleBlur}
          placeholder="Enter your email"
        />

        <input
          id="password"
          name="password"
          // type={showPassword ? 'text' : 'password'}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          placeholder="Create a password"
        />
        <button type="submit">Register Now</button>
      </form>
    </Conteiner>
  );
};
