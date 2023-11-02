import { Box, Center, Flex, Spacer, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import toRupiah from "@develoka/angka-rupiah-js";

export default function Card(props) {
  return (
    <Link to={`/event/${props.path}`}>
      <Box w={"100%"} bgColor={"#F3F0CA"} borderRadius={".5em"} p={"1em 1em"}>
        <Box h={"10em"} borderRadius={".5em"} bgColor={"gray"}>
          <Center>
            <Text>IMG</Text>
          </Center>
        </Box>
        <Spacer m={"2em"} />
        <Box>
          <Flex flexDir={"column"}>
            <Box>
              <Text fontWeight={"bold"}>{props.eventName}</Text>
              <Text>{props.date}</Text>
              <Text>{props.province}</Text>
              <Text>{props.address}</Text>
              <Text>{props.price}</Text>
            </Box>
          </Flex>
        </Box>
      </Box>
    </Link>
  );
}
