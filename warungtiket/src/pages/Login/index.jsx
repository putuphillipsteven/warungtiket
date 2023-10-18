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
  Spacer,
  Flex,
} from "@chakra-ui/react";
import logo from "../../img/logo.png";
import { useFormik } from "formik";
import { basicSchema, loginSchema } from "../../schemas";
import { BiShowAlt, BiHide } from "react-icons/bi";
import { Link } from "react-router-dom";
import axios from "axios";

export default function SignIn() {
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/users");
      setData(response["data"]);
      console.log("---Fetch Data Sucess----");
    } catch (err) {
      console.log(err);
    }
  };

  for (let element in data) {
    console.log(data[element]);
  }

  let email = "putu.phillip@gmail.com";

  console.log(email === data[1]["email"]);

  let user = null;

  const handleClick = () => setShow(!show);

  const onSubmit = async (values, actions) => {
    console.log(values);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    await alert("Login Success");
    actions.resetForm();
  };

  useEffect(() => {
    fetchData();
  }, []);

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
            <Image src={logo} w={"50%"} />
          </Center>
        </Box>
        <Box>
          <Center>
            <Text as={"b"}>LOG IN</Text>
          </Center>
        </Box>
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
              </Box>
            </FormControl>
          </Box>
          <VStack spacing={"0"} mt={"2em"}>
            <Text fontSize={"0.75em"} _hover={{ color: "blue" }}>
              <Link>Lupa Password?</Link>
            </Text>
            <Button disabled={isSubmitting} w={"300px"} type="submit">
              LOGIN
            </Button>
          </VStack>
        </form>
        <VStack spacing={"0"}>
          <Text fontSize={"0.75em"}>Belum Punya Akun?</Text>
          <Link to={"/signup"}>
            <Button w={"300px"}>REGISTER</Button>
          </Link>
        </VStack>
      </VStack>
    </Box>
  );
}
