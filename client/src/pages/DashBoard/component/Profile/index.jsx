import {
  Box,
  Text,
  VStack,
  HStack,
  Divider,
  IconButton,
  useToast,
  AspectRatio,
  Image,
  Input,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
import { BsPersonCircle } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { keepLogin } from "../../../../features/login/loginSlice";
import axios from "axios";
import { useFormik } from "formik";

export default function Profile(props) {
  const toast = useToast();
  const dispatch = useDispatch();
  const [selectedImage, setSelectedImage] = useState(null);
  const user = useSelector((state) => state.login);
  console.log("user", user.user.id);

  const updateProfile = async (username, email) => {
    try {
      let formData = new FormData();
      formData.append("username", username);
      formData.append("email", email);
      formData.append("avatar", selectedImage);
      await axios.patch(
        `http://localhost:8000/auth/update-profile/${user?.user?.id}`,
        formData
      );
      toast({
        title: "Update data success",
        status: "success",
      });
    } catch (err) {
      toast({
        title: err?.message,
        status: "error",
      });
      console.log(err);
    }
  };

  const formik = useFormik({
    initialValues: {
      username: user.username || "",
      email: user.email || "",
      avatar: user.avatar || "",
    },
    onSubmit: (values) => {
      console.log("submit");
      updateProfile(values.username, values.email);
    },
  });
  return (
    <Box>
      <VStack align={"stretch"}>
        <HStack>
          <Box p={".25em .5em"}>
            {props.profile}
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
              <AspectRatio width={{ base: "20", md: "40" }} ratio={1}>
                <Box
                  borderColor="gray.300"
                  borderStyle="dashed"
                  borderWidth="2px"
                  borderRadius={"50%"}
                  shadow="sm"
                  _hover={{
                    shadow: "md",
                  }}
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                >
                  <Box
                    position="relative"
                    height="100%"
                    width="100%"
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"center"}
                  >
                    {selectedImage ? (
                      <Box>
                        <Image
                          alt="not found"
                          transform={"scale(2)"}
                          src={URL.createObjectURL(selectedImage)}
                        />
                      </Box>
                    ) : (
                      <Box
                        height="100%"
                        width="100%"
                        display="flex"
                        alignItems={"center"}
                        justifyContent={"center"}
                      >
                        ``
                        {user?.avatar ? (
                          <Image
                            src={`http://localhost:8000/uploads/avatar/${user?.avatar}`}
                            alt="profile pict"
                            transform={"scale(2)"}
                          />
                        ) : (
                          <Image />
                        )}
                      </Box>
                    )}
                    <Box
                      height="100%"
                      width="100%"
                      position="absolute"
                      display={"flex"}
                      alignItems={"center"}
                      justifyContent={"center"}
                      opacity="0.2"
                    >
                      <BsPersonCircle fontSize={"40px"} />
                    </Box>
                    <Input
                      type="file"
                      height="100%"
                      width="100%"
                      position="absolute"
                      top="0"
                      left="0"
                      opacity="0"
                      aria-hidden="true"
                      accept="image/*"
                      onChange={(event) => {
                        setSelectedImage(event.currentTarget.files[0]);
                      }}
                    />
                  </Box>
                </Box>
              </AspectRatio>
              {selectedImage ? (
                <Box position={"absolute"} display={"flex"} gap={2} mt={"10px"}>
                  <Button
                    onClick={() => setSelectedImage(null)}
                    size={"sm"}
                    w={"70px"}
                  >
                    Remove
                  </Button>
                  <Button
                    onClick={() => updateProfile()}
                    size={"sm"}
                    w={"70px"}
                  >
                    Submit
                  </Button>
                </Box>
              ) : (
                <></>
              )}
            </Box>
            <Box>
              <Text as={"b"}>Nama</Text>
            </Box>
            <Divider borderColor={"#192655"} borderWidth={"2px"} />
            <Text>{props.username}</Text>
            <Box>
              <Text as={"b"}>Email</Text>
            </Box>
            <Divider borderColor={"#192655"} borderWidth={"2px"} />
            <Text>{props.email}</Text>
          </VStack>
        </Box>
      </VStack>
    </Box>
  );
}
