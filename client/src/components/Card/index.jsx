import { Box, Center, Flex, Spacer, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Card(props) {
  return (
    <Box w={"100%"} bgColor={"#F3F0CA"} borderRadius={".5em"} p={"1em 1em"}>
      <Box h={"10em"} borderRadius={".5em"} bgColor={"gray"}>
        <Center>
          <Text>IMG</Text>
        </Center>
      </Box>
      <Spacer m={"2em"} />
      <Box>
        <VStack align={"flex-start"} spacing={""} lineHeight={"1.3em"}>
          <Text fontWeight={"bold"}>{props.eventName}</Text>
          <Text fontWeight={"bold"}>{props.date}</Text>
          <Text fontWeight={"bold"}>{props.province}</Text>
          <Text fontWeight={"bold"}>{props.address}</Text>
          <Text fontWeight={"bold"}>{props.price}</Text>
          <Link to={`/event/${props.path}`}>
            <Text
              borderRadius={".5em"}
              bgColor={"#192655"}
              color={"white"}
              p={".3em"}
              fontSize={".75em"}
              alignSelf={"flex-end"}
            >
              View Details
            </Text>
          </Link>
        </VStack>
      </Box>
    </Box>
  );
}
