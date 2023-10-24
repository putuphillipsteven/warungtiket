import { Box, Center, Flex, Spacer, Text } from "@chakra-ui/react";

export default function Card() {
  return (
    <Box w={"15em"} bgColor={"lightgray"} borderRadius={".5em"} p={"1em 1em"}>
      <Box h={"8em"} borderRadius={".5em"} bgColor={"gray"}>
        <Center>
          <Text>IMG</Text>
        </Center>
      </Box>
      <Spacer m={"2em"} />
      <Box>
        <Text>Festival Makanan Jogja</Text>
        <Text>20 Okt 2023 - 22 Okt 2023</Text>
        <Text>Gratis</Text>
      </Box>
    </Box>
  );
}
