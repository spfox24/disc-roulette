import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/Disc.png";

const NavBar = () => {
  return (
    <HStack justifyContent="center">
      <Image src={logo} boxSize="150px" />
    </HStack>
  );
};

export default NavBar;
