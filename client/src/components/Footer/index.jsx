import {
  Box,
  Flex,
  Spacer,
  VStack,
} from "@chakra-ui/react";
import {
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <Box
      p={".5em 3.5em"}
      bgColor={"darkGray.800"}
      w={"full"}
      bottom={"0"}
    >
      <VStack>
        <Box w={{ base: "50%" }} color={"orange.500"}>
          <Flex>
            <FaFacebookSquare fontSize={"1.5em"} />
            <Spacer />
            <AiFillInstagram fontSize={"1.5em"} />
            <Spacer />
            <AiOutlineTwitter fontSize={"1.5em"} />
          </Flex>
        </Box>
      </VStack>
    </Box>
  );
}
