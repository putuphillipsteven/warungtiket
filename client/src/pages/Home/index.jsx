import { Box } from "@chakra-ui/react";
import UpcomingEvents from "../../components/UpcomingEvents";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar/index";
import EventList from "../../features/events/EventList";

export default function Home() {
  return (
    <Box>
      <Navbar />
      <Box mt={"10em"} mb={"2em"} minHeight={"100vh"}>
        <UpcomingEvents />
        <EventList />
      </Box>
      <Footer />
    </Box>
  );
}
