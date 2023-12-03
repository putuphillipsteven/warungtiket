import { AspectRatio, Box, Center } from "@chakra-ui/react";
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
    <Box p={{ base: "0 1em" }}>
      <Carousel
        autoPlay={"true"}
        axis={"horizontal"}
        infiniteLoop={true}
        stopOnHover={true}
        showArrows={false}
        showThumbs={false}
      >
        {renderedEvents}
      </Carousel>
    </Box>
  );
}
