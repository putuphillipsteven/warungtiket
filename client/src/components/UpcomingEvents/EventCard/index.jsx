import {
  Box,
  Image,
  Text,
  VStack,
  Flex,
  Spacer,
  AspectRatio,
} from "@chakra-ui/react";
import bannerTest from "../../../img/bannerTest.jpg";
export default function EventCard(props) {
  return (
    <AspectRatio ratio={16 / 9}>
      <Box
        bgColor={"orange.500"}
        borderRadius={".5em"}
        h={"100%"}
        w={"100%"}
      >
        <Image
          src={bannerTest}
          maxW={"100%"}
          objectFit={"cover"}
          position={"absolute"}
          zIndex={"0"}
        />
        {/* <Flex
          spacing={"0"}
          flexDir={"column-reverse"}
          lineHeight={"1.3"}
          zIndex={"10"}
        >
          <Text fontWeight={"bold"} fontSize={"1.2em"}>
            {props.eventName}
          </Text>
          <Text fontSize={".75em"}>{props.date}</Text>
          <Text fontSize={".75em"}>
            {props?.province?.province}
          </Text>
          <Text fontSize={".75em"}>{props.address}</Text>
        </Flex> */}
      </Box>
    </AspectRatio>
  );
}
