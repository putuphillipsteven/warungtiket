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
    .required(<Text as={"b"}>Email is Required</Text>),
  password: yup.string().required(<Text as={"b"}>Password is Required</Text>),
});

export const createEventSchema = yup.object().shape({
  eventName: yup
    .string()
    .required(<Text as="b">createEventSchema Name is Required!</Text>),
  date: yup.date().required(<Text as="b">Date is Required!</Text>),
  province: yup.string().required(<Text as="b">Province is Required!</Text>),
  city: yup.string().required(<Text as="b">City is Required!</Text>),
  address: yup.string().required(<Text as="b">Address is Required!</Text>),
  category: yup
    .string()
    .required(<Text as="b">Event Category is Required!</Text>),
  eventDescription: yup
    .string()
    .required(<Text as="b">Event Description is Required!</Text>),
});

export const ticketSchema = yup.object().shape({
  ticketName: yup
    .string()
    .required(<Text as="b">Ticket Name is Required!</Text>),
  ticketQuantity: yup
    .number()
    .required(<Text as="b">Ticket Quantity is Required!</Text>),
  ticketPrice: yup.number().required(<Text as="b">Price is Required!</Text>),
  ticketDescription: yup
    .string()
    .required(<Text as="b">Ticket Description is Required!</Text>),
});
