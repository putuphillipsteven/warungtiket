import { Box, Center, Grid, HStack, Text, VStack } from "@chakra-ui/react";
import EventCard from "./EventCard";
import { BsFillCircleFill } from "react-icons/bs";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function UpcomingEvents() {
  return (
    <Box p={"1em 7em "} mt={"0"}>
      <VStack align={"stretch"}>
        <Box>
          <Text as={"b"}>Event yang akan datang</Text>
        </Box>
        <Carousel axis={"horizontal"}>
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
        </Carousel>
      </VStack>
    </Box>
  );
}
