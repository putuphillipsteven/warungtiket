import React from "react";
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

const onSubmit = async (values, actions) => {
  console.log(values);
  console.log(actions);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm()
}

export default function SignUp() {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const {values, handleBlur, handleChange, handleSubmit, errors, isSubmitting} = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
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
      <VStack w={"50%"} spacing={"1em"} align={"stretch"}>
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
                    {<Text fontSize={"0.75em"} color={"red"}>{errors.firstname}</Text>}
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
                     {<Text fontSize={"0.75em"} color={"red"}>{errors.lastname}</Text>}
                  </Box>
                </Flex>
                <FormLabel>Email</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  onChange={handleChange}
                  value={values.email}
                  onBlur={handleBlur}
                  // placeholder="Enter Your Email"
                  // borderColor={"black"}
                  // _placeholder={{ color: "black" }}
                  // _hover={{ borderColor: "white" }}
                  // _focusVisible={{ borderColor: "white" }}
                ></Input>
                {<Text fontSize={"0.75em"} color="red">{errors.email}</Text>}
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
                    <Button size="xs" onClick={handleClick}>
                      {show ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                {<Text fontSize={"0.75em"} color={"red"}>{errors.password}</Text>}
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
                    <Button size="xs" onClick={handleClick}>
                      {show ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                {<Text fontSize={"0.75em"} color={"red"}>{errors.confirmPassword}</Text>}
              </Box>
            </FormControl>
          </Box>
          <Box mt={"2em"}>
            <Center>
              <Button disabled={isSubmitting} type="submit">REGISTER</Button>
            </Center>
          </Box>
        </form>
      </VStack>
    </Box>
  );
}
