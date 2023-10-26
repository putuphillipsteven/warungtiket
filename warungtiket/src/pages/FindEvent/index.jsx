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
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function FindEvent() {
  // Data event (ganti dengan data sebenarnya)
  const events = [
    { title: "Event 1", category: "Musik", location: "Jogja", status: "Free" },
    { title: "Event 2", category: "Musik", location: "Malang", status: "Paid" },
    {
      title: "Event 3",
      category: "Olahraga",
      location: "Jakarta",
      status: "Free",
    },
    {
      title: "Event 4",
      category: "Olahraga",
      location: "Makassar",
      status: "Paid",
    },
    { title: "Event 5", category: "Seni", location: "Bandung", status: "Free" },
    { title: "Event 6", category: "Seni", location: "Riau", status: "Paid" },
    // Tambahkan data event lainnya
  ];

  const [categoryFilter, setCategoryFilter] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const filteredEvents = events.filter(
    (event) =>
      (categoryFilter === "" || event.category === categoryFilter) &&
      (locationFilter === "" || event.location === locationFilter) &&
      (statusFilter === "" || event.status === statusFilter)
  );

  // const responsive = {
  //   desktop: {
  //     breakpoint: { max: 3000, min: 1024 },
  //     items: 3,
  //     slidesToSlide: 3, // optional, default to 1.
  //   },
  //   tablet: {
  //     breakpoint: { max: 1024, min: 464 },
  //     items: 2,
  //     slidesToSlide: 2, // optional, default to 1.
  //   },
  //   mobile: {
  //     breakpoint: { max: 464, min: 0 },
  //     items: 1,
  //     slidesToSlide: 1, // optional, default to 1.
  //   },
  // };
  return (
    <Box>
      <Navbar
        display={"none"}
        input={
          <Box>
            <Input />
          </Box>
        }
      />
      <Box p={"1em 2em"} pt={"6.5em"} display={"flex"}>
        <Box>
          <VStack align={"stretch"}>
            <Box>
              <Center>
                <Text as={"b"} fontSize={"2xl"}>
                  Filter
                </Text>
              </Center>
            </Box>
            <Divider borderColor={"#3876BF"} borderWidth={"2px"} />
            <Box>
              {/* <Text as={"b"} fontSize={"1em"}>
                Kategori
              </Text> */}
              <Select
                placeholder="Pilih Kategori"
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
              >
                <option value="">Semua Kategori</option>
                <option value="Musik">Musik</option>
                <option value="Olahraga">Olahraga</option>
                <option value="Seni">Seni</option>
                {/* Tambahkan opsi kategori lainnya */}
              </Select>
            </Box>
            <Box>
              {/* <Text as={"b"} fontSize={"1em"}>
                Lokasi
              </Text> */}
              <Select
                placeholder="Pilih Lokasi"
                value={locationFilter}
                onChange={(e) => setLocationFilter(e.target.value)}
              >
                <option value="">Semua Lokasi</option>
                <option value="Jogja">Jogja</option>
                <option value="Jakarta">Jakarta</option>
                <option value="Bandung">Bandung</option>
                <option value="Makassar">Makassar</option>
                <option value="Malang">Malang</option>
                <option value="Riau">Riau</option>

                {/* Tambahkan opsi lokasi lainnya */}
              </Select>
            </Box>
            <Box>
              {/* <Text as={"b"} fontSize={"1em"}>
                Status
              </Text> */}
              <Select
                placeholder="Pilih Status"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option value="">Semua Status</option>
                <option value="Paid">Paid</option>
                <option value="Free">Free</option>
                {/* <option value="Bandung">Bandung</option> */}
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
        <Spacer />
        <Box w={"full"} pt={"0 3.5em"}>
          <Box p={"1em 1em"}>
            <Center>
              <Text as={"b"} fontSize={"2xl"}>
                Event Music
              </Text>
            </Center>
          </Box>
          {filteredEvents.length > 0 ? (
            <VStack align={"center"}>
              <Box>
                {filteredEvents.map((event) => (
                  <Box
                    w={"15em"}
                    bgColor={"lightgray"}
                    borderRadius={".5em"}
                    p={"1em 1em"}
                  >
                    <Box h={"8em"} borderRadius={".5em"} bgColor={"gray"}>
                      <Center>
                        <Text>image</Text>
                      </Center>
                    </Box>
                    <Spacer />
                    {/* <Text fontWeight="bold">hallo{event.title}</Text> */}
                    <Text>Kategori: {event.category}</Text>
                    <Text>Lokasi: {event.location}</Text>
                    <Text>Status: {event.status}</Text>
                  </Box>
                ))}
              </Box>
            </VStack>
          ) : (
            <Text>Tidak ada event yang cocok dengan filter Anda.</Text>
          )}
          <Box>
            <Grid templateColumns="repeat(5, 1fr)" gap={6}>
              <Box
                w={"15em"}
                bgColor={"lightgray"}
                borderRadius={".5em"}
                p={"1em 1em"}
              >
                <Box h={"8em"} borderRadius={".5em"} bgColor={"gray"}>
                  <Center>
                    <Text>image</Text>
                  </Center>
                </Box>
                <Spacer />
                <Box>
                  <Text>Dewa-19</Text>
                  <Text>Jogja</Text>
                  <Text>23 10 2023 - 26 10 2023 </Text>
                  <Text>Paid</Text>
                </Box>
              </Box>
              {/* <Box
                w={"15em"}
                bgColor={"lightgray"}
                borderRadius={".5em"}
                p={"1em 1em"}
              >
                <Box h={"8em"} borderRadius={".5em"} bgColor={"gray"}>
                  <Center>
                    <Text>image</Text>
                  </Center>
                </Box>
                <Spacer />
                <Box>
                  <Text>Kangen Band</Text>
                  <Text>Jakarta</Text>
                  <Text>23 10 2023 - 26 10 2023 </Text>
                  <Text>Gratis</Text>
                </Box>
              </Box> */}
              {/* <Box
                w={"15em"}
                bgColor={"lightgray"}
                borderRadius={".5em"}
                p={"1em 1em"}
              >
                <Box h={"8em"} borderRadius={".5em"} bgColor={"gray"}>
                  <Center>
                    <Text>image</Text>
                  </Center>
                </Box>
                <Spacer />
                <Box>
                  <Text>Sheila On-7</Text>
                  <Text>Makassar</Text>
                  <Text>23 10 2023 - 26 10 2023 </Text>
                  <Text>Paid</Text>
                </Box>
              </Box> */}
              {/* <Box
                w={"15em"}
                bgColor={"lightgray"}
                borderRadius={".5em"}
                p={"1em 1em"}
              >
                <Box h={"8em"} borderRadius={".5em"} bgColor={"gray"}>
                  <Center>
                    <Text>image</Text>
                  </Center>
                </Box>
                <Spacer />
                <Box>
                  <Text>Alay Band</Text>
                  <Text>Banjarmasin</Text>
                  <Text>23 10 2023 - 26 10 2023 </Text>
                  <Text>Free</Text>
                </Box>
              </Box> */}
            </Grid>
          </Box>
        </Box>
      </Box>
      {/* <UpcomingEvents /> */}
    </Box>
  );
}

export default FindEvent;
