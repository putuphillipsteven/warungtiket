import React, { useState } from "react";
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
  useToast,
} from "@chakra-ui/react";
import logo from "../../img/logo.png";
import { useFormik } from "formik";
import { basicSchema } from "../../schemas";
import { BiShowAlt, BiHide } from "react-icons/bi";

export default function SignUp() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const toast = useToast();


  const register = async (username, email, password) => {
    try {
      await axios.post("http://localhost:8000/auth/register", {
        username,
        password,
        email,
      });
      toast({
        title: "Register Success",
        duration: 3000,
        isClosable: true,
        status: "success",
        position: "top",
      });
      setTimeout(() => {
        navigate("/login");
      }, 1500);
    } catch (err) {
      toast({
        title: "Email Already Exist",
        duration: 3000,
        isClosable: true,
        status: "error",
        position: "top",
      });
    }
  };
  const onSubmit = async (values, actions) => {
    await register(
      (values.username = `${values.firstname} ${values.lastname}`),
      values.email,
      values.password
    );
    actions.resetForm();
  };

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
      bgColor={"#3876BF"}
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
              <Image src={logo} w={"15em"} />
            </Link>
          </Center>
        </Box>
        <form onSubmit={handleSubmit}>
          <Box>
            <FormControl>
              <Box>
                <Flex>
                  <Box w={"100%"}>
                    <FormLabel color={"white"}>First Name</FormLabel>
                    <Input
                      id="firstname"
                      name="firstname"
                      type="text"
                      onChange={handleChange}
                      value={values.firstname}
                      onBlur={handleBlur}
                      color={"black"}
                      bgColor={"white"}
                      focusBorderColor={"transparent"}
                      borderRadius={"0.5em"}
                      _hover={{ borderColor: "transparent" }}
                      borderColor={"transparent"}
                    />
                    {touched.firstname && errors.firstname ? (
                      <Alert
                        status="error"
                        fontSize={"0.7em"}
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
                  <Spacer m={"0.5em"} />
                  <Box w={"100%"}>
                    <FormLabel color={"white"}>Last Name</FormLabel>
                    <Input
                      id="lastname"
                      name="lastname"
                      type="text"
                      onChange={handleChange}
                      value={values.lastname}
                      onBlur={handleBlur}
                      color={"black"}
                      bgColor={"white"}
                      focusBorderColor={"transparent"}
                      borderRadius={"0.5em"}
                      borderColor={"transparent"}
                      _hover={{ borderColor: "transparent" }}
                    />
                    {touched.lastname && errors.lastname ? (
                      <Alert
                        status="error"
                        fontSize={"0.7em"}
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
                  <FormLabel color={"white"}>Email</FormLabel>
                  <Input
                    id="email"
                    name="email"
                    type="text"
                    onChange={handleChange}
                    value={values.email}
                    onBlur={handleBlur}
                    color={"black"}
                    bgColor={"white"}
                    focusBorderColor={"transparent"}
                    borderRadius={"0.5em"}
                    borderColor={"transparent"}
                    _hover={{ borderColor: "transparent" }}
                  ></Input>
                  {touched.email && errors.email ? (
                    <Alert
                      status="error"
                      fontSize={"0.7em"}
                      borderRadius={"0.5em"}
                      h={"1em"}
                    >
                      <AlertIcon />
                      <AlertDescription>{errors.email}</AlertDescription>
                    </Alert>
                  ) : touched.email && !errors.email ? (
                    <Alert
                      status="success"
                      fontSize={"0.7em"}
                      borderRadius={"0.5em"}
                      h={"1em"}
                    >
                      <AlertIcon />
                      <AlertTitle>Email Valid!</AlertTitle>
                    </Alert>
                  ) : null}
                </Box>
                <Box mt={"20px"}>
                  <FormLabel color={"white"}>Password</FormLabel>
                  <InputGroup>
                    <Input
                      id="password"
                      name="password"
                      onChange={handleChange}
                      value={values.password}
                      onBlur={handleBlur}
                      color={"black"}
                      bgColor={"white"}
                      focusBorderColor={"transparent"}
                      borderRadius={"0.5em"}
                      type={!show ? "password" : "text"}
                      borderColor={"transparent"}
                      _hover={{ borderColor: "transparent" }}
                    ></Input>
                    <InputRightElement w="4em">
                      <Button
                        size="s"
                        onClick={handleClick}
                        bgColor={"transparent"}
                        _hover={{ bgColor: "transparent" }}
                        color={"black"}
                      >
                        {show ? <BiHide /> : <BiShowAlt />}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                  {touched.password && errors.password ? (
                    <Alert
                      status="error"
                      fontSize={"0.7em"}
                      borderRadius={"0.5em"}
                      h={"1em"}
                    >
                      <AlertIcon />
                      <AlertDescription>{errors.password}</AlertDescription>
                    </Alert>
                  ) : touched.password && !errors.password ? (
                    <Alert
                      status="success"
                      fontSize={"0.7em"}
                      borderRadius={"0.5em"}
                      h={"1em"}
                    >
                      <AlertIcon />
                      <AlertTitle>Password Valid!</AlertTitle>
                    </Alert>
                  ) : null}
                </Box>
                <Box mt={"20px"}>
                  <FormLabel color={"white"}>Confirm Password</FormLabel>
                  <InputGroup>
                    <Input
                      id="confirmPassword"
                      name="confirmPassword"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.confirmPassword}
                      type={show ? "text" : "password"}
                      color={"black"}
                      bgColor={"white"}
                      focusBorderColor={"transparent"}
                      borderRadius={"0.5em"}
                      borderColor={"transparent"}
                      _hover={{ borderColor: "transparent" }}
                    ></Input>
                    <InputRightElement width="4em">
                      <Button
                        size="s"
                        onClick={handleClick}
                        bgColor={"transparent"}
                        _hover={{ bgColor: "transparent" }}
                        color={"black"}
                      >
                        {show ? <BiHide /> : <BiShowAlt />}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                  {touched.confirmPassword && errors.confirmPassword ? (
                    <Alert
                      status="error"
                      fontSize={"0.7em"}
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
                      fontSize={"0.7em"}
                      borderRadius={"0.5em"}
                      h={"1em"}
                    >
                      <AlertIcon />
                      <AlertTitle>Password Match!</AlertTitle>
                    </Alert>
                  ) : null}
                </Box>
              </Box>
            </FormControl>
          </Box>
          <Box mt={"1em"}>
            <Center>
              <Button
                color={"white"}
                bgColor={"#192655"}
                borderRadius={"0.5em"}
                size={"lg"}
                _hover={{ color: "black", bgColor: "#F5F5F5" }}
                _active={{ color: "#3876BF" }}
                variant={"solid"}
                isDisabled={isSubmitting}
                type={"submit"}
                w={"10em"}
              >
                <Text as={"b"}>SIGNUP</Text>
              </Button>
            </Center>
          </Box>
        </form>
        <VStack>
          <Text fontSize={"0.75em"} color={"white"}>
            Sudah Punya Akun?
          </Text>
          <Link to={"/login"}>
            <Button
              color={"white"}
              bgColor={"#192655"}
              _hover={{ color: "black", bgColor: "#F5F5F5" }}
              _active={{ color: "#3876BF" }}
              variant={"solid"}
              borderRadius={"0.5em"}
              size={"lg"}
              w={"10em"}
            >
              <Text as={"b"}>LOGIN</Text>
            </Button>
          </Link>
        </VStack>
      </VStack>
    </Box>
  );
}
