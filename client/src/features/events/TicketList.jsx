import { Box, Button, Flex, HStack, Spacer, Text } from "@chakra-ui/react";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import toRupiah from "@develoka/angka-rupiah-js";
import useCounter from "./useCounter";
import { useState } from "react";

export const TicketList = (props) => {
  const [count, increment, decrement] = useCounter(1);
  const [total, setTotal] = useState(props.ticketPrice);
  return (
    <Box
      w={"full"}
      p={".5em"}
      border={"3px solid lightgray"}
      borderRadius={".5em"}
    >
      <Flex>
        <Box>
          <Text fontWeight={"bold"}>{props.ticketName}</Text>
          <Text>
            {props.ticketPrice == 0 ? "Free" : toRupiah(props.ticketPrice)}
          </Text>
          <Text>{props.ticketDescription}</Text>
          <Text>{toRupiah(total * count)}</Text>
        </Box>
        <Spacer />
        <Box alignSelf={"flex-end"}>
          <HStack>
            <Button
              size={"sm"}
              variant={"ghost"}
              _hover={"none"}
              onClick={count !== 1 && count !== 0 ? decrement : null}
            >
              <AiOutlineMinusCircle />
            </Button>
            <Text>{count}</Text>
            <Button
              size={"sm"}
              variant={"ghost"}
              _hover={"none"}
              _active={"none"}
              onClick={count !== 11 ? increment : null}
            >
              <AiOutlinePlusCircle />
            </Button>
          </HStack>
        </Box>
      </Flex>
    </Box>
  );
};
