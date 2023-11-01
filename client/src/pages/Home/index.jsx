import { Box } from "@chakra-ui/react";
import UpcomingEvents from "../../components/UpcomingEvents";
import EventsCategories from "../../components/EventsCategories";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar/index";
import EventList from "../../features/events/EventList";

export default function Home() {
  return (
    <Box>
      <Navbar />
      <Box mt={"12em"}>
        <UpcomingEvents />
        <EventList />
      </Box>
      <Footer />
    </Box>
  );
}
