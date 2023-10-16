import React from "react";
import {
  Box,
  VStack,
  Button,
  Image,
  Text,
  FormControl,
  Input,
  HStack,
  FormLabel,
  InputGroup,
  InputRightElement,
  Center,
} from "@chakra-ui/react";
import warung from "../Register/warung.png";

export default function Register() {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <Box bg={"#FFCB42"}>
      <VStack>
        <Box>
          <Image src={warung} h={"200px"} />
        </Box>
        <Box>
          <Text>Pendaftaran</Text>
        </Box>
        <Box>
          <FormControl isRequired>
            <Box>
              <FormLabel>Full Name</FormLabel>
              <Input
                borderColor={"black"}
                placeholder="Enter Your Full Name"
                w={"500px"}
                _placeholder={{ color: "black" }}
                _hover={{ borderColor: "white" }}
                _focusVisible={{ borderColor: "white" }}
              ></Input>
            </Box>
            <Box>
              <HStack spacing={"60px"}>
                <Box>
                  <FormLabel>Provinsi</FormLabel>
                  <Input
                    w={"100%"}
                    borderColor={"black"}
                    _hover={{ borderColor: "white" }}
                    _focusVisible={{ borderColor: "white" }}
                  ></Input>
                </Box>
                <Box>
                  <FormLabel>Kota</FormLabel>
                  <Input
                    w={"100%"}
                    borderColor={"black"}
                    _hover={{ borderColor: "white" }}
                    _focusVisible={{ borderColor: "white" }}
                  ></Input>
                </Box>
              </HStack>
              <FormLabel>Email</FormLabel>
              <Input
                borderColor={"black"}
                placeholder="Enter Your Email"
                _placeholder={{ color: "black" }}
                _hover={{ borderColor: "white" }}
                _focusVisible={{ borderColor: "white" }}
              ></Input>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  borderColor={"black"}
                  type={show ? "text" : "password"}
                  placeholder="Enter Your Password"
                  _placeholder={{ color: "black" }}
                  _hover={{ borderColor: "white" }}
                  _focusVisible={{ borderColor: "white" }}
                ></Input>
                <InputRightElement width="4em">
                  <Button size="xs" onClick={handleClick} bgColor={"white"}>
                    {show ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
              <FormLabel>Confirm Password</FormLabel>
              <InputGroup>
                <Input
                  borderColor={"black"}
                  type={show ? "text" : "password"}
                  placeholder="Confirm Your Password"
                  _placeholder={{ color: "black" }}
                  _hover={{ borderColor: "white" }}
                  _focusVisible={{ borderColor: "white" }}
                ></Input>
                <InputRightElement width="4em">
                  <Button size="xs" onClick={handleClick} bgColor={"white"}>
                    {show ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </Box>
          </FormControl>
          <Box p={"50px"}>
            <Center>
              <Button w={"200px"} bgColor={"white"}>
                REGISTER
              </Button>
            </Center>
          </Box>
        </Box>
      </VStack>
    </Box>
  );
}
