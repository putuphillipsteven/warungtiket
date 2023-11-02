import { Box, Flex, HStack, Spacer, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import {
  AiFillFacebook,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <Box p={".5em 3.5em"} bgColor={"#3876BF"} w={"full"} bottom={"0"}>
      <VStack>
        <Box w={"20%"}>
          <Flex>
            <FaFacebookSquare color={"white"} fontSize={"1.5em"} />
            <Spacer />
            <AiFillInstagram color={"white"} fontSize={"1.5em"} />
            <Spacer />
            <AiOutlineTwitter color={"white"} fontSize={"1.5em"} />
          </Flex>
        </Box>
      </VStack>
    </Box>
  );
}
