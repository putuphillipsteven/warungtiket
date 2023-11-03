import { Box, Center, Divider, Spacer, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Card(props) {
  return (
    <Link to={`/event/${props.path}`}>
      <Box
        w={"100%"}
        border={"3px solid lightgray"}
        borderRadius={".5em"}
        p={"1em 1em"}
      >
        <Box h={"8em"} borderRadius={".5em"} bgColor={"gray"}>
          <Center>
            <Text>IMG</Text>
          </Center>
        </Box>
        <Spacer m={"2em"} />
        <Box>
          <Box>
            <VStack align={"stretch"}>
              <VStack align={"flex-start"}>
                <Text fontWeight={"bold"}>{props.eventName}</Text>
                <Text color={"gray"}>{props.date}</Text>
                <Text>{props.price}</Text>
                <Text>{props.province}</Text>
              </VStack>
              <Divider borderWidth={"2px"} />
              <VStack align={"flex-start"}>
                <Text fontWeight={"bold"}>Warung Tiket</Text>
              </VStack>
            </VStack>
          </Box>
        </Box>
      </Box>
    </Link>
  );
}
