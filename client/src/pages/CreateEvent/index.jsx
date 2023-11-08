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
  Textarea,
  Select,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import logo from "../../img/logo.png";
import { useFormik } from "formik";
import { createEventSchema } from "../../schemas";
import {
  Link,
  Navigate,
  useNavigate,
} from "react-router-dom";
import axios from "axios";
import CreateTicket from "../CreateTicket";
import Upload from "./imgUpload";
import useCounter from "../../features/events/useCounter";
import { useSelector } from "react-redux";

export default function CreateEvent() {
  const [file, setFile] = useState();
  const [eventId, setEventId] = useState(0);
  console.log("eventId", eventId);
  // setShowEvent fungsinya untuk menampilkan ketika form event belum diisi
  // form tiket tdk akan muncul, namun ketika  form event
  // telah diisi secara otomatis akan menampilkan form input tket
  const [showEvent, setShowEvent] = useState(false);

  const navigate = useNavigate();
  // get data from redux
  const user = useSelector((state) => state.login.user);

  // add form ticket
  const [count, increment, decrement] = useCounter(0);

  // add form ticket
  const renderedTicket = () => {
    let arr = [];
    for (let i = 0; i < count; i++) {
      arr.push(<CreateTicket id={eventId} />);
    }
    return arr;
  };

  // add form ticket
  let addTicket = renderedTicket();
  const renderedaddTicket = addTicket.map((element) => {
    return <>{element}</>;
  });

  const createEvent = async (
    eventName,
    date,
    province,
    address,
    category,
    eventDescription,
    userId
  ) => {
    try {
      const formData = new FormData();
      formData.append("img", file);
      formData.append("eventName", eventName);
      formData.append("date", date);
      formData.append("province", province);
      formData.append("address", address);
      formData.append("category", category);
      formData.append("eventDescription", eventDescription);
      formData.append("userId", userId);
      const res = await axios.post(
        "http://localhost:8000/event/create",
        formData
      );
      console.log("formData", formData);

      setEventId(res?.data?.data?.id);
      console.log("res", res);
      await alert("Create Event Success");
    } catch (err) {
      console.log(err);
    }
  };
  const [province, setProvince] = useState([]);
  const provinceData = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8000/province"
      );
      setProvince(res?.data?.data);
      return res?.data?.data;
    } catch (err) {
      throw err;
    }
  };
  useEffect(() => {
    provinceData();
  }, []);

  const [city, setCity] = useState([]);
  const cityData = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8000/city"
      );
      setCity(res?.data?.data);
      return res?.data?.data;
    } catch (err) {
      throw err;
    }
  };
  useEffect(() => {
    cityData();
  }, []);

  const [category, setCategory] = useState([]);
  const categoryData = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8000/category"
      );
      setCategory(res?.data?.data);
      return res?.data?.data;
    } catch (err) {
      throw err;
    }
  };
  useEffect(() => {
    categoryData();
  }, []);

  const onSubmit = async (values, actions) => {
    createEvent(
      values.eventName,
      values.date,
      values.province,
      values.address,
      values.category,
      values.eventDescription,
      user.id
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
      address: "",
      category: "",
      eventDescription: "",
    },
    validationSchema: createEventSchema,
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
      border={"1px"}
    >
      <VStack w={"50%"} spacing={"1em"} align={"stretch"}>
        <Box>
          <Center>
            <Link to={"/"}>
              <Image src={logo} w={"15em"} />
            </Link>
          </Center>
        </Box>
        <Center>
          <Text as="b">CREATE EVENT</Text>
        </Center>
        <Upload file={file} setFile={setFile} />
        <form onSubmit={handleSubmit}>
          <Box>
            <FormControl>
              <VStack spacing={"1em"} align={"stretch"}>
                <Box>
                  <FormLabel color={"white"}>
                    Event Name
                  </FormLabel>
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
                    <Alert
                      status="error"
                      fontSize={"0.7em"}
                      borderRadius={"0.5em"}
                      h={"1em"}
                    >
                      <AlertIcon />
                      {errors.eventName}
                    </Alert>
                  ) : null}
                </Box>
                <Box>
                  <FormLabel color={"white"}>
                    Date
                  </FormLabel>
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
                    <Alert
                      status="error"
                      fontSize={"0.7em"}
                      borderRadius={"0.5em"}
                      h={"1em"}
                    >
                      <AlertIcon />
                      {errors.date}
                    </Alert>
                  ) : null}
                </Box>
                <Box>
                  <VStack spacing={"1em"} align={"stretch"}>
                    <Flex>
                      <Box w={"100%"}>
                        <Box>
                          <FormLabel color={"white"}>
                            Province
                          </FormLabel>
                          <Select
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
                            _hover={{
                              borderColor: "transparent",
                            }}
                            placeholder={"Select Province"}
                          >
                            {province.map((option) => (
                              <option value={option.id}>
                                {option.province}
                              </option>
                            ))}
                          </Select>
                          {touched.province &&
                          errors.province ? (
                            <Alert
                              status="error"
                              fontSize={"0.7em"}
                              borderRadius={"0.5em"}
                              h={"1em"}
                            >
                              <AlertIcon />
                              {errors.province}
                            </Alert>
                          ) : null}
                        </Box>
                        <Box>
                          <FormLabel color={"white"}>
                            Address
                          </FormLabel>
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
                            _hover={{
                              borderColor: "transparent",
                            }}
                          />
                          {touched.address &&
                          errors.address ? (
                            <Alert
                              status="error"
                              fontSize={"0.7em"}
                              borderRadius={"0.5em"}
                              h={"1em"}
                            >
                              <AlertIcon />
                              {errors.address}
                            </Alert>
                          ) : null}
                        </Box>
                        <Box>
                          <FormLabel color={"white"}>
                            Event Category
                          </FormLabel>
                          <Input
                            id="category"
                            name="category"
                            type="text"
                            onChange={handleChange}
                            value={values.category}
                            onBlur={handleBlur}
                            bgColor={"#F5F5F5"}
                            focusBorderColor={"transparent"}
                            borderRadius={"0.5em"}
                            borderColor={"transparent"}
                            _hover={{
                              borderColor: "transparent",
                            }}
                          >
                            {/* {category.map((option) => (
                              <option value={option.id}>
                                {option.categoriesName}
                              </option>
                            ))} */}
                          </Input>
                          {touched.category &&
                          errors.category ? (
                            <Alert
                              status="error"
                              fontSize={"0.7em"}
                              borderRadius={"0.5em"}
                              h={"1em"}
                            >
                              <AlertIcon />
                              {errors.category}
                            </Alert>
                          ) : null}
                        </Box>
                        <Box>
                          <FormLabel color={"white"}>
                            Event Description
                          </FormLabel>
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
                            _hover={{
                              borderColor: "transparent",
                            }}
                            size={"sm"}
                            h={"10em"}
                          ></Textarea>
                          {touched.eventDescription &&
                          errors.eventDescription ? (
                            <Alert
                              status="error"
                              fontSize={"0.7em"}
                              borderRadius={"0.5em"}
                              h={"1em"}
                            >
                              <AlertIcon />
                              {errors.eventDescription}
                            </Alert>
                          ) : null}
                        </Box>
                      </Box>
                    </Flex>
                  </VStack>
                </Box>
              </VStack>
            </FormControl>
          </Box>
          <Box mt={"1em"}>
            <Center>
              <Button
                type={"submit"}
                size="md"
                height="40px"
                width="200px"
                fontWeight={"bold"}
                color={"#F5F5F5"}
                _hover={{
                  bgColor: "#F5F5F5",
                  color: "black",
                }}
                _active={"none"}
                bgColor={"#192655"}
                onClick={() => {
                  setShowEvent(true);
                }}
                isDisabled={isSubmitting}
              >
                CREATE EVENT
              </Button>
            </Center>
          </Box>
        </form>
        <Box>{renderedaddTicket}</Box>
        {showEvent ? (
          <Box>
            <CreateTicket />
            <Center>
              <Button
                type={"submit"}
                size="md"
                height="40px"
                width="200px"
                fontWeight={"bold"}
                color={"#F5F5F5"}
                _hover={{
                  bgColor: "#F5F5F5",
                  color: "black",
                }}
                _active={"none"}
                bgColor={"#192655"}
                mt={"1em"}
                onClick={() => {
                  navigate("/");
                }}
              >
                Create Ticket Completed
              </Button>
            </Center>
          </Box>
        ) : null}
      </VStack>
    </Box>
  );
}
