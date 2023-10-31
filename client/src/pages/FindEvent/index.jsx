import {
  Center,
  Box,
  Grid,
  Heading,
  GridItem,
  Input,
  Text,
  Button,
  Select,
  Flex,
  Spacer,
  VStack,
  Divider,
  HStack,
} from "@chakra-ui/react";
import Navbar from "../../components/Navbar";
import EventCard from "../../components/UpcomingEvents/EventCard";
import React, { useState } from "react";
import "react-multi-carousel/lib/styles.css";
import Footer from "../../components/Footer";

function FindEvent() {
  // Data event (ganti dengan data sebenarnya)
  const events = [
    {
      title: "Event 1",
      category: "Kuliner",
      location: "Jogja",
      status: "Free",
      date: "01-01-2023",
    },
    {
      title: "Event 2",
      category: "Musik",
      location: "Malang",
      status: "Paid",
      date: "01-01-2023",
    },
    {
      title: "Event 3",
      category: "Olahraga",
      location: "Jakarta",
      status: "Free",
      date: "01-01-2023",
    },
    {
      title: "Event 4",
      category: "Kebudayaan",
      location: "Solo",
      status: "Paid",
      date: "01-01-2023",
    },
    {
      title: "Event 5",
      category: "Komedi",
      location: "Bekasi",
      status: "Free",
      date: "01-01-2023",
    },
    {
      title: "Event 6",
      category: "Webinar",
      location: "Bandung",
      status: "Free",
      date: "01-01-2023",
    },

    // Tambahkan data event lainnya
  ];

  const [categoryFilter, setCategoryFilter] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const Events = events.filter(
    (event) =>
      (categoryFilter === "" || event.category === categoryFilter) &&
      (locationFilter === "" || event.location === locationFilter) &&
      (statusFilter === "" || event.status === statusFilter) &&
      (searchQuery === "" ||
        event.category.toLowerCase().includes(searchQuery.toLowerCase()))
  );

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
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </Box>
        }
      />
      <Box p={"1em 5em"} mt={"10em"} mb={"3em"} display={"flex"}>
        <Box w={"30%"} position={"relative"}>
          <VStack align={"stretch"}>
            <Box>
              <Text as={"b"} fontSize={"2xl"}>
                Filter
              </Text>
            </Box>
            <Divider borderColor={"#3876BF"} borderWidth={"2px"} />
            <Box>
              <Select
                // placeholder="Kategori Event"
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
              >
                {/* <option value="">Semua Kategori</option> */}
                <option value="Kuliner">Kuliner</option>
                <option value="Musik">Musik</option>
                <option value="Olahraga">Olahraga</option>
                <option value="Kebudayaan">Kebudayaan</option>
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
              templateColumns={"repeat(3, 1fr)"}
              templateRows={"repeat(3, 1fr)"}
              gap={".5em"}
            >
              {Events.map((event) => (
                <Box
                  bgColor={"lightgray"}
                  borderRadius={".5em"}
                  p={"1em 1em"}
                  display={"flex"}
                  flexDirection={"column"}
                >
                  <Box
                    key={event.title}
                    h={"10em"}
                    borderRadius={".5em"}
                    bgColor={"gray"}
                  >
                    <Center>
                      <Text>image</Text>
                    </Center>
                  </Box>
                  <Spacer />
                  <Text>Kategori: {event.category}</Text>
                  <Text>Lokasi: {event.location}</Text>
                  <Text>Status: {event.status}</Text>
                  <Text>Date: {event.date}</Text>
                </Box>
              ))}
            </Grid>
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}

export default FindEvent;
