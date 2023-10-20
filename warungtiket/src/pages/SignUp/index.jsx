import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
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
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import paint from "../../img/paint.svg";
import { useFormik } from "formik";
import { basicSchema } from "../../schemas";
import { BiShowAlt, BiHide } from "react-icons/bi";
import registerIcon from "../../img/register.svg";
import loginIcon from "../../img/login.svg";

export default function SignUp() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const [data, setData] = useState();
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
            <Link to={"/"}>
              <Image src={paint} w={"400%"} />
            </Link>
          </Center>
        </Box>
        {/* <Box>
          <Center>
            <Text as={"b"}>SIGN UP</Text>
          </Center>
        </Box> */}
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
                      <Alert
                        status="error"
                        fontSize={"0.75em"}
                        borderRadius={"0.5em"}
                        h={"1em"}
                      >
                        <AlertIcon />
                        <AlertTitle>{errors.firstname}</AlertTitle>
                        <AlertDescription>
                          Please fill this field
                        </AlertDescription>
                      </Alert>
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
                      <Alert
                        status="error"
                        fontSize={"0.75em"}
                        borderRadius={"0.5em"}
                        h={"1em"}
                      >
                        <AlertIcon />
                        <AlertTitle>{errors.lastname}</AlertTitle>
                        <AlertDescription>
                          Please fill this field
                        </AlertDescription>
                      </Alert>
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
                    <Alert
                      status="error"
                      fontSize={"0.75em"}
                      borderRadius={"0.5em"}
                      h={"1em"}
                    >
                      <AlertIcon />
                      <AlertDescription>{errors.email}</AlertDescription>
                      {/* <AlertDescription>
                        Please fill this field to register
                      </AlertDescription> */}
                    </Alert>
                  ) : touched.email && !errors.email ? (
                    <Alert
                      status="success"
                      fontSize={"0.75em"}
                      borderRadius={"0.5em"}
                      h={"1em"}
                    >
                      <AlertIcon />
                      <AlertTitle>Email is Valid!</AlertTitle>
                    </Alert>
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
                      type={!show ? "password" : "text"}
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
                    <Alert
                      status="error"
                      fontSize={"0.75em"}
                      borderRadius={"0.5em"}
                      h={"1em"}
                    >
                      <AlertIcon />
                      <AlertDescription>{errors.password}</AlertDescription>
                    </Alert>
                  ) : touched.password && !errors.password ? (
                    <Alert
                      status="success"
                      fontSize={"0.75em"}
                      borderRadius={"0.5em"}
                      h={"1em"}
                    >
                      <AlertIcon />
                      <AlertTitle>Password is Valid!</AlertTitle>
                    </Alert>
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
                    <Alert
                      status="error"
                      fontSize={"0.75em"}
                      borderRadius={"0.5em"}
                      h={"1em"}
                    >
                      <AlertIcon />
                      <AlertDescription>
                        {errors.confirmPassword}
                      </AlertDescription>
                    </Alert>
                  ) : touched.confirmPassword && !errors.confirmPassword ? (
                    <Alert
                      status="success"
                      fontSize={"0.75em"}
                      borderRadius={"0.5em"}
                      h={"1em"}
                    >
                      <AlertIcon />
                      <AlertTitle>Password is Match!</AlertTitle>
                    </Alert>
                  ) : null}
                </Box>
              </Box>
            </FormControl>
          </Box>
          <Box mt={"2em"}>
            <Center>
              <Button
                bgColor={"transparent"}
                _hover={{ bgColor: "transparent" }}
                variant="solid"
                isDisabled={isSubmitting}
                type="submit"
              >
                <Image src={registerIcon} w={"50%"} />
              </Button>
            </Center>
          </Box>
        </form>
        <VStack spacing={"1em"} mt={"1em"}>
          <Text fontSize={"0.75em"}>Sudah Punya Akun?</Text>
          <Button
            type="submit"
            bgColor={"transparent"}
            _hover={{ bgColor: "transparent" }}
            variant="solid"
            isDisabled={isSubmitting}
          >
            <Image src={loginIcon} w={"50%"} />
          </Button>
        </VStack>
      </VStack>
    </Box>
  );
}
