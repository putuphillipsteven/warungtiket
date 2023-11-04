import {
  Box,
  Button,
  Flex,
  HStack,
  Spacer,
  Text,
} from "@chakra-ui/react";
import {
  AiOutlineMinusCircle,
  AiOutlinePlusCircle,
} from "react-icons/ai";
import toRupiah from "@develoka/angka-rupiah-js";
import useCounter from "./useCounter";
import { useEffect } from "react";

export const TicketList = (props) => {
  const [count, increment, decrement] =
    useCounter(0);

  const price = props.ticketPrice;

  const tambah = () => {
    increment();
    props.setTotalPrice(props.totalPrice + price);
    props.handleTambah(props.id);
  };
  const kurang = () => {
    decrement();
    props.setTotalPrice(props.totalPrice - price);
    props.handleKurang(props.id);
  };

  return (
    <Box
      w={"full"}
      p={".5em"}
      border={"3px solid lightgray"}
      borderRadius={".5em"}
    >
      <Flex>
        <Box>
          <Text fontWeight={"bold"}>
            {props.ticketName}
          </Text>
          <Text>
            {props.ticketPrice === 0
              ? "Free"
              : toRupiah(props.ticketPrice)}
          </Text>
          <Text>{props.ticketDescription}</Text>
        </Box>
        <Spacer />
        <Box alignSelf={"flex-end"}>
          <HStack>
            <Button
              size={"sm"}
              variant={"ghost"}
              _hover={"none"}
              onClick={
                count !== 0 ? kurang : null
              }
            >
              <AiOutlineMinusCircle />
            </Button>
            <Text>{count}</Text>
            <Button
              size={"sm"}
              variant={"ghost"}
              _hover={"none"}
              _active={"none"}
              onClick={
                count !== 11 ? tambah : null
              }
            >
              <AiOutlinePlusCircle />
            </Button>
          </HStack>
        </Box>
      </Flex>
    </Box>
  );
};
