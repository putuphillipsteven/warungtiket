import {
  Box,
  Divider,
  Flex,
  Spacer,
  Text,
} from "@chakra-ui/react";
import toRupiah from "@develoka/angka-rupiah-js";
export const OrderedTicket = (props) => {
  return (
    <Box>
      <Text>{props.ticketName}</Text>
      <Flex>
        <Text fontSize={".75em"}>Qty</Text>
        <Spacer />
        <Text fontSize={".75em"}>
          {" "}
          {props.qty}
        </Text>
      </Flex>
      <Flex>
        <Text fontSize={".75em"}>
          Ticket Total
        </Text>
        <Spacer />
        <Text fontSize={".75em"}>
          {toRupiah(props.totalPrice)}
        </Text>
      </Flex>
      <Divider borderWidth={"2px"} m={"1em 0"} />
    </Box>
  );
};
