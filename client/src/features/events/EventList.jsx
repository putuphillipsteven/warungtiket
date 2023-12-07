import { Box, Grid, Text, VStack } from "@chakra-ui/react";
import Card from "../../components/Card";

const EventList = (props) => {
  const renderedEvents = props?.events?.map((el) => (
    <Card {...el} />
  ));

  return (
    <Box p={{ base: "0 1em" }}>
      <VStack
        align={"flex-start"}
        spacing={{ base: "1em" }}
      >
        <Box color={"white"}>
          <Text
            bgColor={"#212529"}
            p={".5em 1em"}
            w={"auto"}
            fontWeight={"bold"}
          >
            Populer di{" "}
            <Text as={"span"} color={"#fca311"}>
              Aceh
            </Text>
          </Text>
        </Box>
        <Box width={"100%"}>
          <Grid
            gridAutoFlow={"column"}
            gridAutoColumns={"70%"}
            gap={".5em"}
            overflowX={"auto"}
            overscrollBehavior={"contain"}
            sx={{
              "&::-webkit-scrollbar": {
                display: "none",
              },
            }}
          >
            {renderedEvents}
          </Grid>
        </Box>
      </VStack>
    </Box>
  );
};

export default EventList;
