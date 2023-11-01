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
      bgColor={"gray"}
      h={"25em"}
      p={"2.5em"}
      borderRadius={".5em"}
      position={"relative"}
    >
      <Flex flexDir={"column-reverse"} align={"stretch"} h={"100%"}>
        <Box>
          <Flex flexDir={"column"}>
            <Text as={"b"}>{props.title}</Text>
            <Text>{props.category}</Text>
            <Text>{props.status}</Text>
            <Text>{props.location}</Text>
            <Text>{props.date}</Text>
          </Flex>
        </Box>
        <Spacer />
      </Flex>
    </Box>
  );
}
