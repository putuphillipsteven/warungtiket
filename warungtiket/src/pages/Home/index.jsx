import { Box, VStack, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <VStack spacing={"0"} align={"stretch"}>
      <Box bgColor={"gray"} p={"1em 2.5em"}>
        <Text>Navbar</Text>
      </Box>
      <Box bgColor={"gray.500"} p={"1em 2.5em"}>
        <Text>Body</Text>
      </Box>
      <Box bgColor={"gray.300"} p={"1em 2.5em"}>
        <Text>Footer</Text>
      </Box>
    </VStack>
  );
}
