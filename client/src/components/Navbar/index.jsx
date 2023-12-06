import {
  Box,
  Flex,
  Text,
  HStack,
  Spacer,
  Image,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";
import { useSelector } from "react-redux";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { NavLink } from "./NavLink";

export default function Navbar(props) {
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
                <Box
                  display={{ base: "none", lg: "block" }}
                >
                  <HStack spacing={"1em"}>
                    <NavLink
                      display={props.display}
                      isLogin={isLogin}
                    />
                  </HStack>
                </Box>
                <Box>
                  {extend ? (
                    <IoMdClose
                      onClick={() => handleExtend()}
                      fontWeight={"bold"}
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
      <Box
        minH={"100vh"}
        display={extend ? "block" : "none"}
        bgColor={"white"}
        color={"gray.900"}
      >
        <Box
          display={extend ? "block" : "none"}
          m={"1em 0 0 1em"}
        >
          <VStack spacing={"1em"} align={"flex-start"}>
            <NavLink
              display={props.display}
              isLogin={isLogin}
            />
          </VStack>
        </Box>
      </Box>
    </Box>
  );
}
