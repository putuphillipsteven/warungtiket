import { Box, Flex, Text } from "@chakra-ui/react";

export default function EventCategoriesCard() {
  return (
    <Box p={".5em"} bgColor={"gray"} borderRadius={".5em"} h={"3em"}>
      <Flex flexDir={"column-reverse"} h={"100%"}>
        <Text fontSize={".75em"} as={"b"}>
          Categories
        </Text>
      </Flex>
    </Box>
  );
}
