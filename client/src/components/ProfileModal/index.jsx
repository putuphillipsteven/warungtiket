import {
  Box,
  Divider,
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { BsPersonCircle } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

export const ProfileModal = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const updateState = () => {
    setShow(!show);
  };
  return (
    <Box>
      <Box position={"relative"}>
        <IconButton
          size={"3em"}
          bgColor={"transparent"}
          _hover={"none"}
          icon={
            <BsPersonCircle
              size={"2em"}
              color={"white"}
              onClick={() => {
                updateState();
              }}
            />
          }
          _active={"none"}
        />
        <Box
          bgColor={"rgba(0, 0, 0, 0.5)"}
          transpa
          opacity={"1"}
          w={"100vw"}
          h={"100vh"}
          position={"fixed"}
          top={"0"}
          left={"0"}
          p={"1em 5em "}
          display={show ? "block" : "none"}
          zIndex={"10"}
        >
          <Box
            w={"20em"}
            p={"1em 1em"}
            mt={"9em"}
            mr={"4em"}
            right={"0"}
            position={"absolute"}
            bgColor={"white"}
            borderRadius={"1em"}
            color={"black"}
            zIndex={"3"}
          >
            <VStack>
              <IconButton
                size={"3em"}
                bgColor={"transparent"}
                _hover={"none"}
                icon={<AiOutlineClose size={"1em"} color={"black"} />}
                _active={"none"}
                onClick={updateState}
                alignSelf={"flex-end"}
              />

              <IconButton
                size={"3em"}
                bgColor={"transparent"}
                _hover={"none"}
                icon={<BsPersonCircle size={"3em"} color={"black"} />}
                _active={"none"}
              />
              <VStack spacing={"0"}>
                <Text>I Putu Phillip Steven</Text>
                <Text>putu.phillip@gmail.com</Text>
              </VStack>
              <Divider borderColor={"#192655"} borderWidth={"2px"} />
              <VStack>
                <Link to={"/dashboard"}>
                  <Text>Dashboard</Text>
                </Link>
                <Link>
                  <Text>Logout</Text>
                </Link>
              </VStack>
            </VStack>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
