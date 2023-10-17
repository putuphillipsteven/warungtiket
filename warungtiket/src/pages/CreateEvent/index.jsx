import React from "react";
import {
  Box,
  VStack,
  Checkbox,
  Button,
  Image,
  Text,
  FormControl,
  Input,
  FormLabel,
  Center,
  Spacer,
  Flex,
} from "@chakra-ui/react";
import logo from "../../img/logo.png";
import { Field } from "formik";

export default function CreateEvent() {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <Box
      p={"1.5em 3.5em"}
      minH={"100vh"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <VStack w={"50%"} spacing={"1em"} align={"stretch"}>
        <Box>
          <Center>
            <Image src={logo} w={"50%"} />
          </Center>
        </Box>
        <Box>
          <Center>
            <Text as={"b"}>CREATE EVENT</Text>
          </Center>
        </Box>
        <Box>
          <FormControl isRequired>
            <Box>
              <FormLabel>Nama</FormLabel>
              <Input
                placeholder="Nama Lengkap"
                // borderColor={"black"}
                // _placeholder={{ color: "black" }}
                // _hover={{ borderColor: "white" }}
                // _focusVisible={{ borderColor: "white" }}
              ></Input>
            </Box>
            <Box>
              <FormLabel>Tanggal</FormLabel>
              <Input
                placeholder="Tanggal Event"
                // borderColor={"black"}
                // _placeholder={{ color: "black" }}
                // _hover={{ borderColor: "white" }}
                // _focusVisible={{ borderColor: "white" }}
              ></Input>
            </Box>
            <Box>
              <Flex>
                <Box w={"100%"}>
                  <FormLabel>Waktu Mulai</FormLabel>
                  <Input
                  // borderColor={"black"}
                  // _hover={{ borderColor: "white" }}
                  // _focusVisible={{ borderColor: "white" }}
                  />
                </Box>
                <Spacer m={".5em"} />
                <Box w={"100%"}>
                  <FormLabel>Waktu Selesai</FormLabel>
                  <Input
                  // borderColor={"black"}
                  // _hover={{ borderColor: "white" }}
                  // _focusVisible={{ borderColor: "white" }}
                  />
                </Box>
              </Flex>
              <Flex>
                <Box w={"100%"}>
                  <FormLabel>Provinsi</FormLabel>
                  <Input
                  // borderColor={"black"}
                  // _hover={{ borderColor: "white" }}
                  // _focusVisible={{ borderColor: "white" }}
                  />
                </Box>
                <Spacer m={".5em"} />
                <Box w={"100%"}>
                  <FormLabel>Kota</FormLabel>
                  <Input
                  // borderColor={"black"}
                  // _hover={{ borderColor: "white" }}
                  // _focusVisible={{ borderColor: "white" }}
                  />
                </Box>
              </Flex>
              <Box>
                <FormLabel>Alamat</FormLabel>
                <Input
                  placeholder="Alamat Lengkap"
                  // borderColor={"black"}
                  // _placeholder={{ color: "black" }}
                  // _hover={{ borderColor: "white" }}
                  // _focusVisible={{ borderColor: "white" }}
                ></Input>
              </Box>
              <Box>
                <Field type="radio" name="picked" value="One" />
                One
              </Box>
              <Box>
                <Field type="radio" name="picked" value="Two" />
                Two
              </Box>
              <Box>
                <FormLabel>Kategori Tiket</FormLabel>
                <Box>
                  <Checkbox colorScheme="green" defaultChecked>
                    Berbayar
                  </Checkbox>
                </Box>
                <Spacer />
                <Box>
                  <Checkbox colorScheme="green" defaultChecked>
                    Gratis
                  </Checkbox>
                </Box>
              </Box>
              <Box>
                <FormLabel>Deskripsi</FormLabel>
                <Input
                  placeholder="Deskripsi Event"
                  // borderColor={"black"}
                  // _placeholder={{ color: "black" }}
                  // _hover={{ borderColor: "white" }}
                  // _focusVisible={{ borderColor: "white" }}
                ></Input>
              </Box>
              <Box>
                <FormLabel>Harga Tiket</FormLabel>
                <Input
                  placeholder="Masukkan Harga Tiket"
                  // borderColor={"black"}
                  // _placeholder={{ color: "black" }}
                  // _hover={{ borderColor: "white" }}
                  // _focusVisible={{ borderColor: "white" }}
                ></Input>
              </Box>
              {/* <FormLabel>Confirm Password</FormLabel>
              <InputGroup>
                <Input
                  type={show ? "text" : "password"}
                  placeholder="Confirm Your Password"
                  // borderColor={"black"}
                  // _placeholder={{ color: "black" }}
                  // _hover={{ borderColor: "white" }}
                  // _focusVisible={{ borderColor: "white" }}
                ></Input>
                <InputRightElement width="4em">
                  <Button size="xs" onClick={handleClick}>
                    {show ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup> */}
            </Box>
          </FormControl>
        </Box>
        <Box>
          <Center>
            <Button>Buat Tiket Event</Button>
          </Center>
        </Box>
      </VStack>
    </Box>
  );
}
