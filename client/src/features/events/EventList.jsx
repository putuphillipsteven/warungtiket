import {
  Box,
  Grid,
  Text,
  VStack,
  filter,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../components/Card";
import { fetchEvents, selectAllEvents } from "./eventSlice";

const EventList = () => {
  const dispatch = useDispatch();

  const events = useSelector(selectAllEvents);

  const eventsStatus = useSelector(
    (state) => state.events.status
  );

  useEffect(() => {
    if (eventsStatus === "idle") {
      dispatch(fetchEvents());
    }
  }, [eventsStatus, dispatch]);

  let filtered = events.filter((event) => {
    return event.province == "Yogyakarta";
  });

  const renderedEvents = filtered.map((event) => (
    <Card {...event} />
  ));

  return (
    <Box p={"0 3.5em"}>
      <VStack align={"flex-start"}>
        <Box color={"white"}>
          <Text
            bgColor={"#192655"}
            p={".5em 1em"}
            borderRadius={"0.5em"}
            w={"auto"}
            fontWeight={"bold"}
          >
            Populer di Yogyakarta
          </Text>
        </Box>
        <Box width={"100%"}>
          <Grid
            templateColumns={"repeat(6, 1fr)"}
            gap={"1em"}
          >
            {renderedEvents}
          </Grid>
        </Box>
      </VStack>
    </Box>
  );
};

export default EventList;
