import {
  Box,
  Flex,
  Text,
  HStack,
  Spacer,
  IconButton,
  Image,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { BsTicketPerforated } from "react-icons/bs";
import { ProfileModal } from "../ProfileModal";
import logo from "../../img/logo.png";
import { useSelector } from "react-redux";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

function Navbar(props) {
  const [extend, setExtend] = useState(false);
  const isLogin = useSelector(
    (state) => state.login.isLogin
  );
  const handleExtend = () => {
    setExtend(!extend);
  };
  return (
    <Box
      position={"fixed"}
      zIndex={"10"}
      w={"full"}
      top={"0"}
    >
      {/* START TOP NAVBAR SIDE */}
      <Box bgColor={"#f8f9fa"} p={"0.25em 1em"}>
        <Flex flexDir={"row-reverse"}>
          <HStack spacing={"0.5em"} color={"#212529"}>
            <Text fontSize={".75em"}>
              <Link to={"/about-us"}>
                About WarungTiket
              </Link>
            </Text>
            <Text fontSize={".75em"}>
              <Link>Help Center</Link>
            </Text>
          </HStack>
        </Flex>
      </Box>
      <Box
        bgColor={"#212529"}
        p={{ base: "1em 1em" }}
        w={"full"}
        color={"#f8f9fa"}
      >
        <Box>
          <Flex alignItems={"center"}>
            <Box w={"10em"}>
              <Link to={"/"} aspectRatio={16 / 9}>
                <Image src={logo} />
              </Link>
            </Box>
            <Spacer />
            {props.input}
            <Spacer />
            <Box>
              <HStack spacing={"1em"}>
                <Box display={{ base: "none" }}>
                  <HStack spacing={"1em"}>
                    <Link to={"/findevent"}>
                      <Text
                        display={props.display}
                        color={"#f8f9fa"}
                        fontWeight={"bold"}
                        _hover={{ color: "#fca311" }}
                      >
                        FIND EVENT
                      </Text>
                    </Link>
                    <Link to={"/createevent"}>
                      <Text
                        display={props.display}
                        color={"#f8f9fa"}
                        fontWeight={"bold"}
                        _hover={{ color: "#fca311" }}
                      >
                        CREATE EVENT
                      </Text>
                    </Link>
                    <Text
                      as={"b"}
                      color={"#f8f9fa"}
                      display={isLogin ? "none" : "block"}
                      _hover={{ color: "#fca311" }}
                    >
                      <Link
                        to={isLogin ? "/cart" : "/signup"}
                      >
                        {isLogin ? (
                          <IconButton
                            fontSize={"1.5em"}
                            color={"#f8f9fa"}
                            bgColor={"transparent"}
                            _hover={{
                              bgColor: "tranparent",
                            }}
                          >
                            <BsTicketPerforated />
                          </IconButton>
                        ) : (
                          "SIGN UP"
                        )}
                      </Link>
                    </Text>
                    <Text
                      as={"b"}
                      color={"#f8f9fa"}
                      _hover={{ color: "#fca311" }}
                    >
                      <Link to={isLogin ? "" : "/login"}>
                        {isLogin ? (
                          <ProfileModal />
                        ) : (
                          "LOGIN"
                        )}
                      </Link>
                    </Text>
                  </HStack>
                </Box>
                <Box>
                  {extend ? (
                    <IoMdClose
                      onClick={() => handleExtend()}
                    />
                  ) : (
                    <GiHamburgerMenu
                      fontWeight={"bold"}
                      onClick={() => handleExtend()}
                    />
                  )}
                </Box>
              </HStack>
            </Box>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
}

export default Navbar;
