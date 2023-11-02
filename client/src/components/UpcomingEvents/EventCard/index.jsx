import {
  Box,
  Image,
  Center,
  Text,
  VStack,
  Flex,
  Spacer,
} from "@chakra-ui/react";

export default function EventCard(props) {
  return (
    <Box
      overflow={"hidden"}
      bgColor={"#F3F0CA"}
      h={"25em"}
      p={"2.5em"}
      borderRadius={".5em"}
      position={"relative"}
    >
      <Flex flexDir={"column-reverse"} align={"stretch"} h={"100%"}>
        <Box>
          <Flex flexDir={"column"}>
            <Text as={"b"}>{props.eventName}</Text>
            <Text>{props.date}</Text>
            <Text>{props.province}</Text>
            <Text>{props.address}</Text>
            <Text>{props.price}</Text>
          </Flex>
        </Box>
        <Spacer />
      </Flex>
    </Box>
  );
}
