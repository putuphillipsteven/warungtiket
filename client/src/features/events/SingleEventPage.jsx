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
import { useParams } from "react-router-dom";
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
const referralCodes = require("referral-codes");
const SinglePostPage = () => {
  const [total, setTotal] = useState(0);
  const { eventId } = useParams();
  const user = useSelector((state) => state.login.user);
  console.log("user", user);
  let reffCode = referralCodes.generate({
    prefix: "WRT-",
    postfix: "-SAP",
    charset: referralCodes
      .charset("alphabetic")
      .toUpperCase(),
    length: 3,
  });
  const events = useSelector(selectAllEvents);

  const selectedEvent = events.find(
    (event) => event.id === +eventId
  );
  console.log(selectedEvent);

  const tickets = selectedEvent.tickets;

  const newTickets = tickets.map((ticket) => {
    return {
      id: ticket.id,
      ticketName: ticket.ticketName,
      ticketPrice: +ticket.ticketPrice,
      qty: 0,
      totalPrice: 0,
    };
  });

  const [carts, setCarts] = useState([...newTickets]);

  let filteredCarts = carts.filter((cart) => {
    return cart.qty !== 0;
  });
  const cartsFilter = filteredCarts.map((cart, index) => (
    <OrderedTicket key={index} {...cart} />
  ));

  const payment = async (
    status,
    referralCode,
    userId,
    eventId
  ) => {
    try {
      console.log("payment", {
        status,
        referralCode,
        userId,
        eventId,
      });
      await axios.post(
        "http://localhost:8000/transaction",
        {
          status,
          referralCode,
          userId,
          eventId,
        }
      );

      await alert("Transaction Success");
    } catch (err) {
      throw err;
    }
  };

  const handleTambah = (id) => {
    setCarts(
      carts.map((cart) => {
        if (cart.id === id) {
          return {
            ...cart,
            qty: cart.qty + 1,
            totalPrice:
              +cart.totalPrice + +cart.ticketPrice,
          };
        } else {
          return cart;
        }
      })
    );
  };

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

  if (!events) {
    return (
      <Box p={"1em 3.5em"}>
        <Heading as={"h2"} size={"md"}>
          Event not found!
        </Heading>
      </Box>
    );
  }
  console.log("tickets", tickets);
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
                          <Text>
                            {selectedEvent.province}
                          </Text>
                        </HStack>
                        <HStack>
                          <BsBuildings />
                          <Text>
                            {selectedEvent.address}
                          </Text>
                        </HStack>
                      </VStack>
                    </Box>
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
                <Text fontWeight={"bold"}>
                  Ordered Ticket
                </Text>
                <Box>
                  {cartsFilter}
                  {/* <OrderedTicket /> */}
                </Box>

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
                      onClick={() =>
                        payment(
                          false,
                          reffCode[0],
                          user.id,
                          selectedEvent.id
                        )
                      }
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
