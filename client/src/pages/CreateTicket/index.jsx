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
    <Box borderWidth="1px" borderRadius="md" p={4} boxShadow="md" bg="white">
      <Stack spacing={2}>
        <Box>
          <Box>
            <FormLabel color={"teal"}>Ticket Name</FormLabel>
            <Input variant="flushed" placeholder="Flushed" />
          </Box>
          <Box>
            <FormLabel color={"teal"}>Ticket Quantity</FormLabel>
            <Input variant="flushed" placeholder="Flushed" />
          </Box>
          <Box>
            <FormLabel color={"teal"}>Price</FormLabel>
            <Input variant="flushed" placeholder="Flushed" />
          </Box>
          <Box>
            <FormLabel color={"teal"}>Ticket Description</FormLabel>
            <Input variant="flushed" placeholder="Flushed" />
          </Box>
        </Box>
        <Button colorScheme="teal" mt={4}>
          Create Ticket
        </Button>
      </Stack>
    </Box>
  );
}

export default CreateTicket;
