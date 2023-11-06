import {
  Box,
  VStack,
  HStack,
  Divider,
  Text,
  Grid,
} from "@chakra-ui/react";
import Card from "../../../../components/Card";

export default function EventSaya(props) {
  const events = props.events;
  console.log("event saya", events);
  return (
    <Box>
      <VStack align={"stretch"}>
        <HStack>
          <Box p={".25em .5em"}>
            <Text as={"b"}>Event Terbeli</Text>
          </Box>
          <Box>
            <Text as={"b"}>Event Terbengkalai</Text>
          </Box>
        </HStack>
        <Divider
          borderColor={"#192655"}
          borderWidth={"2px"}
        />
        <Box p={"0 .5em"}>
          <Grid templateColumns={"repeat(3, 1fr)"}>
            {events.map((el) => {
              return <Card {...el} />;
            })}
          </Grid>
        </Box>
      </VStack>
    </Box>
  );
}
