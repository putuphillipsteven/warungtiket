import { Box, Text, VStack, Grid } from "@chakra-ui/react";
import EventCategoriesCard from "./EventCategoriesCard";

export default function EventsCategories() {
  return (
    <Box p={"1.5em 3.5em "}>
      <VStack align={"stretch"}>
        <Box>
          <Text as={"b"}>Kategori Event</Text>
        </Box>
        <Grid templateColumns={"repeat(4, 1fr)"} gap={"1em"}>
          <EventCategoriesCard />
          <EventCategoriesCard />
          <EventCategoriesCard />
          <EventCategoriesCard />
          <EventCategoriesCard />
          <EventCategoriesCard />
          <EventCategoriesCard />
          <EventCategoriesCard />
        </Grid>
      </VStack>
    </Box>
  );
}
