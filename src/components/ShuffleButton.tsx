import { Button } from "@chakra-ui/react";
import { TiArrowShuffle } from "react-icons/ti";

const ShuffleButton = () => {
  return (
    <Button
      leftIcon={<TiArrowShuffle fontSize="22" />}
      colorScheme="green"
      size="lg"
      variant="solid"
      onClick={() => console.log("Clicked")}
    >
      Shuffle
    </Button>
  );
};

export default ShuffleButton;
