import { Box, VStack } from "@chakra-ui/react";
import UpcomingEvents from "../../components/UpcomingEvents";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar/index";
import EventList from "../../features/events/EventList";

export default function Home() {
  return (
    <Box>
      <Navbar />
      <Box m={{ base: "7em 0 1em 0" }} minHeight={"90vh"}>
        <VStack align={"stretch"} spacing={{ base: "1em" }}>
          <UpcomingEvents />
          <EventList />
        </VStack>
      </Box>
      <Footer />
    </Box>
  );
}
