import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/index";
import EventCard from "../../components/UpcomingEvents/EventCard";
import toRupiah from "@develoka/angka-rupiah-js";
import axios from "axios";
import { BsBuildings, BsCalendarMinus, BsPinMap } from "react-icons/bs";
import { selectAllEvents } from "./eventSlice";
import { TicketList } from "./TicketList";
import { OrderedTicket } from "./OrderedTicket";
const referralCodes = require("referral-codes");
// The page
const SinglePostPage = () => {
  // Store transaction id that has been created
  const [transactionId, setTransactionId] = useState(0);
  console.log("first state", transactionId);
  const navigate = useNavigate();
  // Total price
  const [total, setTotal] = useState(0);

  // Params for pagination
  const { eventId } = useParams();

  // Select  login redux
  const user = useSelector((state) => state.login.user);

  // Make referral codes
  let reffCode = referralCodes.generate({
    prefix: "WRT-",
    postfix: "-SAP",
    charset: referralCodes.charset("alphabetic").toUpperCase(),
    length: 3,
  });

  // Select event redux
  const events = useSelector(selectAllEvents);

  // Select page
  const selectedEvent = events.find((event) => event.id === +eventId);

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
  const [transactionId, setTransactionId] = useState(0);

  console.log("transactionId", transactionId);
  // Handle qty for rendered tickets
  const handleTambah = (id) => {
    setCarts(
      carts.map((cart) => {
        if (cart.id === id) {
          return {
            ...cart,
            qty: cart.qty + 1,
            totalPrice: +cart.totalPrice + +cart.ticketPrice,
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
            totalPrice: +cart.totalPrice - +cart.ticketPrice,
          };
        } else {
          return cart;
        }
      })
    );
  };

  // Mapping rendered tickets that event have
  const renderedTickets = tickets.map((ticket, index) => (
    <TicketList
      key={index}
      totalPrice={total}
      setTotalPrice={setTotal}
      setCarts={setCarts}
      handleKurang={handleKurang}
      handleTambah={handleTambah}
      {...ticket}
    />
  ));

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
  console.log("filterKeranjang", filterKeranjang);
  const tembakTransactionDetails = async () => {
    try {
      filterKeranjang.map(async (keranjang) => {
        console.log("keranjang", keranjang);
        await axios.post("http://localhost:8000/transactionDetails/create", {
          quantity: keranjang.qty,
          price: keranjang.ticketPrice,
          totalPrice: keranjang.totalPrice,
          transactionId: transactionId,
        });
      });
      await alert("Transaction Detail Success");
    } catch (err) {
      throw err;
    }
  };
  // step 2
  // tembak transaction/event
  // Payment function
  const payment = async (status, referralCode, userId, eventId) => {
    try {
      const res = await axios.post("http://localhost:8000/transaction", {
        status,
        referralCode,
        userId,
        eventId,
      });
      setTransactionId();
      console.log("id dalam", res.data.data.id);
      await tembakTransactionDetails(res?.data?.data?.id);

      alert("Transaction Success");
      return res;
    } catch (err) {
      throw err;
    }
  };
  console.log("trIdAfter", transactionId);
  // Transaction detail function
  const tembakTransactionDetails = async (id) => {
    filterKeranjang.map(async (keranjang) => {
      console.log("id dalam tembak detail", id);
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

  // Referral Function
  const tembakReferral = async (referralCode, isUse, eventId, userId) => {
    try {
      const res = await axios.post("http://localhost:8000/referral/create", {
        referralCode,
        isUse,
        eventId,
        userId,
      });
      return res;
    } catch (err) {
      throw err;
    }
  };
  console.log("final state", transactionId);
  return (
    <Box>
      <Navbar />
      <Box p={"0 3.5em"} mt={"10em"} mb={"2em"}>
        <VStack align={"flex-start"} spacing={"2em"}>
          <Box w={"full"}>
            <EventCard />
          </Box>
          <Box w={"full"}>
            <Flex>
              <Box w={"60%"}>
                <Box>
                  <VStack align={"flex-start"}>
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
                          <Text>{selectedEvent.province}</Text>
                        </HStack>
                        <HStack>
                          <BsBuildings />
                          <Text>{selectedEvent.address}</Text>
                        </HStack>
                      </VStack>
                    </Box>
                    <Box
                      w={"full"}
                      p={".5em"}
                      border={"3px solid lightgray"}
                      borderRadius={".5em"}
                    >
                      <Text fontWeight={"bold"}>About This Event</Text>
                      <Text>{selectedEvent.eventDescription}</Text>
                    </Box>
                    <Box w={"full"}>
                      <VStack>{renderedTickets}</VStack>
                    </Box>
                  </VStack>
                </Box>
              </Box>
              <Spacer margin={".5em"} />
              <Box
                w={"40%"}
                alignSelf={"flex-end"}
                p={".5em"}
                border={"3px solid lightgray"}
                borderRadius={".5em"}
              >
                <Text fontWeight={"bold"}>Ordered Ticket</Text>
                <Box>{cartsFilter}</Box>
                <Flex>
                  <Box>
                    <Text fontWeight={"bold"}>Total</Text>
                    <Text>{toRupiah(total)}</Text>
                  </Box>
                  <Spacer />
                  <Box>
                    <Button
                      h={"100%"}
                      bgColor={"#192655"}
                      color={"white"}
                      _hover={{
                        bgColor: "#F5F5F5",
                        color: "black",
                      }}
                      _active={"none"}
                      onClick={async () => {
                        try {
                          await payment(
                            false,
                            reffCode[0],
                            user.id,
                            selectedEvent.id
                          );

                          await tembakReferral(
                            reffCode[0],
                            false,
                            selectedEvent.id,
                            user.id
                          );
                          navigate("/");
                        } catch (err) {
                          throw err;
                        }
                      }}
                    >
                      <Text>Payment</Text>
                    </Button>
                  </Box>
                </Flex>
              </Box>
            </Flex>
          </Box>
        </VStack>
      </Box>
    </Box>
  );
};

export default SinglePostPage;
