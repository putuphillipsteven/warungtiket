import {
  Box,
  Flex,
  Text,
  HStack,
  Spacer,
  IconButton,
  Image,
  Button,
  VStack,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { BsTicketPerforated } from "react-icons/bs";
import { ProfileModal } from "../ProfileModal";
import logo from "../../img/logo.png";
import { useSelector } from "react-redux";

function Navbar(props) {
  const isLogin = useSelector((state) => state.login.isLogin);
  const navigate = useNavigate();
  return (
    <Box position={"fixed"} zIndex={"10"} w={"full"} top={"0"}>
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
      <Box bgColor={"#3876BF"} p={"1em 3.5em"} w={"full"}>
        <Box>
          <VStack align={"stretch"} spacing={"0.5em"}>
            <Flex alignItems={"center"}>
              <Box w={"15em"}>
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
                    <Text
                      display={props.display}
                      color={"white"}
                      fontWeight={"bold"}
                    >
                      FIND EVENT
                    </Text>
                  </Link>
                  <Link to={"/createevent"}>
                    <Text
                      display={props.display}
                      color={"white"}
                      fontWeight={"bold"}
                    >
                      CREATE EVENT
                    </Text>
                  </Link>
                  <Text
                    as={"b"}
                    color={"white"}
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
                  <Text as={"b"} color={"white"}>
                    <Link to={isLogin ? "" : "/login"}>
                      {isLogin ? <ProfileModal /> : "LOGIN"}
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
                    _hover={{ bgColor: "#F5F5F5", color: "black" }}
                    _active={"none"}
                    onClick={() => navigate("/signup")}
                  >
                    <Text>#kuliner</Text>
                  </Button>
                  <Button
                    size={"xs"}
                    p={"0.5em 1em"}
                    borderRadius={"0.5em"}
                    bgColor={"#192655"}
                    color={"white"}
                    _hover={{ bgColor: "#F5F5F5", color: "black" }}
                    _active={"none"}
                    onClick={() => navigate("/signup")}
                  >
                    <Text>#musik</Text>
                  </Button>
                  <Button
                    size={"xs"}
                    p={"0.5em 1em"}
                    borderRadius={"0.5em"}
                    bgColor={"#192655"}
                    color={"white"}
                    _hover={{ bgColor: "#F5F5F5", color: "black" }}
                    _active={"none"}
                    onClick={() => navigate("/signup")}
                  >
                    <Text>#olahraga</Text>
                  </Button>
                  <Button
                    size={"xs"}
                    p={"0.5em 1em"}
                    borderRadius={"0.5em"}
                    bgColor={"#192655"}
                    color={"white"}
                    _hover={{ bgColor: "#F5F5F5", color: "black" }}
                    _active={"none"}
                    onClick={() => navigate("/signup")}
                  >
                    <Text>#kebudayaan</Text>
                  </Button>
                  <Button
                    size={"xs"}
                    p={"0.5em 1em"}
                    borderRadius={"0.5em"}
                    bgColor={"#192655"}
                    color={"white"}
                    _hover={{ bgColor: "#F5F5F5", color: "black" }}
                    _active={"none"}
                    onClick={() => navigate("/signup")}
                  >
                    <Text>#komedi</Text>
                  </Button>
                  <Button
                    size={"xs"}
                    p={"0.5em 1em"}
                    borderRadius={"0.5em"}
                    bgColor={"#192655"}
                    color={"white"}
                    _hover={{ bgColor: "#F5F5F5", color: "black" }}
                    _active={"none"}
                    onClick={() => navigate("/signup")}
                  >
                    <Text>#webinar</Text>
                  </Button>
                </HStack>
              </Flex>
            </Box>
          </VStack>
        </Box>
      </Box>
    </Box>
  );
}

export default Navbar;
