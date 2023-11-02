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
import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/index";
import EventCard from "../../components/UpcomingEvents/EventCard";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import useCounter from "./useCounter";
import toRupiah from "@develoka/angka-rupiah-js";
import { BsBuildings, BsCalendarMinus, BsPinMap } from "react-icons/bs";
import { selectAllEvents } from "./eventSlice";

const SinglePostPage = () => {
  const { eventId } = useParams();
  const events = useSelector(selectAllEvents);
  const selectedEvent = events.find((event) => event.id == eventId);
  const [count, increment, decrement] = useCounter(1);

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
      <Box p={"1em 5em"} mt={"13em"} mb={"3em"}>
        <VStack align={"flex-start"}>
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
                      border={"1px solid black"}
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
                      border={"1px solid black"}
                      borderRadius={".5em"}
                    >
                      <Text fontWeight={"bold"}>About This Event</Text>
                      <Text>{selectedEvent.eventDescription}</Text>
                    </Box>
                    <Box
                      w={"full"}
                      p={".5em"}
                      border={"1px solid black"}
                      borderRadius={".5em"}
                    >
                      <Flex>
                        <Box>
                          <Text fontWeight={"bold"}>Ticket</Text>
                          <Text>Regular Standing</Text>
                          <Text>
                            {selectedEvent.price == 0
                              ? "Free"
                              : toRupiah(selectedEvent.price)}
                          </Text>
                        </Box>
                        <Spacer />
                        <Box alignSelf={"flex-end"}>
                          <HStack>
                            <Button
                              size={"sm"}
                              variant={"ghost"}
                              _hover={"none"}
                              onClick={
                                count !== 1 && count !== 0 ? decrement : null
                              }
                            >
                              <AiOutlineMinusCircle />
                            </Button>
                            <Text>{count}</Text>
                            <Button
                              size={"sm"}
                              variant={"ghost"}
                              _hover={"none"}
                              _active={"none"}
                              onClick={count !== 11 ? increment : null}
                            >
                              <AiOutlinePlusCircle />
                            </Button>
                          </HStack>
                        </Box>
                      </Flex>
                    </Box>
                  </VStack>
                </Box>
              </Box>
              <Spacer margin={".5em"} />
              <Box
                w={"40%"}
                alignSelf={"flex-end"}
                p={".5em"}
                border={"1px solid black"}
                borderRadius={".5em"}
              >
                <Flex>
                  <Box>
                    <Text fontWeight={"bold"}>Total</Text>
                    <Text>{toRupiah(+selectedEvent.price * count)}</Text>
                  </Box>
                  <Spacer />
                  <Box>
                    <Button
                      h={"100%"}
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
