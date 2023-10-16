import { Box, Text, Center, VStack, Text } from "@chakra-ui/react";
import Jumbotron from "../../components/Jumbotron";
import UpcomingEvents from "../../components/UpcomingEvents";
import EventsCategories from "../../components/EventsCategories";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar/index";

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
