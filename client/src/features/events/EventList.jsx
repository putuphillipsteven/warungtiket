import { Box, Grid, Heading, VStack } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import Card from "../../components/Card";
import toRupiah from "@develoka/angka-rupiah-js";

const EventList = () => {
  const events = useSelector((state) => state.events);
  const renderedEvents = events.map((event) => (
    <Card
      eventName={event.eventName}
      date={event.date}
      province={event.province}
      address={event.address}
      price={event.price == 0 ? "Free" : toRupiah(event.price)}
      description={event.eventDescription}
      path={event.id}
    />
  ));

  return (
    <Box p={"1em 3.5em"}>
      <VStack align={"stretch"}>
        <Heading as={"h2"} size={"md"}>
          Events
        </Heading>
        <Grid templateColumns={"repeat(5, 1fr)"} gap={"1em"}>
          {renderedEvents}
        </Grid>
      </VStack>
    </Box>
  );
};

export default EventList;
