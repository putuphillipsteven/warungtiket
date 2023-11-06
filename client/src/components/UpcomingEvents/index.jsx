import { Box, Text, VStack } from "@chakra-ui/react";
import EventCard from "./EventCard";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useSelector } from "react-redux";
import { selectAllEvents } from "../../features/events/eventSlice";

export default function UpcomingEvents() {
  const events = useSelector(selectAllEvents);
  const renderedEvents = events.map((event) => (
    <EventCard
      eventImage={event.eventImage}
      eventName={event.eventName}
      date={event.date}
      province={event.province}
      address={event.address}
    />
  ));

  return (
    <Box p={"0 3.5em "}>
      <VStack align={"flex-start"}>
        <Box color={"white"}>
          <Text
            bgColor={"#192655"}
            p={".5em 1em"}
            borderRadius={"0.5em"}
            w={"auto"}
            fontWeight={"bold"}
          >
            Event Terdekat
          </Text>
        </Box>
        <Box width={"100%"} overflow={"hidden"}>
          <Carousel overflow={"hidden"} autoPlay={"true"} axis={"horizontal"}>
            {renderedEvents}
          </Carousel>
        </Box>
      </VStack>
    </Box>
  );
}
