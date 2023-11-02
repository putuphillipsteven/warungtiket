import React from "react";
import {
  Box,
  Badge,
  Button,
  Text,
  Stack,
  FormLabel,
  Input,
  Flex,
} from "@chakra-ui/react";

function CreateTicket() {
  return (
    <Box
      bgColor={"#E8E2E2"}
      borderWidth="1px"
      borderRadius="md"
      p={4}
      boxShadow="md"
    >
      <Stack spacing={2}>
        <Box>
          <Box>
            <FormLabel>Ticket Name</FormLabel>
            <Input variant="flushed" placeholder="Input Name" />
          </Box>
          <Box>
            <FormLabel>Ticket Quantity</FormLabel>
            <Input variant="flushed" placeholder="Input Quantity" />
          </Box>
          <Box>
            <FormLabel>Price</FormLabel>
            <Input variant="flushed" placeholder="Rp." />
          </Box>
          <Box>
            <FormLabel>Ticket Description</FormLabel>
            <Input variant="flushed" placeholder="Input Description" />
          </Box>
        </Box>
        <Button
          _hover={{ color: "black", bgColor: "#E1AA74" }}
          _active={{ color: "#3876BF" }}
          bgColor="#192655"
          mt={4}
        >
          <Text textColor={"white"}>Create Ticket</Text>
        </Button>
      </Stack>
    </Box>
  );
}

export default CreateTicket;
