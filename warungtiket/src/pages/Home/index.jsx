import { Box } from "@chakra-ui/react";
import Jumbotron from "../../components/Jumbotron";
import UpcomingEvents from "../../components/UpcomingEvents";
import EventsCategories from "../../components/EventsCategories";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar/index";

export default function Home() {
  return (
    <Box>
      <Navbar />
      <Jumbotron />
      <UpcomingEvents />
      <EventsCategories />
      <Footer />
    </Box>
  );
}
