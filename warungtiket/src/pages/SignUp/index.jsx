import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  Box,
  VStack,
  Button,
  Image,
  Text,
  FormControl,
  Input,
  FormLabel,
  InputGroup,
  InputRightElement,
  Center,
  Spacer,
  Flex,
} from "@chakra-ui/react";
import logo from "../../img/logo.png";
import { useFormik } from "formik";
import { basicSchema } from "../../schemas";
import { BiShowAlt, BiHide } from "react-icons/bi";

export default function SignUp() {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const [data, setData] = useState();
  const navigate = useNavigate();
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/users");
      setData(response.data);
      console.log("--Fetch User Success--");
    } catch (err) {
      console.log(err);
    }
  };

  const register = async (fullName, email, password) => {
    try {
      await axios.post("http://localhost:3000/users", {
        fullName,
        password,
        email,
      });
      await alert("---SignUp Success---");
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };
  const onSubmit = async (values, actions) => {
    console.log(values);
    console.log(actions);
    register(
      (values.fullName = `${values.firstname} ${values.lastname}`),
      values.email,
      values.password
    );
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
  };

  useEffect(() => {
    fetchData();
  }, [data]);

  const {
    values,
    handleBlur,
    handleChange,
    handleSubmit,
    errors,
    touched,
    isSubmitting,
  } = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: basicSchema,
    onSubmit,
  });

  return (
    <Box
      p={"1.5em 3.5em"}
      minH={"100vh"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <VStack
        w={"50%"}
        spacing={"1em"}
        align={"stretch"}
        bgColor={"transparent"}
      >
        <Box>
          <Center>
            <Image src={logo} w={"50%"} />
          </Center>
        </Box>
        <Box>
          <Center>
            <Text as={"b"}>SIGN UP</Text>
          </Center>
        </Box>
        <form onSubmit={handleSubmit}>
          <Box>
            <FormControl>
              <Box>
                <Flex>
                  <Box w={"100%"}>
                    <FormLabel>First Name</FormLabel>
                    <Input
                      id="firstname"
                      name="firstname"
                      type="text"
                      onChange={handleChange}
                      value={values.firstname}
                      onBlur={handleBlur}
                      // borderColor={"black"}
                      // _hover={{ borderColor: "white" }}
                      // _focusVisible={{ borderColor: "white" }}
                    />
                    {touched.firstname && errors.firstname ? (
                      <Text fontSize={"0.75em"} color={"red"}>
                        {errors.firstname}
                      </Text>
                    ) : null}
                  </Box>
                  <Spacer m={".5em"} />
                  <Box w={"100%"}>
                    <FormLabel>Last Name</FormLabel>
                    <Input
                      id="lastname"
                      name="lastname"
                      type="text"
                      onChange={handleChange}
                      value={values.lastname}
                      onBlur={handleBlur}
                      // borderColor={"black"}
                      // _hover={{ borderColor: "white" }}
                      // _focusVisible={{ borderColor: "white" }}
                    />
                    {touched.lastname && errors.lastname ? (
                      <Text fontSize={"0.75em"} color={"red"}>
                        {errors.lastname}
                      </Text>
                    ) : null}
                  </Box>
                </Flex>
                <Box mt={"20px"}>
                  <FormLabel>Email</FormLabel>
                  <Input
                    id="email"
                    name="email"
                    type="text"
                    onChange={handleChange}
                    value={values.email}
                    onBlur={handleBlur}
                    // placeholder="Enter Your Email"
                    // borderColor={"black"}
                    // _placeholder={{ color: "black" }}
                    // _hover={{ borderColor: "white" }}
                    // _focusVisible={{ borderColor: "white" }}
                  ></Input>
                  {touched.email && errors.email ? (
                    <Text fontSize={"0.75em"} color="red">
                      {errors.email}
                    </Text>
                  ) : null}
                </Box>
                <Box mt={"20px"}>
                  <FormLabel>Password</FormLabel>
                  <InputGroup>
                    <Input
                      id="password"
                      name="password"
                      onChange={handleChange}
                      value={values.password}
                      onBlur={handleBlur}
                      // placeholder="Enter Your Password"
                      type={show ? "text" : "password"}
                      // borderColor={"black"}
                      // _placeholder={{ color: "black" }}
                      // _hover={{ borderColor: "white" }}
                      // _focusVisible={{ borderColor: "white" }}
                    ></Input>
                    <InputRightElement width="4em">
                      <Button
                        size="xs"
                        onClick={handleClick}
                        bgColor={"transparent"}
                        _hover={{ bgColor: "transparent" }}
                      >
                        {show ? <BiHide /> : <BiShowAlt />}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                  {touched.password && errors.password ? (
                    <Text fontSize={"0.75em"} color={"red"}>
                      {errors.password}
                    </Text>
                  ) : null}
                </Box>
                <Box mt={"20px"}>
                  <FormLabel>Confirm Password</FormLabel>
                  <InputGroup>
                    <Input
                      id="confirmPassword"
                      name="confirmPassword"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.confirmPassword}
                      type={show ? "text" : "password"}
                      // placeholder="Confirm Your Password"
                      // borderColor={"black"}
                      // _placeholder={{ color: "black" }}
                      // _hover={{ borderColor: "white" }}
                      // _focusVisible={{ borderColor: "white" }}
                    ></Input>
                    <InputRightElement width="4em">
                      <Button
                        size="xs"
                        onClick={handleClick}
                        bgColor={"transparent"}
                        _hover={{ bgColor: "transparent" }}
                      >
                        {show ? <BiHide /> : <BiShowAlt />}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                  {touched.confirmPassword && errors.confirmPassword ? (
                    <Text fontSize={"0.75em"} color={"red"}>
                      {errors.confirmPassword}
                    </Text>
                  ) : null}
                </Box>
              </Box>
            </FormControl>
          </Box>
          <Box mt={"2em"}>
            <Center>
              <Button disabled={isSubmitting} w={"300px"} type="submit">
                REGISTER
              </Button>
            </Center>
          </Box>
        </form>
      </VStack>
    </Box>
  );
}
