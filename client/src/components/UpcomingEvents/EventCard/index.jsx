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
      h={"17em"}
      p={"2.5em"}
      borderRadius={".5em"}
      position={"relative"}
    >
      <Flex flexDir={"column-reverse"} align={"stretch"} h={"100%"}>
        <Box>
          <VStack flexDir={"column"} lineHeight={".6"}>
            <Image src={props.eventImage} />
            <Text fontWeight={"bold"} fontSize={"1.2em"}>
              {props.eventName}
            </Text>
            <Text fontSize={".75em"}>{props.date}</Text>
            <Text fontSize={".75em"}>{props.province}</Text>
            <Text fontSize={".75em"}>{props.address}</Text>
          </VStack>
        </Box>
        <Spacer />
      </Flex>
    </Box>
  );
}
