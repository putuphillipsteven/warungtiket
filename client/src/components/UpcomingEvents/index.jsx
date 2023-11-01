import { Box, Text, VStack } from "@chakra-ui/react";
import EventCard from "./EventCard";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useSelector } from "react-redux";

export default function UpcomingEvents() {
  const events = useSelector((state) => state.events);
  console.log(events);
  const renderedEvents = events.map((event) => (
    <EventCard
      eventName={event.eventName}
      date={event.date}
      province={event.province}
      address={event.address}
      price={event.price == 0 ? "Free" : event.price}
    />
  ));

  return (
    <Box p={"1.5em 3.5em "}>
      <VStack align={"stretch"}>
        <Box>
          <Text as={"b"}>Event yang akan datang</Text>
        </Box>
        <Carousel overflow={"hidden"} autoPlay={"true"} axis={"horizontal"}>
          {renderedEvents}
        </Carousel>
      </VStack>
    </Box>
  );
}
