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
} from "@chakra-ui/react";
import logo from "../../img/logo.svg";
import paint from "../../img/paint.svg";
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
  const [show, setShow] = React.useState(true);
  const handleClick = () => setShow(!show);
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
        navigate("/");
      } else {
        alert("Password Salah");
      }
    } else {
      alert("Email Tidak Terdaftar");
    }
  };

  const onSubmit = async (values, actions) => {
    check(values.email, values.password);
    console.log(values);
    console.log(actions);
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
                  {errors.email ? (
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
                      {errors.password}
                    </Alert>
                  ) : null}
                </Box>
              </Box>
            </FormControl>
          </Box>
          <VStack spacing={"2em"} mt={"2em"}>
            <Button
              type="submit"
              bgColor={"transparent"}
              _hover={{ bgColor: "transparent" }}
              variant="solid"
              isDisabled={isSubmitting}
            >
              <Image src={loginIcon} w={"50%"} />
            </Button>
            <Text fontSize={"0.75em"} _hover={{ color: "blue" }}>
              <Link>Lupa Password?</Link>
            </Text>
          </VStack>
        </form>
        <VStack spacing={"0.5em"}>
          <Text fontSize={"0.75em"}>Belum Punya Akun?</Text>
          <Link to={"/signup"}>
            <Button
              bgColor={"transparent"}
              _hover={{ bgColor: "transparent" }}
              variant="solid"
            >
              <Image src={registerIcon} w={"50%"} />
            </Button>
          </Link>
        </VStack>
      </VStack>
    </Box>
  );
}
