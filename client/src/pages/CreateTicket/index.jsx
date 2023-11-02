import React, { useState } from "react";
import {
  Box,
  Button,
  Text,
  Stack,
  FormLabel,
  Input,
  RadioGroup,
  Radio,
  Flex,
  Center,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateTicket() {
  const [show, setShow] = useState(true);
  const handleClick = () => setShow(!show);
  const [data, setData] = useState([]);

  const [selected, setSelected] = useState("input"); // Default value
  const [price, setPrice] = useState(""); // Untuk menyimpan nilai harga

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
      await alert("Create Ticket Succes");
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  const onSubmit = async (values, actions) => {
    createTicket(
      values.ticketName,
      values.ticketQuantity,
      values.ticketPrice,
      values.ticketDescription,
      values.eventID
    );
    console.log(values);
    actions.resetForm();
  };

  const formik = useFormik({
    initialValues: {
      ticketName: "",
      ticketQuantity: "",
      ticketPrice: "0",
      ticketDescription: "",
    },
    // validationSchema,
    onSubmit,
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <Box
        bgColor={"#E8E2E2"}
        borderWidth="1px"
        borderRadius="md"
        p={4}
        boxShadow="md"
      >
        <Stack spacing={2}>
          <Box>
            <FormLabel>Ticket Name</FormLabel>
            <Input
              variant="flushed"
              placeholder="Input Name"
              name="ticketName"
              value={formik.values.ticketName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.ticketName && formik.errors.ticketName ? (
              <Text fontSize={"0.75em"} color={"red"}>
                {formik.errors.ticketName}
              </Text>
            ) : null}
          </Box>
          <Box>
            <FormLabel>Ticket Quantity</FormLabel>
            <Input
              type="number"
              variant="flushed"
              placeholder="Input Quantity"
              name="ticketQuantity"
              value={formik.values.ticketQuantity}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.ticketQuantity && formik.errors.ticketQuantity ? (
              <Text fontSize={"0.75em"} color={"red"}>
                {formik.errors.ticketQuantity}
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
                  id="ticketPrice"
                  name="ticketPrice"
                  type="number"
                  placeholder="Rp.0"
                  value={formik.values.ticketPrice}
                  onChange={formik.handleChange}
                  bgColor={"white"}
                  color={"black"}
                />
                {formik.touched.ticketPrice && formik.errors.ticketPrice ? (
                  <Text fontSize={"0.75em"} color={"red"}>
                    {formik.errors.ticketPrice}
                  </Text>
                ) : null}
              </Box>
            ) : null}
          </Box>
          <Box>
            <FormLabel>Ticket Description</FormLabel>
            <Input
              variant="flushed"
              placeholder="Input Description"
              name="ticketDescription"
              value={formik.values.ticketDescription}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.ticketDescription &&
            formik.errors.ticketDescription ? (
              <Text fontSize={"0.75em"} color={"red"}>
                {formik.errors.ticketDescription}
              </Text>
            ) : null}
          </Box>
        </Stack>
        <Center>
          <Button
            colorScheme="blue"
            type="submit"
            size="md"
            height="40px"
            width="200px"
            // border="2px"
            // borderColor="black"
            // _hover={{ color: "black", bgColor: "#E1AA74" }}
            // _active={{ color: "red" }}
            // bgColor="#192655"
            mt={4}
          >
            <Text as={"b"} textColor={"white"}>
              Create Ticket
            </Text>
          </Button>
        </Center>
      </Box>
    </form>
  );
}

export default CreateTicket;

// import React from "react";
// import {
//   Box,
//   Badge,
//   Button,
//   Text,
//   Stack,
//   FormLabel,
//   Input,
//   Flex,
// } from "@chakra-ui/react";

// function CreateTicket() {
//   return (
//     <Box
//       bgColor={"#E8E2E2"}
//       borderWidth="1px"
//       borderRadius="md"
//       p={4}
//       boxShadow="md"
//     >
//       <Stack spacing={2}>
//         <Box>
//           <Box>
//             <FormLabel>Ticket Name</FormLabel>
//             <Input variant="flushed" placeholder="Input Name" />
//           </Box>
//           <Box>
//             <FormLabel>Ticket Quantity</FormLabel>
//             <Input variant="flushed" placeholder="Input Quantity" />
//           </Box>
//           <Box>
//             <FormLabel>Price</FormLabel>
//             <Input variant="flushed" placeholder="Rp." />
//           </Box>
//           <Box>
//             <FormLabel>Ticket Description</FormLabel>
//             <Input variant="flushed" placeholder="Input Description" />
//           </Box>
//         </Box>
//         <Button
//           _hover={{ color: "black", bgColor: "#E1AA74" }}
//           _active={{ color: "red" }}
//           bgColor="#192655"
//           mt={4}
//         >
//           <Text textColor={"white"}>Create Ticket</Text>
//         </Button>
//       </Stack>
//     </Box>
//   );
// }

// export default CreateTicket;
