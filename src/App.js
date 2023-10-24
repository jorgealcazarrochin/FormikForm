import "./App.css";
import { useFormik } from "formik";

function App() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log("form", values);
      alert("Login Successful");
    },
    validate: (values) => {
      let errors = {};
      if (!values.password) {
        errors.password = "Field required";
      }
      if (!values.email) {
        errors.email = "Field required";
      }

      if (!values.email.includes("@")) {
        errors.email = "Username should be an email";
      }



      return errors;
    },
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>

        <div>Email</div>
        <input
          name="email"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.email}
          id="emailField"
        />
        {formik.errors.email ? (
          <div id='emailError' style={{ color: "red" }}>{formik.errors.email}</div>
        ) : null}

        <div>Password</div>
        <input
          name="password"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.password}
          id="pswField"
        />
        {formik.errors.password ? (
          <div id="pswError" style={{ color: "red" }}>{formik.errors.password}</div>
        ) : null}

        

        <button id="submitBtn" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
