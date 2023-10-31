import React, { useState } from "react";
import {
  Box,
  Center,
  Text,
  Spacer,
  Grid,
  Divider,
  Input,
  Select,
  Button,
  VStack,
} from "@chakra-ui/react";
import Navbar from "../../components/Navbar";
import EventCard from "../../components/UpcomingEvents/EventCard";

function TestRadio() {
  const [category, setCategory] = useState(""); // State untuk kategori
  const [location, setLocation] = useState(""); // State untuk lokasi
  const [status, setStatus] = useState(""); // State untuk status
  const [searchInput, setSearchInput] = useState(""); // State untuk input pencarian

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  // Fungsi untuk melakukan pencarian
  const handleSearch = () => {
    // Di sini Anda bisa mengimplementasikan logika pencarian sesuai dengan kebutuhan Anda
    // Anda dapat menggunakan state category, location, status, dan searchInput untuk melakukan pencarian
  };

  return (
    <Box>
      <Navbar
        display={"none"}
        input={
          <Box>
            <Input
              value={searchInput}
              onChange={handleSearchInputChange}
              placeholder="Cari event..."
            />
            <Button onClick={handleSearch}>Cari</Button>
          </Box>
        }
      />
      <Box p={"1em 2em"} pt={"6.5em"} display={"flex"}>
        <Box w={"30%"}>
          <VStack align={"stretch"}>
            <Box>
              <Text>Filter</Text>
            </Box>
            <Divider borderColor={"#192655"} borderWidth={"2px"} />
            <Box>
              {/* <Text as={"b"} fontSize={"1em"}>
                Kategori
              </Text> */}
              <Select value={category} onChange={handleCategoryChange}>
                <option value="">Pilih Kategori</option>
                <option value="Music">Music</option>
                <option value="Sport">Sport</option>
                {/* Tambahkan opsi kategori lainnya di sini */}
              </Select>
            </Box>
            <Box>
              {/* <Text as={"b"} fontSize={"1em"}>
                Lokasi
              </Text> */}
              <Select value={location} onChange={handleLocationChange}>
                <option value="">Pilih Lokasi</option>
                <option value="Jogja">Jogja</option>
                <option value="Jakarta">Jakarta</option>
                {/* Tambahkan opsi lokasi lainnya di sini */}
              </Select>
            </Box>
            <Box>
              {/* <Text as={"b"} fontSize={"1em"}>
                Status
              </Text> */}
              <Select value={status} onChange={handleStatusChange}>
                <option value="">Status Event</option>
                <option value="Paid">Paid</option>
                <option value="Gratis">Gratis</option>
                {/* Tambahkan opsi status lainnya di sini */}
              </Select>
            </Box>
          </VStack>
        </Box>
        <Spacer />
        <Box w={"full"} pt={"0 3.5em"}>
          {/* ... Konten event yang ada di sini */}
        </Box>
      </Box>
    </Box>
  );
}

export default TestRadio;

// import React, { useState } from "react";
// import {
//   Box,
//   Center,
//   Input,
//   Select,
//   Stack,
//   Button,
//   Text,
//   VStack,
//   HStack,
//   Radio,
// } from "@chakra-ui/react";

// // Data event (ganti dengan data sebenarnya)
// const events = [
//   { title: "Event 1", category: "Musik", location: "Jogja", status: "Free" },
//   { title: "Event 2", category: "Musik", location: "Malang", status: "Paid" },
//   { title: "Event 3", category: "Olahraga", location: "Jakarta", status: "Free" },
//   { title: "Event 4", category: "Olahraga", location: "Makassar", status: "Paid" },
//   { title: "Event 5", category: "Seni", location: "Bandung", status: "Free" },
//   { title: "Event 6", category: "Seni", location: "Riau", status: "Paid" },
//   // Tambahkan data event lainnya
// ];

// function TestRadio() {
//   const [categoryFilter, setCategoryFilter] = useState("");
//   const [locationFilter, setLocationFilter] = useState("");
//   const [statusFilter, setStatusFilter] = useState("");
//   const filteredEvents = events.filter(
//     (event) =>
//       (categoryFilter === "" || event.category === categoryFilter) &&
//       (locationFilter === "" || event.location === locationFilter) &&
//       (statusFilter === "" || event.status === statusFilter)
//   );

//   return (
//     <Center h="100vh">
//       <VStack spacing={6}>
//         <Text fontSize="xl">Cari Event yang Akan Datang</Text>
//         <Stack direction="row" spacing={4}>
//           <Select
//             placeholder="Pilih Kategori"
//             value={categoryFilter}
//             onChange={(e) => setCategoryFilter(e.target.value)}
//           >
//             <option value="">Semua Kategori</option>
//             <option value="Musik">Musik</option>
//             <option value="Olahraga">Olahraga</option>
//             <option value="Seni">Seni</option>
//             {/* Tambahkan opsi kategori lainnya */}
//           </Select>
//           <Select
//             placeholder="Pilih Lokasi"
//             value={locationFilter}
//             onChange={(e) => setLocationFilter(e.target.value)}
//           >
//             <option value="">Semua Lokasi</option>
//             <option value="Jogja">Jogja</option>
//             <option value="Jakarta">Jakarta</option>
//             <option value="Bandung">Bandung</option>
//             <option value="Makassar">Makassar</option>
//             <option value="Malang">Malang</option>
//             <option value="Riau">Riau</option>

//             {/* Tambahkan opsi lokasi lainnya */}
//           </Select>
//           <Select
//             placeholder="Pilih Status"
//             value={statusFilter}
//             onChange={(e) => setStatusFilter(e.target.value)}
//           >
//             <option value="">Semua Status</option>
//             <option value="Paid">Paid</option>
//             <option value="Free">Free</option>
//             {/* <option value="Bandung">Bandung</option> */}
//           </Select>
//         </Stack>
//         <Button
//           onClick={() => {
//             setCategoryFilter("");
//             setLocationFilter("");
//             setStatusFilter("");
//           }}
//         >
//           Hapus Filter
//         </Button>
//         {filteredEvents.length > 0 ? (
//           <Box>
//             {filteredEvents.map((event) => (
//               <Box key={event.title} borderWidth="1px" p={4} borderRadius="md">
//                 <Text fontWeight="bold">{event.title}</Text>
//                 <Text>Kategori: {event.category}</Text>
//                 <Text>Lokasi: {event.location}</Text>
//               </Box>
//             ))}
//           </Box>
//         ) : (
//           <Text>Tidak ada event yang cocok dengan filter Anda.</Text>
//         )}
//       </VStack>
//     </Center>
//   );
// }

// export default TestRadio;

// this is radio button

// import React, { useState } from "react";
// import {
//   Box,
//   Radio,
//   RadioGroup,
//   Text,
//   Input,
// } from "@chakra-ui/react";

// function TestRadio() {
//   const [selected, setSelected] = useState("input"); // Default value
//   const [price, setPrice] = useState(""); // Untuk menyimpan nilai harga

//   const handleChange = (value) => {
//     setSelected(value);

//     // Reset nilai harga ketika pilihan diubah
//     setPrice("");
//   };

//   const handlePriceChange = (event) => {
//     setPrice(event.target.value);
//   };

//   return (
//     <Box>
//       <RadioGroup value={selected} onChange={handleChange}>
//         <Text>Kategori tiket</Text>
//         <Radio value="Gratis">Gratis</Radio>
//         <Radio value="Berbayar">Berbayar</Radio>
//       </RadioGroup>

//       {selected === "Gratis" ? (
//         <Box>
//           <Input type="hidden" value="0" />
//         </Box>
//       ) : selected === "Berbayar" ? (
//         <Box>
//           <Text>Price: {price}</Text>
//           <Input
//             type="number"
//             placeholder="Rp.0"
//             value={price}
//             onChange={handlePriceChange}
//           />
//         </Box>
//       ) : null}
//     </Box>
//   );
// }

// export default TestRadio;
