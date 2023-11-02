import { Box, Grid, Text, VStack, filter } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../components/Card";
import toRupiah from "@develoka/angka-rupiah-js";
import { fetchEvents, selectAllEvents } from "./eventSlice";

const EventList = () => {
  const dispatch = useDispatch();

  const events = useSelector(selectAllEvents);

  const eventsStatus = useSelector((state) => state.events.status);

  useEffect(() => {
    if (eventsStatus === "idle") {
      dispatch(fetchEvents());
    }
  }, [eventsStatus, dispatch]);

  let filtered = events.filter((event) => {
    return event.province == "Yogyakarta";
  });

  let date = new Date();
  console.log(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`);

  const renderedEvents = filtered.map((event) => (
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
      <VStack align={"flex-start"}>
        <Box color={"white"}>
          <Text
            bgColor={"#192655"}
            p={"1em 2em"}
            borderRadius={"0.5em"}
            w={"auto"}
            fontWeight={"bold"}
          >
            Populer di Yogyakarta
          </Text>
        </Box>
        <Box width={"100%"}>
          <Grid templateColumns={"repeat(4, 1fr)"} gap={"1em"}>
            {renderedEvents}
          </Grid>
        </Box>
      </VStack>
    </Box>
  );
};

export default EventList;
