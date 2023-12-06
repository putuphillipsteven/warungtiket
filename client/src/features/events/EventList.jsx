import { Box, Grid, Text, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../components/Card";
import { fetchEvents, selectAllEvents } from "./eventSlice";
import axios from "axios";

const EventList = () => {
  const [provinceId, setProvinceId] = useState("");

  const [event, setEvent] = useState([]);

  const dispatch = useDispatch();

  const fetchEvent = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8000/event?provinceId=${provinceId}`
      );
      return res?.data?.data;
    } catch (err) {
      console.log("error", err);
    }
  };
  useEffect(() => {
    setEvent(fetchEvent());
  }, []);

  const events = useSelector(selectAllEvents);

  const eventsStatus = useSelector(
    (state) => state.events.status
  );

  useEffect(() => {
    if (eventsStatus === "idle") {
      dispatch(fetchEvents());
    }
  }, [eventsStatus, dispatch]);

  console.log("EVENTNOW", event);

  const renderedEvents = events?.map((el) => (
    <Card {...el} />
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
              Aceh
            </Text>
          </Text>
        </Box>
        <Box width={"100%"}>
          <Grid
            gridAutoFlow={"column"}
            gridAutoColumns={"70%"}
            gap={".5em"}
            overflowX={"auto"}
            overscrollBehavior={"contain"}
            sx={{
              "&::-webkit-scrollbar": {
                display: "none",
              },
            }}
          >
            {renderedEvents}
          </Grid>
        </Box>
      </VStack>
    </Box>
  );
};

export default EventList;
