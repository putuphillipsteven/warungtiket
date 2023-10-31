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
    <Box p={".5em 3.5em"} bgColor={"#3876BF"}>
      <VStack>
        {/* <Box>
          <HStack spacing={"1.5em"}>
            <Text as={"b"}>
              <Link>Tentang SAP</Link>
            </Text>
            <Text as={"b"}>
              <Link>Kontak</Link>
            </Text>
            <Text as={"b"}>
              <Link>Syarat dan Ketentuan</Link>
            </Text>
          </HStack>
        </Box> */}
        <Box w={"20%"}>
          <Flex>
            <FaFacebookSquare color={"white"} fontSize={"1.5em"} />
            <Spacer />
            <AiFillInstagram color={"white"} fontSize={"1.5em"} />
            <Spacer />
            <AiOutlineTwitter color={"white"} fontSize={"1.5em"} />
          </Flex>
        </Box>
        {/* <Box>
          <Text as={"b"}>Created by S.A.P</Text>
        </Box> */}
      </VStack>
    </Box>
  );
}
