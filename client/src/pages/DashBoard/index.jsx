import React, { useEffect, useState } from "react";
import {
  Box,
  Divider,
  HStack,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import Navbar from "../../components/Navbar";
import Profile from "./component/Profile";
import Footer from "../../components/Footer";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import EventSaya from "./component/EventSaya";

export default function DashBoard(props) {
  const { page } = useParams();
  const [user, setUser] = useState([]);

  const loggedInUser = useSelector(
    (state) => state.login.user
  );

  const fetchUser = async (req, res) => {
    try {
      const res = await axios.get(
        "http://localhost:8000/user"
      );
      setUser(res?.data?.data);
      return res?.data?.data;
    } catch (err) {
      throw err;
    }
  };
  useEffect(() => {
    fetchUser();
  }, []);

  const selectedUser = user.find(
    (user) => user.id === +loggedInUser.id
  );

  const buyedEvent = () => {
    let newArr = [];
    selectedUser?.transactions?.map((transaction) =>
      newArr.push(transaction)
    );
    return newArr;
  };
  const events = useSelector(
    (state) => state?.events?.events
  );
  console.log("selectedusers", selectedUser);

  const buyedEvents = buyedEvent();
  console.log(events);
  const filteredEvents = events.filter((el) =>
    buyedEvents.includes(el.userId)
  );
  console.log("buyedEvents", buyedEvents);
  console.log("filteredEvents", filteredEvents);
  return (
    <Box>
      <Navbar display={"none"} />
      <Box
        p={"0 3.5em"}
        mt={"10em"}
        mb={"2em"}
        minHeight={"100vh"}
      >
        <Box display={"flex"}>
          <Box w={"30%"}>
            <VStack align={"stretch"}>
              <Box p={".25em .5em"} borderRadius={".5em"}>
                <Text as={"b"}>DASHBOARD</Text>
              </Box>
              <Divider
                borderColor={"#192655"}
                borderWidth={"2px"}
              />
              <Box p={".25em .5em"}>
                <Link to={"/my-event"}>
                  <Text>Event Saya</Text>
                </Link>
              </Box>
              <Box p={".25em .5em"} borderRadius={".5em"}>
                <Text as={"b"}>PROFILE</Text>
              </Box>
              <Divider
                borderColor={"#192655"}
                borderWidth={"2px"}
              />
              <Box p={".25em .5em"}>
                <Text>Profile</Text>
              </Box>
            </VStack>
          </Box>
          <Spacer m={"1em"} />
          <Box w={"full"}>
            <VStack align={"stretch"}>
              <Profile
                email={selectedUser?.email}
                username={selectedUser?.username}
              />
              <EventSaya events={filteredEvents} />
            </VStack>
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}
