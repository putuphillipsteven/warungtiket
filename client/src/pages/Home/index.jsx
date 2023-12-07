import { Box, VStack } from "@chakra-ui/react";
import UpcomingEvents from "../../components/UpcomingEvents";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar/index";
import EventList from "../../features/events/EventList";
import { fetchEvent } from "../../app/FetchingData/event";
import { useEffect, useState } from "react";

export default function Home() {
  const [provinceId, setProvinceId] = useState("");

  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvent(provinceId, setEvents);
  }, [provinceId, setProvinceId]);

  return (
    <Box>
      <Navbar />
      <Box m={{ base: "7em 0 1em 0" }} minHeight={"100vh"}>
        <VStack align={"stretch"} spacing={{ base: "1em" }}>
          <UpcomingEvents events={events} />
          <EventList events={events} />
        </VStack>
      </Box>
      <Footer />
    </Box>
  );
}
