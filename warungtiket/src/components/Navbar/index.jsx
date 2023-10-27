import {
  Box,
  Flex,
  Text,
  HStack,
  Spacer,
  IconButton,
  Image,
  Button,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../img/logo.svg";
import { useState } from "react";
import { BsPersonCircle, BsTicketPerforated } from "react-icons/bs";

function Navbar(props) {
  const [isLogin, setisLogin] = useState(false);
  const navigate = useNavigate();

  return (
    <Box position={"fixed"} zIndex={"10"} w={"full"}>
      <Box bgColor={"#192655"} p={"0.25em 3.5em"}>
        <Flex flexDir={"row-reverse"}>
          <HStack spacing={"0.5em"}>
            <Text fontSize={".75em"} color={"white"}>
              <Link>About WarungTiket</Link>
            </Text>
            <Text fontSize={".75em"} color={"white"}>
              <Link>Help Center</Link>
            </Text>
          </HStack>
        </Flex>
      </Box>
      <Box
        bgColor={"#3876BF"}
        p={"1em 3.5em"}
        w={"full"}
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
                  <Text display={props.display} color={"white"} as={"b"}>
                    FIND EVENT
                  </Text>
                </Link>
                <Link to={"/createevent"}>
                  <Text display={props.display} color={"white"} as={"b"}>
                    CREATE EVENT
                  </Text>
                </Link>
                <Text
                  as={"b"}
                  color={"#F99417"}
                  display={isLogin ? "none" : "block"}
                >
                  <Link to={isLogin ? "/cart" : "/signup"}>
                    {isLogin ? (
                      <IconButton
                        fontSize={"1.5em"}
                        color={"white"}
                        bgColor={"transparent"}
                        _hover={{ bgColor: "tranparent" }}
                      >
                        <BsTicketPerforated />
                      </IconButton>
                    ) : (
                      "SIGN UP"
                    )}
                  </Link>
                </Text>
                <Text as={"b"} color={"#F99417"}>
                  <Link to={isLogin ? "/profile" : "/login"}>
                    {isLogin ? (
                      <IconButton
                        fontSize={"1.5em"}
                        color={"white"}
                        bgColor={"transparent"}
                        _hover={{ bgColor: "tranparent" }}
                      >
                        <BsPersonCircle />
                      </IconButton>
                    ) : (
                      "LOGIN"
                    )}
                  </Link>
                </Text>
              </HStack>
            </Box>
          </Flex>
          <Box>
            <Flex flexDir={"row-reverse"}>
              <HStack spacing={"1em"}>
                <Button
                  size={"xs"}
                  p={"0.5em 1em"}
                  borderRadius={"0.5em"}
                  bgColor={"#192655"}
                  color={"white"}
                  _hover={"none"}
                  _active={"none"}
                  onClick={() => navigate("/signup")}
                >
                  <Text as={"b"}>#KULINER</Text>
                </Button>
                <Button
                  size={"xs"}
                  p={"0.5em 1em"}
                  borderRadius={"0.5em"}
                  bgColor={"#192655"}
                  color={"white"}
                  _hover={"none"}
                  _active={"none"}
                  onClick={() => navigate("/signup")}
                >
                  <Text as={"b"}>#MUSIK</Text>
                </Button>
                <Button
                  size={"xs"}
                  p={"0.5em 1em"}
                  borderRadius={"0.5em"}
                  bgColor={"#192655"}
                  color={"white"}
                  _hover={"none"}
                  _active={"none"}
                  onClick={() => navigate("/signup")}
                >
                  <Text as={"b"}>#OLAHRAGA</Text>
                </Button>
                <Button
                  size={"xs"}
                  p={"0.5em 1em"}
                  borderRadius={"0.5em"}
                  bgColor={"#192655"}
                  color={"white"}
                  _hover={"none"}
                  _active={"none"}
                  onClick={() => navigate("/signup")}

                >
                  <Text as={"b"}>#KEBUDAYAAN</Text>
                </Button>
                <Button
                  size={"xs"}
                  p={"0.5em 1em"}
                  borderRadius={"0.5em"}
                  bgColor={"#192655"}
                  color={"white"}
                  _hover={"none"}
                  _active={"none"}
                  onClick={() => navigate("/signup")}

                >
                  <Text as={"b"}>#KOMEDI</Text>
                </Button>
                <Button
                  size={"xs"}
                  p={"0.5em 1em"}
                  borderRadius={"0.5em"}
                  bgColor={"#192655"}
                  color={"white"}
                  _hover={"none"}
                  _active={"none"}
                  onClick={() => navigate("/signup")}
                >
                  <Text as={"b"}>#WEBINAR</Text>
                </Button>
              </HStack>
            </Flex>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Navbar;
