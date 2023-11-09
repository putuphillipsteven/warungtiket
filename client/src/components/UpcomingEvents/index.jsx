import { Box, Text, VStack, Image } from "@chakra-ui/react";
import EventCard from "./EventCard";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useSelector } from "react-redux";
import { selectAllEvents } from "../../features/events/eventSlice";

export default function UpcomingEvents() {
  const events = useSelector(selectAllEvents);
  const renderedEvents = events.map((event) => (
    <EventCard {...event} />
  ));
  return (
    <Box>
      <Box p={"0 3.5em"}>
        <Box width={"100%"} overflow={"hidden"}>
          <Carousel
            overflow={"hidden"}
            autoPlay={"true"}
            axis={"horizontal"}
          >
            {renderedEvents}
          </Carousel>
        </Box>
      </Box>
    </Box>
  );
}
