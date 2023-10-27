import {
  Box,
  Text,
  VStack,
  HStack,
  Divider,
  IconButton,
} from "@chakra-ui/react";
import { BsPersonCircle } from "react-icons/bs";
export default function Profile() {
  return (
    <Box>
      <VStack align={"stretch"}>
        <HStack>
          <Box p={".25em .5em"}>
            <Text as={"b"}>Profile Saya</Text>
          </Box>
        </HStack>
        <Divider borderColor={"#192655"} borderWidth={"2px"} />
        <Box p={"0 .5em"}>
          <VStack align={"stretch"} spacing={"1em"}>
            <Box>
              <Text>Foto Profile</Text>
            </Box>
            <Box>
              <IconButton
                h={"100%"}
                size={"lg"}
                color={"#192655"}
                bgColor={"transparent"}
                _hover={{ bgColor: "tranparent" }}
                icon={<BsPersonCircle size={"7em"} />}
              />
            </Box>
            <Box>
              <Text as={"b"}>Nama</Text>
            </Box>
            <Divider borderColor={"#192655"} borderWidth={"2px"} />
            <Text>I Putu Phillip Steven</Text>
            <Box>
              <Text as={"b"}>Email</Text>
            </Box>
            <Divider borderColor={"#192655"} borderWidth={"2px"} />
            <Text>putu.phillip@gmail.com</Text>
            <Box>
              <Text as={"b"}>Nomor Handphone</Text>
            </Box>
            <Divider borderColor={"#192655"} borderWidth={"2px"} />
            <Text>081213465888</Text>
            <Box>
              <Text as={"b"}>Alamat</Text>
            </Box>
            <Divider borderColor={"#192655"} borderWidth={"2px"} />
            <Text>Jambi</Text>
            <Box>
              <Text as={"b"}>No Rek</Text>
            </Box>
            <Divider borderColor={"#192655"} borderWidth={"2px"} />
            <Text>---</Text>
          </VStack>
        </Box>
      </VStack>
    </Box>
  );
}
