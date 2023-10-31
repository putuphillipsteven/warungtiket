/*
Untuk membuat formulir pencarian berfungsi pada kode yang telah disediakan, Anda perlu mengimplementasikan beberapa langkah:
1.  Tambahkan State Pencarian: Anda sudah memiliki state 'searchInput' yang menyimpan nilai dari input pencarian. 
    Saat input berubah, nilai ini diperbarui.
2.  Tangani Perubahan Input: Anda telah menambahkan handler 'handleSearchInputChange' yang memperbarui state 'searchInput' 
    saat input pencarian berubah. Pastikan handler ini dihubungkan dengan input pencarian seperti yang ditunjukkan di komponen "Input".

    <Input
        value={searchInput}
        onChange={handleSearchInputChange}
        placeholder="Cari event..."
    />

3.  Tangani Pencarian: Anda juga telah menambahkan tombol "Cari". Anda perlu menghubungkan handler pencarian (handleSearch) 
    ke tombol ini sehingga ketika tombol "Cari" diklik, pencarian akan dilakukan.

    <Button onClick={handleSearch}>Cari</Button>

4.  Implementasi Logika Pencarian: Di dalam fungsi handleSearch, Anda perlu mengimplementasikan logika pencarian 
    yang sesuai dengan kebutuhan Anda. Logika ini akan mengambil nilai dari searchInput dan kemungkinan juga nilai dari 
    state lain seperti category, location, dan status, dan kemudian mencocokkannya dengan data event yang Anda miliki. 
    Misalnya, Anda dapat menggunakan JavaScript filter untuk menyaring data event yang sesuai dengan kriteria pencarian.
    Contoh sederhana untuk pencarian berdasarkan nama acara (mengabaikan filter lainnya):
    
    const handleSearch = () => {
    // Implementasi pencarian sesuai dengan kriteria
    const hasilPencarian = daftarEvent.filter((event) =>
    event.namaAcara.toLowerCase().includes(searchInput.toLowerCase())
    );
    // Gunakan hasil pencarian sesuai kebutuhan Anda, seperti menampilkan hasil atau melakukan aksi lain.
    };
    Anda harus menggantikan "daftarEvent" dengan daftar event yang sesuai di aplikasi Anda dan menggantikan "namaAcara" 
    dengan properti yang sesuai dalam objek event.

5.  Menampilkan Hasil Pencarian: Setelah Anda mendapatkan hasil pencarian, Anda dapat menampilkan hasilnya dalam komponen EventCard 
    atau elemen lain yang sesuai. Anda dapat mengatur state yang sesuai untuk menyimpan hasil pencarian dan merendernya dalam komponen sesuai.
6.  Menambahkan Fungsionalitas Filter Lain (Opsional): Jika Anda ingin mendukung filter kategori, lokasi, dan status, Anda perlu menambahkan 
    logika yang serupa untuk filter-filter ini dalam fungsi handleSearch. Anda dapat menyertakan filter ini dalam pencarian untuk menghasilkan 
    hasil yang lebih tepat.

    Dengan mengikuti langkah-langkah ini, Anda akan dapat membuat formulir pencarian berfungsi dalam komponen FindEvent. 
    Pastikan untuk menyesuaikan logika pencarian sesuai dengan data event Anda dan kebutuhan aplikasi Anda.
*/


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
      location: "Jakarta",
      status: "Free",
    },

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
          <Box w={"50%"}>
            <Input />
          </Box>
        }
      />
      <Box p={"1em 2em"} pt={"6.5em"} display={"flex"}>
        <Box w={"30%"}>
          <VStack align={"stretch"}>
            <Box>
              <Text as={"b"} fontSize={"2xl"}>
                Filter
              </Text>
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
        <Spacer m={"1em"} />
        <Box w={"full"} pt={"0 3.5em"}>
          <Box>
            <Text as={"b"} fontSize={"2xl"}>
              Event Music
            </Text>
          </Box>
          <Box mt={".5em"} ml={".5em"}>
            {events.length > 0 ? (
              <Grid templateColumns={"repeat(4, 1fr)"} gap={".5em"}>
                {events.map((event) => (
                  <Box
                    // w={"15em"}
                    minH={"20em"}
                    bgColor={"lightgray"}
                    borderRadius={".5em"}
                    p={"1em 1em"}
                    display={"flex"}
                    flexDirection={"column"}
                  >
                    <Box h={"10em"} borderRadius={".5em"} bgColor={"gray"}>
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
              </Grid>
            ) : (
              <Text>Tidak ada event yang cocok dengan filter Anda.</Text>
            )}
          </Box>

          <Box></Box>
        </Box>
      </Box>
      {/* <UpcomingEvents /> */}
    </Box>
  );
}

export default FindEvent;
