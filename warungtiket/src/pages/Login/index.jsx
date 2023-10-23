import React, { useEffect, useState } from "react";
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
  Flex,
  Alert,
  AlertIcon,
  AlertDescription,
  AlertTitle,
  useToast,
} from "@chakra-ui/react";
import logo from "../../img/logo.svg";
import { useFormik } from "formik";
import { loginSchema } from "../../schemas";
import { BiShowAlt, BiHide } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import registerIcon from "../../img/register.svg";
import loginIcon from "../../img/login.svg";
import axios from "axios";

export default function SignIn() {
  const [accounts, setAccounts] = useState([]);
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const toast = useToast();
  let newEmail = null;
  let indexUser = null;
  const fetchDataLogin = async () => {
    try {
      const response = await axios.get("http://localhost:3000/users");
      setAccounts(response.data);
      console.log(response);
      console.log(`--Fetch Login Success--`);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchDataLogin();
  }, []);
  const updateIsLogin = (index) => {
    axios
      .patch(`http://localhost:3000/users/${index}`, {
        isLogin: "true",
      })
      .then((resp) => {
        console.log(resp.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const allEmail = accounts.map((item) => item.email);

  const check = (email, password) => {
    if (allEmail.includes(email)) {
      newEmail = accounts[allEmail.indexOf(email)];
      indexUser = allEmail.indexOf(email) + 1;
      updateIsLogin(indexUser);
      console.log(newEmail);
      console.log(indexUser);
      if (newEmail.password.includes(password)) {
        toast({
          title: "Login Success",
          duration: 5000,
          isClosable: true,
          status: "success",
          position: "top",
        });
        navigate("/");
      } else {
        toast({
          title: "Password Salah",
          duration: 5000,
          isClosable: true,
          status: "error",
          position: "top",
        });
      }
    } else {
      toast({
        title: "Akun Belum Terdaftar",
        duration: 5000,
        isClosable: true,
        status: "error",
        position: "top",
      });
    }
  };

  const onSubmit = async (values, actions) => {
    check(values.email, values.password);
    await new Promise((resolve) => setTimeout(resolve, 1000));
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
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit,
  });

  return (
    <Box
      p={"1.5em 3.5em"}
      minH={"100vh"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      bgColor={"#5D3891"}
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
              <Image src={logo} w={"100%"} />
            </Link>
          </Center>
        </Box>
        {/* <Box>
          <Center>
            <Text as={"b"}>LOG IN</Text>
          </Center>
        </Box> */}
        <form onSubmit={handleSubmit}>
          <Box>
            <FormControl>
              <Box>
                <Flex>
                  <Box w={"100%"}></Box>
                  <Box w={"100%"}></Box>
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
                    borderRadius={"0"}
                    borderColor={"transparent"}
                    _hover={{ borderColor: "transparent" }}
                  ></Input>
                  {errors.email ? (
                    <Alert
                      status="error"
                      fontSize={"0.75em"}
                      borderRadius={"0"}
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
                      borderRadius={"0"}
                      h={"1em"}
                    >
                      <AlertIcon />
                      <AlertTitle>Email is Valid!</AlertTitle>
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
                      type={!show ? "password" : "text"}
                      color={"black"}
                      bgColor={"white"}
                      focusBorderColor={"transparent"}
                      borderRadius={"0"}
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
                      fontSize={"0.75em"}
                      borderRadius={"0"}
                      h={"1em"}
                    >
                      <AlertIcon />
                      {errors.password}
                    </Alert>
                  ) : null}
                </Box>
              </Box>
            </FormControl>
          </Box>
          <VStack mt={"1em"}>
            <Button
              type="submit"
              bgColor={"transparent"}
              _hover={{ bgColor: "transparent" }}
              variant="solid"
              isDisabled={isSubmitting}
            >
              <Image src={loginIcon} w={"30%"} />
            </Button>
            <Text
              fontSize={"0.75em"}
              _hover={{ color: "#F99417" }}
              color={"white"}
            >
              <Link to={"/changepassword"}>Lupa Password?</Link>
            </Text>
          </VStack>
        </form>
        <VStack mt={"1em"} spacing={"0.5em"}>
          <Text fontSize={"0.75em"} color={"white"}>
            Belum Punya Akun?
          </Text>
          <Link to={"/signup"}>
            <Button
              bgColor={"transparent"}
              _hover={{ bgColor: "transparent" }}
              variant="solid"
            >
              <Image src={registerIcon} w={"30%"} />
            </Button>
          </Link>
        </VStack>
      </VStack>
    </Box>
  );
}
