import { Box, Center, Flex, Spacer, Text } from "@chakra-ui/react";

export default function Card(props) {
  return (
    <Box w={"100%"} bgColor={"lightgray"} borderRadius={".5em"} p={"1em 1em"}>
      <Box h={"10em"} borderRadius={".5em"} bgColor={"gray"}>
        <Center>
          <Text>IMG</Text>
        </Center>
      </Box>
      <Spacer m={"2em"} />
      <Box>
        <Text>{props.title}</Text>
        <Text>{props.category}</Text>
        <Text>{props.status}</Text>
        <Text>{props.location}</Text>
        <Text>{props.date}</Text>
      </Box>
    </Box>
  );
}
