import {
  Box,
  Flex,
  Text,
  HStack,
  Spacer,
  IconButton,
  Image,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.svg";
import { useState } from "react";
import { BsPersonCircle, BsTicketPerforated } from "react-icons/bs";

function Navbar(props) {
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
        bgColor={"#5D3891"}
        p={".5em 3.5em"}
        w={"full"}
        //   border="1px"
      >
        <Box>
          <Flex alignItems={"center"}>
            <Box w={"15%"}>
              <Link to={"/"}>
                <Image src={logo} />
              </Link>
            </Box>
            <Spacer />
            {props.input}
            <Spacer />
            <Box>
              <HStack spacing={"1em"}>
                <Link to={"/findevent"}>
                  <Text display={props.display} color={"#F99417"}>
                    FIND EVENT
                  </Text>
                </Link>
                <Link to={"/createevent"}>
                  <Text display={props.display} color={"#F99417"}>
                    CREATE EVENT
                  </Text>
                </Link>
                <Text as={"b"} color={"#F99417"}>
                  <Link to={"/signup"}>SIGN UP</Link>
                </Text>
                <Text as={"b"} color={"#F99417"}>
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
