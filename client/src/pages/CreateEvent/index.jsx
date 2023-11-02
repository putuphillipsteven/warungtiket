import React, { useEffect, useState } from "react";
import {
  Box,
  VStack,
  Button,
  Image,
  Text,
  FormControl,
  Input,
  FormLabel,
  Center,
  Spacer,
  Flex,
  Radio,
  RadioGroup,
  Stack,
  Textarea,
  Heading,
} from "@chakra-ui/react";
import logo from "../../img/logo.svg";
import { Field, useFormik } from "formik";
import { createSchema } from "../../schemas";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import CreateTicket from "../CreateTicket";
import Upload from "./imgUpload";

export default function CreateEvent() {
  const [show, setShow] = useState(true);
  const handleClick = () => setShow(!show);
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const [selected, setSelected] = useState("input"); // Default value
  const [price, setPrice] = useState(""); // Untuk menyimpan nilai harga

  const handleChange2 = (value) => {
    setSelected(value);
    // Reset nilai harga ketika pilihan diubah
    setPrice("");
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const createEvent = async (
    eventName,
    date,
    province,
    city,
    address,
    price,
    eventDescription
  ) => {
    try {
      await axios.post("http://localhost:8000/event/create", {
        eventName,
        date,
        province,
        city,
        address,
        price,
        eventDescription,
      });
      await alert("---Create Tiket Success");
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  const onSubmit = async (values, actions) => {
    createEvent(
      values.eventName,
      values.date,
      values.province,
      values.city,
      values.address,
      values.price,
      values.eventDescription
    );
    actions.resetForm();
  };
  const {
    values,
    handleBlur,
    handleChange,
    handleSubmit,
    errors,
    touched,
    isSubmitting,
  } = useFormik({
    initialValues: {
      eventName: "",
      date: "",
      province: "",
      city: "",
      address: "",
      price: "0",
      eventDescription: "",
    },
    // validationSchema: createSchema,
    onSubmit,
  });

  return (
    <Box
      p={"1.5em 3.5em"}
      bgColor={"#3876BF"}
      minH={"100vh"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <VStack w={"50%"} spacing={"1em"} align={"stretch"}>
        <Box>
          <Center>
            <Link to={"/"}>
              <Image src={logo} w={"15em"} />
            </Link>
          </Center>
        </Box>
        <Upload />
        <form onSubmit={handleSubmit}>
          <Box>
            <FormControl>
              <VStack spacing={"1em"} align={"stretch"}>
                <Box>
                  <FormLabel color={"white"}>Event Name</FormLabel>
                  <Input
                    id="eventName"
                    name="eventName"
                    type="text"
                    onChange={handleChange}
                    value={values.eventName}
                    onBlur={handleBlur}
                    bgColor={"#F5F5F5"}
                    focusBorderColor={"transparent"}
                    borderRadius={"0.5em"}
                    borderColor={"transparent"}
                    _hover={{ borderColor: "transparent" }}
                  ></Input>
                  {touched.eventName && errors.eventName ? (
                    <Text fontSize={"0.75em"} color={"red"}>
                      {errors.eventName}
                    </Text>
                  ) : null}
                </Box>
                <Box>
                  <FormLabel color={"white"}>Date</FormLabel>
                  <Input
                    id="date"
                    name="date"
                    type="date"
                    onChange={handleChange}
                    value={values.date}
                    onBlur={handleBlur}
                    bgColor={"#F5F5F5"}
                    focusBorderColor={"transparent"}
                    borderRadius={"0.5em"}
                    borderColor={"transparent"}
                    _hover={{ borderColor: "transparent" }}
                  />
                  {touched.date && errors.date ? (
                    <Text fontSize={"0.75em"} color={"red"}>
                      {errors.date}
                    </Text>
                  ) : null}
                </Box>
                <Box>
                  <VStack spacing={"1em"} align={"stretch"}>
                    <Flex>
                      <Box w={"100%"}>
                        <FormLabel color={"white"}>Province</FormLabel>
                        <Input
                          id="province"
                          name="province"
                          type="text"
                          onChange={handleChange}
                          value={values.province}
                          onBlur={handleBlur}
                          bgColor={"#F5F5F5"}
                          focusBorderColor={"transparent"}
                          borderRadius={"0.5em"}
                          borderColor={"transparent"}
                          _hover={{ borderColor: "transparent" }}
                        />
                        {touched.province && errors.province ? (
                          <Text fontSize={"0.75em"} color={"red"}>
                            {errors.province}
                          </Text>
                        ) : null}
                      </Box>
                      <Spacer m={".5em"} />
                      <Box w={"100%"}>
                        <FormLabel color={"white"}>City</FormLabel>
                        <Input
                          id="city"
                          name="city"
                          type="text"
                          onChange={handleChange}
                          value={values.city}
                          onBlur={handleBlur}
                          bgColor={"#F5F5F5"}
                          focusBorderColor={"transparent"}
                          borderRadius={"0.5em"}
                          borderColor={"transparent"}
                          _hover={{ borderColor: "transparent" }}
                        />
                        {touched.city && errors.city ? (
                          <Text fontSize={"0.75em"} color={"red"}>
                            {errors.city}
                          </Text>
                        ) : null}
                      </Box>
                    </Flex>
                    <Box>
                      <FormLabel color={"white"}>Address</FormLabel>
                      <Input
                        id="address"
                        name="address"
                        type="text"
                        onChange={handleChange}
                        value={values.address}
                        onBlur={handleBlur}
                        bgColor={"#F5F5F5"}
                        focusBorderColor={"transparent"}
                        borderRadius={"0.5em"}
                        borderColor={"transparent"}
                        _hover={{ borderColor: "transparent" }}
                      />
                      {touched.address && errors.address ? (
                        <Text fontSize={"0.75em"} color={"red"}>
                          {errors.address}
                        </Text>
                      ) : null}
                    </Box>
                    <Box>
                      <FormLabel color={"white"}>Event Description</FormLabel>
                      <Textarea
                        id="eventDescription"
                        name="eventDescription"
                        type="text"
                        onChange={handleChange}
                        value={values.eventDescription}
                        onBlur={handleBlur}
                        bgColor={"#F5F5F5"}
                        focusBorderColor={"transparent"}
                        borderRadius={"0.5em"}
                        borderColor={"transparent"}
                        _hover={{ borderColor: "transparent" }}
                        size={"sm"}
                        h={"10em"}
                      ></Textarea>
                      {touched.eventDescription && errors.eventDescription ? (
                        <Text fontSize={"0.75em"} color={"red"}>
                          {errors.eventDescription}
                        </Text>
                      ) : null}
                    </Box>
                  </VStack>
                </Box>
              </VStack>
            </FormControl>
          </Box>
          <Box mt={"1em"}>
            <Center>
              <Button
                fontWeight={"bold"}
                color={"#F5F5F5"}
                _hover={{ bgColor: "#F5F5F5", color: "black" }}
                _active={"none"}
                bgColor={"#192655"}
                type={"submit"}
                size={"lg"}
                w={"10em"}
              >
                CREATE EVENT
              </Button>
            </Center>
          </Box>
        </form>
        <Box>
          <CreateTicket />
        </Box>
      </VStack>
    </Box>
  );
}
