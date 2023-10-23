import React, { useState } from "react";
import {
  Box,
  Center,
  Input,
  Select,
  Stack,
  Button,
  Text,
  VStack,
  HStack,
} from "@chakra-ui/react";

// Data event (ganti dengan data sebenarnya)
const events = [
  { title: "Event 1", category: "Musik", location: "Jogja", status: "Free" },
  { title: "Event 2", category: "Musik", location: "Malang", status: "Paid" },
  { title: "Event 3", category: "Olahraga", location: "Jakarta", status: "Free" },
  { title: "Event 4", category: "Olahraga", location: "Makassar", status: "Paid" },
  { title: "Event 5", category: "Seni", location: "Bandung", status: "Free" },
  { title: "Event 6", category: "Seni", location: "Riau", status: "Paid" },
  // Tambahkan data event lainnya
];

function TestRadio() {
  const [categoryFilter, setCategoryFilter] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const filteredEvents = events.filter(
    (event) =>
      (categoryFilter === "" || event.category === categoryFilter) &&
      (locationFilter === "" || event.location === locationFilter) &&
      (statusFilter === "" || event.status === statusFilter)
  );

  return (
    <Center h="100vh">
      <VStack spacing={6}>
        <Text fontSize="xl">Cari Event yang Akan Datang</Text>
        <Stack direction="row" spacing={4}>
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
        </Stack>
        <Button
          onClick={() => {
            setCategoryFilter("");
            setLocationFilter("");
            setStatusFilter("");
          }}
        >
          Hapus Filter
        </Button>
        {filteredEvents.length > 0 ? (
          <Box>
            {filteredEvents.map((event) => (
              <Box key={event.title} borderWidth="1px" p={4} borderRadius="md">
                <Text fontWeight="bold">{event.title}</Text>
                <Text>Kategori: {event.category}</Text>
                <Text>Lokasi: {event.location}</Text>
              </Box>
            ))}
          </Box>
        ) : (
          <Text>Tidak ada event yang cocok dengan filter Anda.</Text>
        )}
      </VStack>
    </Center>
  );
}

export default TestRadio;

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
