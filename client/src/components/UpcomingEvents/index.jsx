import { Box } from "@chakra-ui/react";
import EventCard from "./EventCard";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function UpcomingEvents(props) {
  const renderedEvents = props?.events?.map((event) => (
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
