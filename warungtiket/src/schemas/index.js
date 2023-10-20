import * as yup from "yup";
import { Text } from "@chakra-ui/react";

const passwordRules = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
const emailRules =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const basicSchema = yup.object().shape({
  firstname: yup.string().required("First Name is Required"),
  lastname: yup.string().required("Last Name is Required"),
  email: yup
    .string()
    .email("Invalid Email Address")
    .matches(emailRules, "Invalid Email Address")
    .required(<Text as="b">Email is Required!</Text>),
  password: yup
    .string()
    .min(
      8,
      "Password Must Contain Minimum 8-16 Characters, at Least 1 Uppercase Letter, 1 Lowercase Letter and 1 Number"
    )
    .matches(passwordRules, {
      message: <Text as="b">Please Create a Stronger Password!</Text>,
    })
    .required(<Text as="b">Password is Required!</Text>),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Password Must Match!")
    .required(<Text as="b">Please Confirm your Password!</Text>),
});

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid Email")
    .matches(emailRules, "Invalid Email")
    .required("Email is Required"),
  password: yup.string().required("Password is Required"),
});

export const createSchema = yup.object().shape({
  nameEvent: yup.string().required("input name"),
  startDate: yup.date().required("input date"),
  endDate: yup.date().required("input date"),
  provinsi: yup.string().required("input data"),
  kota: yup.string().required("input data"),
  address: yup.string().required("address is required"),
  ticketCategory: yup.string().required("categoryticket is required"),
  // gratis: yup.string(0),
  // berbayar: yup.string(0),
  price: yup.number("").required("input price"),
  descriptionEvent: yup.string().required("description is Required"),
  password: yup.string().required("Password is Required"),
});
