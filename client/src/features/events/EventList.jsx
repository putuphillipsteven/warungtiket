import { Box, Divider, Grid, Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Card from "../../components/Card";

const EventList = () => {
  const events = useSelector((state) => state.events);
  console.log(events);
  const renderedEvents = events.map((event) => (
    <Card
      title={event.title}
      category={event.category}
      status={event.status}
      location={event.location}
      date={event.date}
    />
  ));

  return (
    <Box p={"1em 7em"}>
      <VStack align={"stretch"}>
        <Heading as={"h2"} size={"md"}>
          Events
        </Heading>
        <Grid templateColumns={"repeat(4, 1fr)"} gap={"1em"}>
          {renderedEvents}
        </Grid>
      </VStack>
    </Box>
  );
};

export default EventList;
