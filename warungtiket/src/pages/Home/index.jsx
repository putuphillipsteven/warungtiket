import { Box, Text, Center } from "@chakra-ui/react";
import Jumbotron from "../../components/Jumbotron";
import UpcomingEvents from "../../components/UpcomingEvents";
import EventsCategories from "../../components/EventsCategories";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <Box>
      <Box>
        <Center>
          <Text>This is Navbar</Text>
        </Center>
      </Box>
      <Jumbotron />
      <UpcomingEvents />
      <EventsCategories />
      <Footer />
    </Box>
  );
}
