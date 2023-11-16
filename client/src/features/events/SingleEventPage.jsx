import {
  Box,
  Button,
  Flex,
  FormLabel,
  HStack,
  Heading,
  Spacer,
  Text,
  VStack,
  useToast,
  Input,
  InputGroup,
  FormControl,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/index";
import EventCard from "../../components/UpcomingEvents/EventCard";
import toRupiah from "@develoka/angka-rupiah-js";
import axios from "axios";
import {
  BsBuildings,
  BsCalendarMinus,
  BsPinMap,
} from "react-icons/bs";
import { selectAllEvents } from "./eventSlice";
import { TicketList } from "./TicketList";
import { OrderedTicket } from "./OrderedTicket";
import referralCodes from "@develoka/angka-rupiah-js";

// The page
const SinglePostPage = () => {

  // Store transaction id that has been created
  const [fieldImage, setFieldImage] = useState(null);
  const [transactionId, setTransactionId] = useState(0);
  const navigate = useNavigate();

  // Total price
  const [total, setTotal] = useState(0);
  const [totalQty, setTotalQty] = useState(0);
  const toast = useToast();

  // Params for pagination
  const { eventId } = useParams();
  const [inputReff, setInputReff] = useState("");
  console.log(inputReff);

  // Select  login redux
  const user = useSelector((state) => state.login.user);

  // Select event redux
  const events = useSelector(selectAllEvents);

  // Select page
  const selectedEvent = events.find(
    (event) => event.id === +eventId
  );

  // Select tickets that event had
  const tickets = selectedEvent.tickets;

  // Render ticket cart
  const newTickets = tickets.map((ticket) => {
    return {
      id: ticket.id,
      ticketName: ticket.ticketName,
      ticketPrice: +ticket.ticketPrice,
      qty: 0,
      totalPrice: 0,
    };
  });

  // Cart local states
  const [carts, setCarts] = useState([...newTickets]);

  // Add ticket to cart when qty !0
  let filteredCarts = carts.filter((cart) => {
    return cart.qty !== 0;
  });

  // Mapping cart and pass the props
  const cartsFilter = filteredCarts.map((cart, index) => (
    <OrderedTicket key={index} {...cart} />
  ));

  // step 1
  // set local set utk transaction id/event id
  // Shoot transaction id
  // const [transactionId, setTransactionId] = useState(0);

  // Handle qty for rendered tickets
  const handleTambah = (id) => {
    setCarts(
      carts.map((cart) => {
        if (cart.id === id) {
          return {
            ...cart,
            qty: cart.qty + 1,
            totalPrice:
              +cart.totalPrice + +cart.ticketPrice,
            totalQty: cart.totalQty + cart.qty,
          };
        } else {
          return cart;
        }
      })
    );
  };

  // Handle qty for rendered tickets
  const handleKurang = (id) => {
    setCarts(
      carts.map((cart) => {
        if (cart.id === id) {
          return {
            ...cart,
            qty: cart.qty - 1,
            totalPrice:
              +cart.totalPrice - +cart.ticketPrice,
          };
        } else {
          return cart;
        }
      })
    );
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      username: "",
      password: "",
      image: null,
    },
    onSubmit: (values) => {
      // register(
      //   values.email,
      //   values.username,
      //   values.password
      // );
    },
  });

  // Mapping rendered tickets that event have
  const renderedTickets = tickets.map((ticket, index) => (
    <TicketList
      key={index}
      totalPrice={total}
      setTotalPrice={setTotal}
      setCarts={setCarts}
      totalQty={totalQty}
      setTotalQty={setTotalQty}
      handleKurang={handleKurang}
      handleTambah={handleTambah}
      {...ticket}
    />
  ));
  const [diskon, setDiskon] = useState(0);

  const date = new Date();

  const check = () => {
    const selisihInTime = Math.round(
      (new Date(date.getTime()) -
        new Date(selectedEvent.date)) /
        (1000 * 3600 * 24)
    );
    if (selisihInTime >= 7) {
      setDiskon(100000);
    } else if (selisihInTime >= 3 && selisihInTime <= 7) {
      setDiskon(50000);
    } else {
      setDiskon(10000);
    }
  };
  useEffect(() => {
    check();
  }, []);

  // Condition if events not found
  if (!events) {
    return (
      <Box p={"1em 3.5em"}>
        <Heading as={"h2"} size={"md"}>
          Event not found!
        </Heading>
      </Box>
    );
  }
  let filterKeranjang = carts.filter((cart) => {
    return cart.qty !== 0;
  });

  // step 2
  // tembak transaction/event
  // Payment function
  const payment = async (
    status,
    referralCode,
    userId,
    eventId,
    referralUsed,
    totalQuantity,
    totalPrice,
    isUse
  ) => {
    try {
      if (+user?.id !== +selectedEvent?.userId) {
        if (totalQuantity != 0) {
          if (user?.id) {
            let formData = new FormData();
            formData.append("status", status);
            formData.append("referralCode", referralCode);
            formData.append("userId", userId);
            formData.append("eventId", eventId);
            formData.append("referralUsed", referralUsed);
            formData.append("totalQuantity", totalQuantity);
            formData.append("totalPrice", totalPrice);
            formData.append("isUse", isUse);
            const res = await axios.post(
              "http://localhost:8000/transaction",
              formData
            );
            await tembakTransactionDetails(
              res?.data?.data?.id
            );
            navigate("/");
            toast({
              title: "Transaction success",
              status: "success",
            });
            console.log("res", res);
            return res;
          } else {
            toast({
              title: "Login dulu",
              status: "error",
            });
          }
        } else {
          toast({
            title:
              "Tolong minimal 1 ya untuk pembelian tiketnya mas",
            status: "error",
          });
        }
      } else {
        toast({
          title: "Anda penyelenggara event ini",
          status: "error",
        });
      }
    } catch (err) {
      toast({
        title: "Code referral tidak ditemukan",
        status: "error",
      });
    }
  };
  // Transaction detail function
  const tembakTransactionDetails = async (id) => {
    filterKeranjang.map(async (keranjang) => {
      const res = await axios.post(
        "http://localhost:8000/transactionDetails/create",
        {
          quantity: keranjang.qty,
          price: keranjang.ticketPrice,
          totalPrice: keranjang.totalPrice,
          transactionId: id,
        }
      );
      return res;
    });
  };

  return (
    <Box>
      <Navbar />
      <Box p={"0 3.5em"} mt={"10em"} mb={"2em"}>
        <VStack align={"flex-start"} spacing={"2em"}>
          <Box w={"full"}>
            <EventCard />
          </Box>
          <Box w={"full"} p={"1em 0"}>
            <Flex w={"100%"}>
              <Box w={"60%"} h={"100%"}>
                <Flex align={"stretch"} flexDir={"column"}>
                  <Box
                    w={"full"}
                    p={".5em"}
                    border={"3px solid lightgray"}
                    borderRadius={".5em"}
                  >
                    <VStack align={"stretch"}>
                      <Text fontWeight={"bold"}>
                        {selectedEvent.eventName}
                      </Text>
                      <HStack>
                        <BsCalendarMinus />
                        <Text>{selectedEvent.date}</Text>
                      </HStack>
                      <HStack>
                        <BsPinMap />
                        <Text>
                          {
                            selectedEvent?.province
                              ?.province
                          }
                        </Text>
                      </HStack>
                      <HStack>
                        <BsBuildings />
                        <Text>{selectedEvent.address}</Text>
                      </HStack>
                    </VStack>
                  </Box>
                  <Spacer m={".5em"} />
                  <Box
                    w={"full"}
                    p={".5em"}
                    border={"3px solid lightgray"}
                    borderRadius={".5em"}
                  >
                    <Text fontWeight={"bold"}>
                      About This Event
                    </Text>
                    <Text>
                      {selectedEvent.eventDescription}
                    </Text>
                  </Box>
                  <Spacer m={".5em"} />
                  <Box w={"full"}>
                    <VStack>{renderedTickets}</VStack>
                  </Box>
                </Flex>
              </Box>
              <Spacer margin={".5em"} />
              <Box
                w={"40%"}
                alignSelf={"flex-end"}
                p={".5em"}
                border={"3px solid lightgray"}
                borderRadius={".5em"}
              >
                <VStack align={"stretch"}>
                  <Text fontWeight={"bold"}>
                    Ordered Ticket
                  </Text>
                  <Box>{cartsFilter}</Box>
                  <Box>
                    <VStack align={"stretch"}>
                      <FormControl>
                        <FormLabel>Referral Code</FormLabel>
                        <Input
                          id="referralUsed"
                          name="referralUsed"
                          type="text"
                          variant="flushed"
                          focusBorderColor={"none"}
                          borderColor={"gray"}
                          value={inputReff.toUpperCase()}
                          onChange={(e) =>
                            setInputReff(
                              e.target.value.toUpperCase()
                            )
                          }
                        />
                      </FormControl>
                    </VStack>
                  </Box>
                  <Flex>
                    <Box>
                      <Text
                        fontSize={".75em"}
                        fontWeight={"bold"}
                      >
                        Diskon Presale
                      </Text>
                      <Text fontSize={".75em"}>
                        {toRupiah(diskon)}
                      </Text>
                      <Text
                        fontSize={".75em"}
                        fontWeight={"bold"}
                      >
                        Total Diskon
                      </Text>
                      <Text fontSize={".75em"}>
                        {toRupiah(diskon * totalQty)}
                      </Text>
                      <Text
                        fontSize={".75em"}
                        fontWeight={"bold"}
                      >
                        Total Qty
                      </Text>
                      <Text fontSize={".75em"}>
                        {totalQty}
                      </Text>
                      <Text fontWeight={"bold"}>Total</Text>
                      <Text>
                        {toRupiah(
                          total - diskon * totalQty
                        )}
                      </Text>
                    </Box>
                    <Spacer />

                    <Spacer m={".5em"} />
                    <Box alignSelf={"flex-end"}>
                      <Button
                        bgColor={"#192655"}
                        color={"white"}
                        _hover={{
                          bgColor: "#F5F5F5",
                          color: "black",
                        }}
                        size={"xs"}
                        _active={"none"}
                        onClick={async () => {
                          try {
                            await payment(
                              false,
                              referralCodes,
                              user.id,
                              selectedEvent.id,
                              inputReff,
                              totalQty,
                              total - diskon
                            );
                          } catch (err) {
                            throw err;
                          }
                        }}
                      >
                        <Text>Payment</Text>
                      </Button>
                    </Box>
                  </Flex>
                </VStack>
                <Box>
                  <form onSubmit={formik.handleSubmit}>
                    <FormLabel fontSize={".75em"}>
                      Bukti Pembayaran
                    </FormLabel>
                    <FormControl mb={5}>
                      <InputGroup>
                        <Input
                          h={"100%"}
                          type="file"
                          name="image"
                          size="xs"
                          onChange={(event) => {
                            setFieldImage(
                              event.currentTarget.files[0]
                            );
                          }}
                          p={".5em 1em"}
                        />
                      </InputGroup>
                    </FormControl>
                  </form>
                </Box>
              </Box>
            </Flex>
          </Box>
        </VStack>
      </Box>
    </Box>
  );
};

export default SinglePostPage;
