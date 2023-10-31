import { Box, Flex, HStack, Spacer, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import {
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiOutlineMail,
} from "react-icons/ai";
export default function Footer() {
  return (
    <Box p={"1.5em 3.5em"} bgColor={"gray"}>
      <VStack>
        <Box>
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
        </Box>
        <Box w={"20%"}>
          <Flex>
            <AiOutlineTwitter fontSize={"1.5em"} />
            <Spacer />
            <AiOutlineMail fontSize={"1.5em"} />
            <Spacer />
            <AiOutlineInstagram fontSize={"1.5em"} />
          </Flex>
        </Box>
        <Box>
          <Text as={"b"}>Created by S.A.P</Text>
        </Box>
      </VStack>
    </Box>
  );
}
