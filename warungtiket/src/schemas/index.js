import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/;
const emailRules =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const basicSchema = yup.object().shape({
  firstname: yup.string().required("First Name is Required"),
  lastname: yup.string().required("Last Name is Required"),
  email: yup
    .string()
    .email("Invalid Email")
    .matches(emailRules, "Invalid Email")
    .required("Email is Required"),
  password: yup
    .string()
    .min(
      6,
      "Password must contain minimum 8-16 characters, at least 1 uppercase letter, 1 lowercase letter and 1 number"
    )
    .matches(passwordRules, { message: "Please create a stronger password" })
    .required("Password is Required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Password must match")
    .required("Please Confirm your Password"),
});
