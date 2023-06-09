import DiscType from "./DiscType";
import ShuffleButton from "./ShuffleButton";
import ThrowType from "./ThrowType";
import { Box, HStack } from "@chakra-ui/react";

const MainWrapper = () => {
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        padding="10px"
      >
        <HStack marginBottom={5} justifyContent="center">
          <DiscType />
          <ThrowType />
        </HStack>
        <Box display="flex" justifyContent="center" padding={2}>
          <ShuffleButton />
        </Box>
      </Box>
    </>
  );
};

export default MainWrapper;
