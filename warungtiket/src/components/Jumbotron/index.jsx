import { Box, Img, Text, VStack } from "@chakra-ui/react";
import logo from "../../img/logo.png";
export default function Jumbotron() {
  return (
    <Box p={"1.5em 3.5em"} pt={"5em"}>
      <VStack>
        <Box w={"40%"}>
          <Img src={logo} />
        </Box>
        <Box>
          <Text textAlign={"justify"} fontSize={".75em"} lineHeight={"1em"}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
            obcaecati beatae commodi, corrupti porro est repudiandae, voluptas
            neque illum dolor architecto exercitationem dolorum voluptate optio
            odit minus. Eum veniam id accusantium soluta! Asperiores, quaerat
            et, sequi consequatur quod repellat esse, cupiditate iusto ut ipsum
            quas? Libero rerum aut explicabo quo voluptates. Ducimus asperiores
            optio quos quas provident quidem quae voluptatibus dolore reiciendis
            rem, consectetur odio eveniet tenetur maxime, facere, porro
            excepturi blanditiis quis corporis dicta itaque dignissimos
            temporibus officiis necessitatibus. Deleniti suscipit quaerat,
            laudantium eius aut voluptates facere, accusantium itaque sint
            reiciendis voluptatum sapiente nostrum quae at. In, repellat ea
            dignissimos placeat sint quas incidunt quaerat quasi doloribus
            deserunt ipsum aliquid aliquam natus. Eum cum non commodi sapiente,
            excepturi ipsam aut quo provident veniam odio! Eaque perferendis
            fugit quam, quibusdam cumque dolorem fuga delectus reprehenderit
            quis soluta ipsam cum blanditiis doloremque, harum amet consequatur
            reiciendis excepturi velit accusantium! Architecto atque dolorem
            odio vero libero? Totam vel consequuntur nulla. Atque facilis
            voluptates eos? Perspiciatis doloribus maiores minus nostrum sit
            dicta unde pariatur architecto nam, voluptatum autem molestiae eius
            excepturi tenetur saepe corporis. Inventore provident distinctio
            tempora qui ut accusantium in, iste fugiat voluptates minus
            cupiditate alias incidunt assumenda rerum vitae consequatur.
          </Text>
        </Box>
      </VStack>
    </Box>
  );
}
