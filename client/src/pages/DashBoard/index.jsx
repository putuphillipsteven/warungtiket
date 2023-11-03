import React from "react";
import { Box, Divider, HStack, Spacer, Text, VStack } from "@chakra-ui/react";
import Navbar from "../../components/Navbar";
import Profile from "./component/Profile";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

export default function DashBoard(props) {
  return (
    <Box>
      <Navbar display={"none"} />
      <Box p={"0 3.5em"} mt={"10em"} mb={"2em"} minHeight={"100vh"}>
        <Box display={"flex"}>
          <Box w={"30%"}>
            <VStack align={"stretch"}>
              <Box p={".25em .5em"} borderRadius={".5em"}>
                <Text as={"b"}>DASHBOARD</Text>
              </Box>
              <Divider borderColor={"#192655"} borderWidth={"2px"} />
              <Box p={".25em .5em"}>
                <Link to={"/my-event"}>
                  <Text>Event Saya</Text>
                </Link>
              </Box>
              <Box p={".25em .5em"} borderRadius={".5em"}>
                <Text as={"b"}>PROFILE</Text>
              </Box>
              <Divider borderColor={"#192655"} borderWidth={"2px"} />
              <Box p={".25em .5em"}>
                {props.input}
                <Text>Profile</Text>
              </Box>

              <Box p={".25em .5em"}>
                <Text>Daftar Pemesan</Text>
              </Box>
              <Box p={".25em .5em"}>
                <Text>Password</Text>
              </Box>
            </VStack>
          </Box>
          <Spacer m={"1em"} />
          <Box w={"full"}>
            {/* <EventSaya /> */}
            <Profile display={props.display} />
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}
