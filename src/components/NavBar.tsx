import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/KVAMP.png";

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="60px" />
      <Text>Disc Roulette</Text>
    </HStack>
  );
};

export default NavBar;
