import { Box, Flex, Text, HStack, Spacer, Img } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";

function Navbar() {
  return (
    <Box position={"fixed"} zIndex={"2"} w={"full"}>
      <Box bgColor={"white"} p={"0em 3.5em"}>
        <Flex flexDir={"row-reverse"}>
          <Text fontSize={".75em"}>
            <Link>Help Center</Link>
          </Text>
        </Flex>
      </Box>
      <Box
        bgColor={"gray"}
        p={".5em 3.5em"}
        w={"full"}
        //   border="1px"
      >
        <Box>
          <Flex alignItems={"center"}>
            <Box w={"15%"}>
              <Img src={logo} />
            </Box>
            <Spacer />
            <Box>
              <HStack spacing={"1em"}>
                <Link to={"/findevent"}>FIND EVENT</Link>
                <Link to={"/createevent"}>CREATE EVENT</Link>
                <Text as={"b"}>
                  <Link to={"/signup"}>SIGN UP</Link>
                </Text>
                <Text as={"b"}>
                  <Link to={"/login"}>LOGIN</Link>
                </Text>
              </HStack>
            </Box>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
}

export default Navbar;
