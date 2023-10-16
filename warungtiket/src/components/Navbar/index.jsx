import {
  Box,
  Flex,
  Text,
  HStack,
  Button,
  IconButton,
  Spacer,
  VStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <Box>
      <Box p={"0em 3.5em"}>
        <Flex flexDir={"row-reverse"}>
          <Text fontSize={".75em"}>
            <Link>Help Center</Link>
          </Text>
        </Flex>
      </Box>
      <Box
        bgColor={"gray"}
        p={".5em 3.5em"}
        position={"fixed"}
        w={"full"}
        //   zIndex={"2"}
        //   border="1px"
      >
        <Box>
          <Flex>
            <Box>
              <Text>WARUNG TIKET</Text>
            </Box>
            <Spacer />
            <Box>
              <HStack spacing={"1em"}>
                <Link to={"/findevent"}>FIND EVENT</Link>
                <Link to={"/createevent"}>CREATE EVENT</Link>
                <Link to={"/signup"}>SIGN UP</Link>
                <Link to={"/login"}>LOGIN</Link>
              </HStack>
            </Box>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
}

export default Navbar;
