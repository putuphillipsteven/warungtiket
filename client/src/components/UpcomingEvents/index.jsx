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
      title={event.title}
      category={event.category}
      status={event.status}
      location={event.location}
      date={event.date}
    />
  ));

  return (
    <Box p={"1.5em 3.5em "}>
      <VStack align={"flex-start"}>
        <Box color={"white"}>
          <Text
            bgColor={"#192655"}
            p={"1em 2em"}
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
