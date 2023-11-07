import { Box, Divider, Image, Spacer, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Card(props) {
  console.log("card props", props);
  return (
    <Link to={`/event/${props.id}`}>
      <Box
        w={"100%"}
        h={"100%"}
        border={"3px solid lightgray"}
        borderRadius={".5em"}
        p={"1em 1em"}
      >
        <Box h={"8em"} borderRadius={".5em"} bgColor={"gray"}>
          <Image w={"100%"} src={""} />
        </Box>
        <Spacer m={"2em"} />
        <Box>
          <Box>
            <VStack align={"stretch"}>
              <VStack align={"flex-start"}>
                <Text fontWeight={"bold"}>{props.eventName}</Text>
                <Text color={"gray"}>{props.date}</Text>
                <Text>{props.price}</Text>
                <Text>{props?.province?.province}</Text>
                <Text fontSize={".75em"}>
                  {props?.tickets?.length > 0 ? "Paid Event" : "Free Event"}
                </Text>
              </VStack>
              <Divider borderWidth={"2px"} />
              <VStack align={"flex-start"}>
                <Text fontWeight={"bold"}>{props?.user?.username}</Text>
              </VStack>
            </VStack>
          </Box>
        </Box>
      </Box>
    </Link>
  );
}
