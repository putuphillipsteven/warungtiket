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
} from "@chakra-ui/react";
import logo from "../../img/logo.svg";
import { useFormik } from "formik";
import { createSchema } from "../../schemas";
import { useNavigate } from "react-router";
import axios from "axios";

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

  const fD = async () => {
    try {
      const responses = await axios.get("http://localhost:3000/events");
      setData(responses.data);
      console.log("----sks-----");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fD();
  }, []);

  const createEvent = async (
    nameEvent,
    startDate,
    endDate,
    provinsi,
    kota,
    address,
    price,
    eventDescription
  ) => {
    try {
      await axios.post("http://localhost:3000/events", {
        nameEvent,
        startDate,
        endDate,
        provinsi,
        kota,
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

  const onChangeSubmit = async (values, actions) => {
    console.log(values);
    console.log(actions);
    createEvent(
      values.nameEvent,
      values.startDate,
      values.endDate,
      values.provinsi,
      values.kota,
      values.address,
      values.price,
      values.eventDescription
    );
    await new Promise((resolve) => setTimeout(resolve, 1000));
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
      nameEvent: "",
      startDate: "",
      endDate: "",
      provinsi: "",
      kota: "",
      address: "",
      price: "0",
      eventDescription: "",
    },
    // validationSchema: createSchema,
    onSubmit: (values, actions) => {
      onChangeSubmit(values);
      actions.resetForm();
    },
  });

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
        <form onSubmit={handleSubmit}>
          <Box>
            <FormControl>
              <Box>
                <FormLabel>Event Name</FormLabel>
                <Input
                  placeholder="input here"
                  id="nameEvent"
                  name="nameEvent"
                  type="text"
                  onChange={handleChange}
                  value={values.nameEvent}
                  onBlur={handleBlur}
                ></Input>
                {touched.nameEvent && errors.nameEvent ? (
                  <Text fontSize={"0.75em"} color={"red"}>
                    {errors.nameEvent}
                  </Text>
                ) : null}
              </Box>
              <Box>
                <FormLabel>Start Date</FormLabel>
                <Input
                  id="startDate"
                  name="startDate"
                  type="datetime-local"
                  onChange={handleChange}
                  value={values.startDate}
                  onBlur={handleBlur}
                />
                {touched.startDate && errors.startDate ? (
                  <Text fontSize={"0.75em"} color={"red"}>
                    {errors.startDate}
                  </Text>
                ) : null}
              </Box>
              <Box>
                <FormLabel>End Date</FormLabel>
                <Input
                  id="endDate"
                  name="endDate"
                  type="datetime-local"
                  onChange={handleChange}
                  value={values.endDate}
                  onBlur={handleBlur}
                />
                {touched.endDate && errors.endDate ? (
                  <Text fontSize={"0.75em"} color={"red"}>
                    {errors.endDate}
                  </Text>
                ) : null}
              </Box>
              <Box>
                <Flex>
                  <Box w={"100%"}>
                    <FormLabel>Provinsi</FormLabel>
                    <Input
                      placeholder="..."
                      id="provinsi"
                      name="provinsi"
                      type="text"
                      onChange={handleChange}
                      value={values.provinsi}
                      onBlur={handleBlur}
                    />
                    {touched.provinsi && errors.provinsi ? (
                      <Text fontSize={"0.75em"} color={"red"}>
                        {errors.provinsi}
                      </Text>
                    ) : null}
                  </Box>
                  <Spacer m={".5em"} />
                  <Box w={"100%"}>
                    <FormLabel>Kota</FormLabel>
                    <Input
                      placeholder="..."
                      id="kota"
                      name="kota"
                      type="text"
                      onChange={handleChange}
                      value={values.kota}
                      onBlur={handleBlur}
                    />
                    {touched.kota && errors.kota ? (
                      <Text fontSize={"0.75em"} color={"red"}>
                        {errors.kota}
                      </Text>
                    ) : null}
                  </Box>
                </Flex>
                <Box>
                  <FormLabel>Address</FormLabel>
                  <Input
                    placeholder="..."
                    id="address"
                    name="address"
                    type="text"
                    onChange={handleChange}
                    value={values.address}
                    onBlur={handleBlur}
                  />
                  {touched.address && errors.address ? (
                    <Text fontSize={"0.75em"} color={"red"}>
                      {errors.address}
                    </Text>
                  ) : null}
                </Box>

                <Box>
                  <RadioGroup value={selected} onChange={handleChange2}>
                    <Text>Ticket Category</Text>
                    <Radio id="gratis" name="gratis" value="gratis">
                      Gratis
                    </Radio>
                    <Radio id="berbayar" name="berbayar" value="berbayar">
                      Berbayar
                    </Radio>
                  </RadioGroup>

                  {selected === "gratis" ? (
                    <Box>
                      <Input type="hidden" value="0" />
                    </Box>
                  ) : selected === "berbayar" ? (
                    <Box>
                      <Text>Price: </Text>
                      <Input
                        id="price"
                        name="price"
                        type="number"
                        placeholder="Rp.0"
                        value={values.price}
                        onChange={handleChange}
                      />
                      {touched.price && errors.price ? (
                        <Text fontSize={"0.75em"} color={"red"}>
                          {errors.price}
                        </Text>
                      ) : null}
                    </Box>
                  ) : null}
                </Box>

                {/* <Box>
                  <FormLabel>Ticket Category</FormLabel>
                  <RadioGroup>
                    <VStack align={"baseline"}>
                      <Radio
                        id="price"
                        name="ticketcategory"
                        type="ticketcategory"
                        value="0"
                        onChange={handleClick}
                      >
                        Gratis
                      </Radio>
                      <Radio
                        value="harga2"
                        isChecked={show}
                        onChange={handleClick}
                      >
                        Berbayar
                      </Radio>
                    </VStack>
                  </RadioGroup>
                </Box> */}
                {/* {show ? (
                  <Box>
                    <FormLabel>Price</FormLabel>
                    <Input
                      placeholder="Rp. "
                      id="price"
                      name="price"
                      type="number"
                      onChange={handleChange}
                      value={values.price}
                      onBlur={handleBlur}
                    />
                    {touched.price && errors.price ? (
                      <Text fontSize={"0.75em"} coloddr={"red"}>
                        {errors.price}
                      </Text>
                    ) : null}
                  </Box>
                ) : (
                  ""
                )} */}
                <Box>
                  <FormLabel>Event Description</FormLabel>
                  <Input
                    placeholder="..."
                    id="eventDescription"
                    name="eventDescription"
                    type="text"
                    onChange={handleChange}
                    value={values.eventDescription}
                    onBlur={handleBlur}
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
        </form>
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
      </VStack>
    </Box>
  );
}
