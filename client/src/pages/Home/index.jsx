import { Box, VStack } from "@chakra-ui/react";
import UpcomingEvents from "../../components/UpcomingEvents";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar/index";
import EventList from "../../features/events/EventList";

export default function Home() {
  return (
    <Box>
      <Navbar />
      <Box
        mt={{ base: "7em" }}
        mb={{ base: "1em" }}
        minHeight={"100vh"}
      >
        <VStack
          align={"stretch"}
          spacing={{ base: "1.5em" }}
        >
          <UpcomingEvents />
          <EventList />
        </VStack>
      </Box>
      <Footer />
    </Box>
  );
}
