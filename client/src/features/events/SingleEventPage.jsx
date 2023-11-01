import { Box, Divider, Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

const SinglePostPage = () => {
  const { eventId } = useParams();

  const event = useSelector((state) =>
    state.events.find((event) => event.id == eventId)
  );

  console.log(event);

  if (!event) {
    return (
      <Box p={"1em 3.5em"}>
        <Heading as={"h2"} size={"md"}>
          Event not found!
        </Heading>
      </Box>
    );
  }
  return (
    <Box p={"1em 5em"} mt={"3em"} mb={"3em"}>
      <Box
        key={event.id}
        border={"1px solid black"}
        p={".5em"}
        borderRadius={".5em"}
      >
        <VStack align={"stretch"}>
          <Heading as={"h3"} size={"sm"}>
            {event.title}
          </Heading>
          <Divider borderWidth={"2px"} />
          <Text>{event.catagory}</Text>
          <Text>{event.status}</Text>
          <Text>{event.location}</Text>
          <Text>{event.date}</Text>
          <Link to={"/"}>
            <Text>Edit Post</Text>
          </Link>
        </VStack>
      </Box>
    </Box>
  );
};

export default SinglePostPage;
