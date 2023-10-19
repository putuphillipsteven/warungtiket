import { Box, Grid, Heading, Input, Text } from "@chakra-ui/react";
import Navbar from "../../components/Navbar";
import EventCard from "../../components/UpcomingEvents/EventCard";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function FindEvent() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <Box>
      <Navbar
        display={"none"}
        input={
          <Box>
            <Input />
          </Box>
        }
      />
      <Box p={"3.5em"} pt={"5em"}>
        <Box>
          <Text as={"b"} fontSize={"3em"}>
            Acara Musik
          </Text>
          <Carousel responsive={responsive}>
            <EventCard margin={"0em 1em"} />
            <EventCard margin={"0em 1em"} />
            <EventCard margin={"0em 1em"} />
            <EventCard margin={"0em 1em"} />
          </Carousel>
        </Box>
        <Box>
          <Text as={"b"} fontSize={"3em"}>
            Olahraga
          </Text>
          <Carousel responsive={responsive}>
            <EventCard margin={"0em 1em"} />
            <EventCard margin={"0em 1em"} />
            <EventCard margin={"0em 1em"} />
            <EventCard margin={"0em 1em"} />
          </Carousel>
        </Box>
        <Box>
          <Text as={"b"} fontSize={"3em"}>
            Kesenian
          </Text>
          <Carousel responsive={responsive}>
            <EventCard margin={"0em 1em"} />
            <EventCard margin={"0em 1em"} />
            <EventCard margin={"0em 1em"} />
            <EventCard margin={"0em 1em"} />
          </Carousel>
        </Box>
      </Box>
      {/* <UpcomingEvents /> */}
    </Box>
  );
}

export default FindEvent;
