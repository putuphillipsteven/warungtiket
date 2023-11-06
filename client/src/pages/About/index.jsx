import {
  Box,
  Text,
  Image,
  Heading,
  Divider,
  UnorderedList,
  ListItem,
  Spacer,
  VStack,
} from "@chakra-ui/react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import about from "../../img/poster.png";
import React from "react";

export default function About() {
  return (
    <Box>
      <Navbar />
      <Box mt={"8em"} mb={"8em"}>
        <Box overflow={"hidden"} h={"50vh"}>
          <Image src={about} w={"100%"} position={"relative"} top={"-60px"} />
        </Box>
        <Box p={"1.5em 3.5em"}>
          <Heading size={"md"} fontWeight={"semibold"}>
            TENTANG KAMI
          </Heading>
        </Box>
        <Divider />
        <Box p={"4em 5em"}>
          <Text>
            Warungtiket adalah platform yang memiliki Ticketing Management
            Service (TMS) teknologi unggul dalam mendukung seluruh penyelenggara
            event mulai dari distribusi & manajemen tiket, hingga penyediaan
            laporan analisa event di akhir acara. Beberapa teknologi yang kami
            sediakan siap untuk memfasilitasi penyelenggara event dalam setiap
            tahap persiapan yang meliputi:
            <UnorderedList p={"1.5em 1.5em"} spacing={"0.5em"}>
              <ListItem>
                Distributor tiket terlengkap yang telah bekerja sama dengan
                LOKET untuk menjual tiket Anda.
              </ListItem>
              <ListItem>
                Sistem pembayaran yang beragam dan aman memberikan kemudahan
                kepada calon pembeli, untuk mendapatkan konversi yang lebih
                tinggi.
              </ListItem>
              <ListItem>
                Gate management yang paling aman dan nyaman untuk akses saat
                event berlangsung. Sehingga, event dengan jumlah penonton yang
                besar dapat ditangani dengan mudah.
              </ListItem>
              <ListItem>
                Sistem analisis data yang lengkap dan komprehensif setelah acara
                berlangsung untuk memudahkan penyelenggara event dalam
                menentukan strategi event selanjutnya.
              </ListItem>
            </UnorderedList>
            Sudah ada ratusan event yang bekerja sama dengan kami dan semuanya
            tersebar di seluruh Indonesia. Kini, saatnya perkenalkan event Anda
            pada dunia untuk membawa penonton yang lebih banyak lagi bersama
            kami!
          </Text>
        </Box>
      </Box>
      <Footer/>
    </Box>
  );
}
