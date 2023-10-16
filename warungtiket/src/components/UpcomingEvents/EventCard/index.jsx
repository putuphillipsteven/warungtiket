import { Box, Center, Text, VStack, Flex, Spacer } from "@chakra-ui/react";

export default function EventCard() {
  return (
    <Box
      bgColor={"gray"}
      h={"16em"}
      p={".5em"}
      borderRadius={".5em"}
      position={"relative"}
    >
      <Flex flexDir={"column-reverse"} align={"stretch"} h={"100%"}>
        <Box>
          <Flex flexDir={"column"}>
            <Text as={"b"}>Band Name</Text>
            <Text fontSize={".75em"}>Event Location</Text>
            <Text fontSize={".75em"}>Paid or free</Text>
          </Flex>
        </Box>
        <Spacer />
      </Flex>
    </Box>
  );
}
