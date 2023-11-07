import React, { useState } from "react";
import {
  Box,
  Button,
  Text,
  FormLabel,
  Input,
  RadioGroup,
  Radio,
  Center,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toRupiah from "@develoka/angka-rupiah-js";
import { ticketSchema } from "../../schemas";

function CreateTicket(props) {
  const [showTicket, setShowTicket] = useState(true);
  const [selected, setSelected] = useState("input"); // Default value
  const [price, setPrice] = useState(""); // Untuk menyimpan nilai harga
  console.log("props", props.id);
  const handleChange2 = (value) => {
    setSelected(value);
    // Reset nilai harga ketika pilihan diubah
    setPrice("");
  };
  const navigate = useNavigate();
  const validationSchema = Yup.object().shape({
    ticketName: Yup.string().required("Ticket Name is required"),
    ticketQuantity: Yup.number().required("Ticket Quantity is required"),
    price: Yup.number().required("Price is required"),
    ticketDescription: Yup.string().required("Ticket Description is required"),
  });

  const createTicket = async (
    ticketName,
    ticketQuantity,
    ticketPrice,
    ticketDescription,
    eventID
  ) => {
    try {
      await axios.post("http://localhost:8000/ticket/create", {
        ticketName,
        ticketQuantity,
        ticketPrice,
        ticketDescription,
        eventID,
      });
      await alert("Create Ticket Success");
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  const onSubmit = async (values, actions) => {
    createTicket(
      values.ticketName,
      +values.ticketQuantity,
      +values.ticketPrice,
      values.ticketDescription,
      props.id
    );
    console.log(values);
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
      ticketName: "",
      ticketQuantity: "",
      ticketPrice: "0",
      ticketDescription: "",
    },
    validationSchema: ticketSchema,
    onSubmit,
  });

  return (
    <Box>
      {showTicket ? (
        <form onSubmit={handleSubmit}>
          <Box
            mt={".5em"}
            bgColor={"white"}
            borderWidth="1px"
            borderRadius="md"
            p={4}
            boxShadow="md"
          >
            <VStack align={"stretch"} spacing={2}>
              <Box
              // alignSelf={"center"}
              // p={".5em 1em"}
              // bgColor={"#192655"}
              // borderRadius={".5em"}
              >
                <Center>
                  <Text fontSize={"1em"} fontWeight={"bold"}>
                    CREATE TICKET
                  </Text>
                </Center>
              </Box>
              <Box>
                <FormLabel>Ticket Name</FormLabel>
                <Input
                  id="ticketName"
                  name="ticketName"
                  type="text"
                  variant="flushed"
                  placeholder="Input Name"
                  focusBorderColor={"none"}
                  borderColor={"gray"}
                  value={values.ticketName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.ticketName && errors.ticketName ? (
                  <Text fontSize={"0.75em"} color={"red"}>
                    {errors.ticketName}
                  </Text>
                ) : null}
              </Box>
              <Box>
                <FormLabel>Ticket Quantity</FormLabel>
                <Input
                  id="ticketQuantity"
                  name="ticketQuantity"
                  type="number"
                  variant="flushed"
                  placeholder="Input Quantity"
                  focusBorderColor={"none"}
                  borderColor={"gray"}
                  value={values.ticketQuantity}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.ticketQuantity && errors.ticketQuantity ? (
                  <Text fontSize={"0.75em"} color={"red"}>
                    {errors.ticketQuantity}
                  </Text>
                ) : null}
              </Box>
              <Box>
                <RadioGroup value={selected} onChange={handleChange2}>
                  <FormLabel>Ticket Type</FormLabel>
                  <HStack spacing={"5"}>
                    <Radio
                      id="gratis"
                      name="gratis"
                      value="gratis"
                      colorScheme="blue"
                    >
                      Free
                    </Radio>
                    <Radio
                      outline="red"
                      id="berbayar"
                      name="berbayar"
                      value="berbayar"
                      colorScheme="blue"
                    >
                      Paid
                    </Radio>
                  </HStack>
                </RadioGroup>
                {selected === "gratis" ? (
                  <Box>
                    <Input type="hidden" value="0" />
                  </Box>
                ) : selected === "berbayar" ? (
                  <Box>
                    <FormLabel>Price</FormLabel>
                    <Box>
                      <Text position={"relative"} top={"0"}>
                        <Input
                          id="ticketPrice"
                          name="ticketPrice"
                          type="number"
                          variant="flushed"
                          placeholder="Rp."
                          value={values.ticketPrice}
                          onChange={handleChange}
                          bgColor={"white"}
                          focusBorderColor={"none"}
                        />
                        {toRupiah(values.ticketPrice)}
                      </Text>
                    </Box>
                    {touched.ticketPrice && errors.ticketPrice ? (
                      <Text fontSize={"0.75em"} color={"red"}>
                        {errors.ticketPrice}
                      </Text>
                    ) : null}
                  </Box>
                ) : null}
              </Box>
              <Box>
                <FormLabel>Ticket Description</FormLabel>
                <Input
                  id="ticketDescription"
                  name="ticketDescription"
                  type="ticketDescription"
                  variant="flushed"
                  placeholder="Input Description"
                  focusBorderColor={"none"}
                  borderColor={"gray"}
                  value={values.ticketDescription}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.ticketDescription &&
                errors.ticketDescription ? (
                  <Text fontSize={"0.75em"} color={"red"}>
                    {errors.ticketDescription}
                  </Text>
                ) : null}
              </Box>
            </VStack>
            <Center>
              <Button
                type="submit"
                size="md"
                height="40px"
                width="200px"
                fontWeight={"bold"}
                color={"#F5F5F5"}
                _hover={{ bgColor: "#F5F5F5", color: "black" }}
                _active={"none"}
                bgColor={"#192655"}
                mt={4}
                // onClick={isSub}
              >
                SUBMIT TICKET
              </Button>
            </Center>
          </Box>
        </form>
      ) : null}
      {/* <Box
        mt={"1em"}
        bgColor={"white"}
        borderWidth="1px"
        borderRadius="md"
        p={4}
        boxShadow="md"
      >
        <Center>
          <Button
            type="submit"
            size="md"
            height="40px"
            width="200px"
            fontWeight={"bold"}
            color={"#F5F5F5"}
            _hover={{ bgColor: "#F5F5F5", color: "black" }}
            _active={"none"}
            bgColor={"#192655"}
            // mt={4}
            onClick={() => setShowTicket(!showTicket)}
          >
            CREATE TICKET
          </Button>
        </Center>
      </Box> */}
    </Box>
  );
}

export default CreateTicket;
