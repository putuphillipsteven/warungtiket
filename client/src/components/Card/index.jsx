import { Box, Center, Flex, Spacer, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

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
        <VStack align={"stretch"} spacing={"-10px"}>
          <Text>{props.title}</Text>
          <Text>{props.category}</Text>
          <Text>{props.status}</Text>
          <Text>{props.location}</Text>
          <Text>{props.date}</Text>
          <Link to={`/event/${props.path}`}>
            <Text>View Post</Text>
          </Link>
        </VStack>
      </Box>
    </Box>
  );
}
