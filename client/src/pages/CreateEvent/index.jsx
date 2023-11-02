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
} from "@chakra-ui/react";
import logo from "../../img/logo.svg";
import { useFormik } from "formik";
import { createSchema } from "../../schemas";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import CreateTicket from "../CreateTicket";

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
        <Box>
          <Center>
            <Text color={"orange"} as={"b"}>
              CREATE EVENT
            </Text>
          </Center>
        </Box>
        <form onSubmit={handleSubmit}>
          <Box>
            <FormControl>
              <Box>
                <FormLabel color={"white"}>Event Name</FormLabel>
                <Input
                  placeholder="..."
                  id="eventName"
                  name="eventName"
                  type="text"
                  onChange={handleChange}
                  value={values.eventName}
                  onBlur={handleBlur}
                  bgColor={"white"}
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
                  type="text"
                  // type="datetime-local"
                  onChange={handleChange}
                  value={values.date}
                  onBlur={handleBlur}
                  bgColor={"white"}
                />
                {touched.date && errors.date ? (
                  <Text fontSize={"0.75em"} color={"red"}>
                    {errors.date}
                  </Text>
                ) : null}
              </Box>
              <Box>
                <Flex>
                  <Box w={"100%"}>
                    <FormLabel color={"white"}>Province</FormLabel>
                    <Input
                      placeholder="..."
                      id="province"
                      name="province"
                      type="text"
                      onChange={handleChange}
                      value={values.province}
                      onBlur={handleBlur}
                      bgColor={"white"}
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
                      placeholder="..."
                      id="city"
                      name="city"
                      type="text"
                      onChange={handleChange}
                      value={values.city}
                      onBlur={handleBlur}
                      bgColor={"white"}
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
                    placeholder="..."
                    id="address"
                    name="address"
                    type="text"
                    onChange={handleChange}
                    value={values.address}
                    onBlur={handleBlur}
                    bgColor={"white"}
                  />
                  {touched.address && errors.address ? (
                    <Text fontSize={"0.75em"} color={"red"}>
                      {errors.address}
                    </Text>
                  ) : null}
                </Box>

                <Box>
                  <RadioGroup value={selected} onChange={handleChange2}>
                    <Text color={"white"}>Ticket Category</Text>
                    <Stack spacing={"5"} direction="row">
                      <Radio
                        id="gratis"
                        name="gratis"
                        value="gratis"
                        colorScheme="white"
                      >
                        Gratis
                      </Radio>
                      <Radio
                        id="berbayar"
                        name="berbayar"
                        value="berbayar"
                        colorScheme="white"
                      >
                        Berbayar
                      </Radio>
                    </Stack>
                  </RadioGroup>
                  {selected === "gratis" ? (
                    <Box>
                      <Input type="hidden" value="0" />
                    </Box>
                  ) : selected === "berbayar" ? (
                    <Box>
                      <Text color={"white"}>Price: </Text>
                      <Input
                        id="price"
                        name="price"
                        type="number"
                        placeholder="Rp.0"
                        value={values.price}
                        onChange={handleChange}
                        bgColor={"white"}
                        color={"black"}
                      />
                      {touched.price && errors.price ? (
                        <Text fontSize={"0.75em"} color={"red"}>
                          {errors.price}
                        </Text>
                      ) : null}
                    </Box>
                  ) : null}
                </Box>
                <Box>
                  <FormLabel color={"white"}>Event Description</FormLabel>
                  <Input
                    placeholder="..."
                    id="eventDescription"
                    name="eventDescription"
                    type="text"
                    onChange={handleChange}
                    value={values.eventDescription}
                    onBlur={handleBlur}
                    bgColor={"white"}
                  ></Input>
                  {touched.eventDescription && errors.eventDescription ? (
                    <Text fontSize={"0.75em"} color={"red"}>
                      {errors.eventDescription}
                    </Text>
                  ) : null}
                </Box>
              </Box>
            </FormControl>
          </Box>
          <Box>
            <Center>
              <Button
                _hover={{ bgColor: "none" }}
                _active={"none"}
                bgColor={"#E1AA74"}
                type={"submit"}
              >
                Create Ticket
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
