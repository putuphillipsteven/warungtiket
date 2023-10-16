import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/
export const basicSchema = yup.object().shape({
    firstname: yup.string().required("Please enter your First Name"),
    lastname: yup.string().required("Please enter your Last Name"),
    email: yup.string().email("Please enter a valid email").required("Required"),
    password: yup.string().min(6,"Password must contain minimum 8-16 characters,at least 1 uppercase letter,at least 1 lowercase letter and 1 number").matches(passwordRules, {message:"Please create a stronger password"}).required("Password must contain minimum 8-16 characters,at least 1 uppercase letter,at least 1 lowercase letter and 1 number"),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], "Password must match").required("Fill this section")
})