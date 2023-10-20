import {
  Box,
  Flex,
  Text,
  HStack,
  Spacer,
  Img,
  IconButton,
  Image,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";
import { useState } from "react";
import { BsPersonCircle, BsTicketPerforated } from "react-icons/bs";

function Navbar() {
  const [isLogin, setisLogin] = useState(false);

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
                  {isLogin ? (
                    <IconButton
                      fontSize={"1.5em"}
                      _hover={{ bgColor: "transparent" }}
                      bgColor={"transparent"}
                      icon={<BsTicketPerforated />}
                    />
                  ) : (
                    <Link to={"/signup"} fontSize={"0"}>
                      SIGNUP
                    </Link>
                  )}
                </Text>
                <Text as={"b"}>
                  {isLogin ? (
                    <IconButton
                      fontSize={"1.5em"}
                      _hover={{ bgColor: "transparent" }}
                      bgColor={"transparent"}
                      icon={<BsPersonCircle />}
                    />
                  ) : (
                    <Link to={"/login"}>LOGIN</Link>
                  )}
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
