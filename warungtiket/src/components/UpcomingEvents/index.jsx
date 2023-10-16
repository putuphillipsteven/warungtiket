import { Box, Center, Grid, HStack, Text, VStack } from "@chakra-ui/react";
import EventCard from "./EventCard";
import { BsFillCircleFill } from "react-icons/bs";
export default function UpcomingEvents() {
  return (
    <Box p={"1.5em 3.5em "}>
      <VStack align={"stretch"}>
        <Box>
          <Text as={"b"}>Event yang akan datang</Text>
        </Box>
        <Box>
          <Grid templateColumns={"repeat(4, 1fr)"} gap={"1em"}>
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
          </Grid>
        </Box>
        <Box>
          <Center>
            <HStack>
              <BsFillCircleFill fontSize={".75em"} />
              <BsFillCircleFill fontSize={".75em"} />
              <BsFillCircleFill fontSize={".75em"} />
              <BsFillCircleFill fontSize={".75em"} />
            </HStack>
          </Center>
        </Box>
      </VStack>
    </Box>
  );
}
