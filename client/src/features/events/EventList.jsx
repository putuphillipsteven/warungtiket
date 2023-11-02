import { Box, Grid, Text, VStack } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Card from "../../components/Card";
import toRupiah from "@develoka/angka-rupiah-js";
import axios from "axios";

const EventList = () => {
  const [eventss, setEventss] = useState([]);

  const fetchEvent = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/event?province=Yogyakarta"
      );
      setEventss(response?.data?.data);
    } catch (err) {
      throw err;
    }
  };

  useEffect(() => {
    fetchEvent();
  }, []);

  const renderedEvents = eventss.map((event) => (
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
