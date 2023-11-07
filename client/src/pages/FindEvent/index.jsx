import {
  Box,
  Grid,
  Input,
  Text,
  Button,
  Select,
  Spacer,
  VStack,
  Divider,
} from "@chakra-ui/react";
import Navbar from "../../components/Navbar";
import React, { useEffect, useState } from "react";
import "react-multi-carousel/lib/styles.css";
import Footer from "../../components/Footer";
import { useSelector } from "react-redux";
import Card from "../../components/Card";
import { selectAllEvents } from "../../features/events/eventSlice";

function FindEvent() {
  const events = useSelector(selectAllEvents);

  const [categoryFilter, setCategoryFilter] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const Events = events.filter(
    (event) =>
      (categoryFilter === "" ||
        event.category === categoryFilter) &&
      (locationFilter === "" ||
        event.location === locationFilter) &&
      (statusFilter === "" ||
        event.status === statusFilter) &&
      (searchQuery === "" ||
        event.category
          .toLowerCase()
          .includes(searchQuery.toLowerCase()))
  );
  const renderedEvents = events.map((event) => (
    <Card {...event} />
  ));
  return (
    <Box>
      <Navbar
        display={"none"}
        input={
          <Box w={"50%"}>
            <Input
              fontWeight={"bold"}
              bgColor={"white"}
              placeholder={"Search Event"}
              _placeholder={{ fontWeight: "bold" }}
              value={searchQuery.statusFilter}
              onChange={(e) =>
                setSearchQuery(e.target.value)
              }
            />
          </Box>
        }
      />
      <Box
        p={"0 3.5em"}
        mt={"10em"}
        mb={"2em"}
        display={"flex"}
        minHeight={"100vh"}
      >
        <Box w={"30%"} position={"relative"}>
          <VStack align={"stretch"}>
            <Box>
              <Text as={"b"} fontSize={"2xl"}>
                Filter
              </Text>
            </Box>
            <Divider
              borderColor={"#3876BF"}
              borderWidth={"2px"}
            />
            <Box>
              <Select
                value={categoryFilter}
                onChange={(e) =>
                  setCategoryFilter(e.target.value)
                }
              >
                <option value="">Semua Kategori</option>
                <option value="Kuliner">Kuliner</option>
                <option value="Musik">Musik</option>
                <option value="Olahraga">Olahraga</option>
                <option value="Kebudayaan">
                  Kebudayaan
                </option>
                <option value="Komedi">Komedi</option>
                <option value="Webinar">Webinar</option>
              </Select>
            </Box>

            <Box>
              <Button
                onClick={() => {
                  setCategoryFilter("");
                  setLocationFilter("");
                  setStatusFilter("");
                }}
              >
                Hapus Filter
              </Button>
            </Box>
          </VStack>
        </Box>
        <Spacer m={"1em"} />
        <Box w={"full"} pt={"0 3.5em"}>
          <Box>
            <Text as={"b"} fontSize={"2xl"}>
              Events
            </Text>
          </Box>
          <Box mt={".5em"} ml={".5em"}>
            <Grid
              templateColumns={"repeat(4, 1fr)"}
              templateRows={"repeat(3, 1fr)"}
              gap={".5em"}
            >
              {renderedEvents}
            </Grid>
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}

export default FindEvent;
