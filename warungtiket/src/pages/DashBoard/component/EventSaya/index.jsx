import { Box, VStack, HStack, Divider, Text } from "@chakra-ui/react";
import Card from "../../../../components/Card";

export default function EventSaya() {
  return (
    <Box>
      <VStack align={"stretch"}>
        <HStack>
          <Box p={".25em .5em"}>
            <Text as={"b"}>Event Aktif</Text>
          </Box>
          <Box>
            <Text as={"b"}>Event Selesai</Text>
          </Box>
        </HStack>
        <Divider borderColor={"#192655"} borderWidth={"2px"} />
        <Box p={"0 .5em"}>
          <Card />
        </Box>
      </VStack>
    </Box>
  );
}
