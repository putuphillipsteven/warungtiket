import {
  Box,
  Divider,
  Flex,
  Heading,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/index";
import EventCard from "../../components/UpcomingEvents/EventCard";

const SinglePostPage = () => {
  const { eventId } = useParams();

  const event = useSelector((state) =>
    state.events.find((event) => event.id == eventId)
  );

  if (!event) {
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
          <Box>
            <Flex>
              <Box bgColor={"red"}>
                <VStack align={"stretch"}>
                  <Text>{event.eventName}</Text>
                  <Text>{event.date}</Text>
                  <Text>{event.province}</Text>
                  <Text>{event.address}</Text>
                </VStack>
              </Box>
              <Spacer />
              <Box bgColor={"yellow"} w={"full"}>
                <Box>
                  <Text>{event.eventDescription}</Text>
                </Box>
                <Box>
                  <Text>{event.price == 0 ? "Free" : event.price}</Text>
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
