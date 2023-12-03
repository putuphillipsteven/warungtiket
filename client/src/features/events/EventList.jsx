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

  const renderedEvents = events.map((event) => (
    <Card {...event} />
  ));

  return (
    <Box p={{ base: "0 1em" }}>
      <VStack
        align={"flex-start"}
        spacing={{ base: "1em" }}
      >
        <Box color={"white"}>
          <Text
            bgColor={"#212529"}
            p={".5em 1em"}
            w={"auto"}
            fontWeight={"bold"}
          >
            Populer di{" "}
            <Text as={"span"} color={"#fca311"}>
              Yogyakarta
            </Text>
          </Text>
        </Box>
        <Box width={"100%"}>
          <Grid
            templateRows={{
              base: "repeat(auto, .8fr)",
              md: "repeat(5, 1fr)",
            }}
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
