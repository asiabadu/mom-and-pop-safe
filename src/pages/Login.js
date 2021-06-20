import React from "react";
import { useFormik } from "formik";
import { NavLink, Redirect } from "react-router-dom";
import { auth } from "../firebase/firebase";
import { useAuth } from "../firebase/auth";

import Nav from "../components/Nav";

const validate = (values) => {
  const errors = {};
  if (!values.password) {
    errors.password = "Hasło jest wymagane!";
  } else if (values.password.length < 6) {
    errors.password = "Podane hasło jest za krótkie!";
  }

  if (!values.email) {
    errors.email = "Email jest wymagany!";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Podany email jest nieprawidłowy!";
  }

  return errors;
};

const Login = () => {
  const { loggedIn } = useAuth();
  const formik = useFormik({
    initialValues: {
      password: "",
      email: "",
    },
    validate,
    onSubmit: (values) => {
      console.log(values);
      loginUser(values);
    },
  });

  const loginUser = async (values) => {
    try {
      const credential = await auth.signInWithEmailAndPassword(
        values.email,
        values.password
      );
      console.log(credential)
    } catch (error) {
      console.log("error:", error);
    }
  };

  if (loggedIn) {
    return <Redirect to="/" />;
  }
  return (
    <div className="login-page">
      <Nav />
      <main className="login-content">
        <div className="login-header">
          <h3>Zaloguj się</h3>
        </div>
        <form className="login-form" onSubmit={formik.handleSubmit}>
          <div className="form-element login-element">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              onBlur={formik.handleBlur}
              className={
                formik.touched.email && formik.errors.email ? "error" : "input"
              }
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="error-message">{formik.errors.email}</div>
            ) : null}
          </div>
          <div className="form-element login-element">
            <label htmlFor="email">Hasło</label>
            <input
              id="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              onBlur={formik.handleBlur}
              className={
                formik.touched.password && formik.errors.password
                  ? "error"
                  : "input"
              }
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="error-message">{formik.errors.password}</div>
            ) : null}
          </div>
          <button className="control-button" type="submit">
            Wyślij
          </button>
        </form>
        <div className="control-buttons">
          <button className="control-button">
            <NavLink exact to="/register" className="control-link">
              Załóż konto
            </NavLink>
          </button>
        </div>
      </main>
    </div>
  );
};

export default Login;
