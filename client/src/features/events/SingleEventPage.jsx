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
import useCounter from "./useCounter";
import toRupiah from "@develoka/angka-rupiah-js";
import { BsBuildings, BsCalendarMinus, BsPinMap } from "react-icons/bs";
import { selectAllEvents } from "./eventSlice";
import { TicketList } from "./TicketList";

const SinglePostPage = () => {
  const [item, setItem] = useState();
  const [total, setTotal] = useState(0);
  const { eventId } = useParams();
  const events = useSelector(selectAllEvents);
  const selectedEvent = events.find((event) => event.id == eventId);
  const [count, increment, decrement] = useCounter(1);
  const tickets = selectedEvent.tickets;
  const renderedTickets = tickets.map((ticket) => (
    <TicketList
      totalPrice={total}
      setTotalPrice={setTotal}
      ticketName={ticket.ticketName}
      ticketPrice={ticket.ticketPrice}
      ticketDescription={ticket.ticketDescription}
    />
  ));
  let renderedPrice = tickets.map((ticket) => ticket.ticketPrice);
  console.log(renderedPrice);
  if (!events) {
    return (
      <Box p={"1em 3.5em"}>
        <Heading as={"h2"} size={"md"}>
          Event not found!
        </Heading>
      </Box>
    );
  }

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
                <Flex>
                  <Box>
                    <Text fontWeight={"bold"}>Total</Text>
                    <Text>{total}</Text>
                  </Box>
                  <Spacer />
                  <Box>
                    <Button
                      h={"100%"}
                      bgColor={"#192655"}
                      color={"white"}
                      _hover={{ bgColor: "#F5F5F5", color: "black" }}
                      _active={"none"}
                      onClick={() => alert("Sabar, fitur belum ada")}
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
