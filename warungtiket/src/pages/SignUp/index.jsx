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

export default function SignUp() {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

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
        <Box>
          <FormControl isRequired>
            <Box>
              <FormLabel>Full Name</FormLabel>
              <Input
                placeholder="Enter Your Full Name"
                // borderColor={"black"}
                // _placeholder={{ color: "black" }}
                // _hover={{ borderColor: "white" }}
                // _focusVisible={{ borderColor: "white" }}
              ></Input>
            </Box>
            <Box>
              <Flex>
                <Box w={"100%"}>
                  <FormLabel>Provinsi</FormLabel>
                  <Input
                  // borderColor={"black"}
                  // _hover={{ borderColor: "white" }}
                  // _focusVisible={{ borderColor: "white" }}
                  />
                </Box>
                <Spacer m={".5em"} />
                <Box w={"100%"}>
                  <FormLabel>Kota</FormLabel>
                  <Input
                  // borderColor={"black"}
                  // _hover={{ borderColor: "white" }}
                  // _focusVisible={{ borderColor: "white" }}
                  />
                </Box>
              </Flex>
              <FormLabel>Email</FormLabel>
              <Input
                placeholder="Enter Your Email"
                // borderColor={"black"}
                // _placeholder={{ color: "black" }}
                // _hover={{ borderColor: "white" }}
                // _focusVisible={{ borderColor: "white" }}
              ></Input>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  placeholder="Enter Your Password"
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
              <FormLabel>Confirm Password</FormLabel>
              <InputGroup>
                <Input
                  type={show ? "text" : "password"}
                  placeholder="Confirm Your Password"
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
            </Box>
          </FormControl>
        </Box>
        <Box>
          <Center>
            <Button>REGISTER</Button>
          </Center>
        </Box>
      </VStack>
    </Box>
  );
}
