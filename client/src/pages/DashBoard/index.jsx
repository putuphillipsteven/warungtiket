import React from "react";
import { Box, Divider, HStack, Spacer, Text, VStack } from "@chakra-ui/react";
import Navbar from "../../components/Navbar";
import Card from "../../components/Card";
import EventSaya from "./component/EventSaya";
import Profile from "./component/Profile";
import Footer from "../../components/Footer";

export default function DashBoard() {
  return (
    <Box>
      <Navbar display={"none"} />
      <Box p={"1em 3.5em"} mt={"10em"}>
        <Box display={"flex"} p={"1em 0"}>
          <Box w={"30%"}>
            <VStack align={"stretch"}>
              <Box p={".25em .5em"} borderRadius={".5em"}>
                <Text as={"b"}>DASHBOARD</Text>
              </Box>
              <Divider borderColor={"#192655"} borderWidth={"2px"} />
              <Box p={".25em .5em"}>
                <Text>Event Saya</Text>
              </Box>
              <Box p={".25em .5em"} borderRadius={".5em"}>
                <Text as={"b"}>PROFILE</Text>
              </Box>
              <Divider borderColor={"#192655"} borderWidth={"2px"} />
              <Box p={".25em .5em"}>
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
            <Profile />
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}
