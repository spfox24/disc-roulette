import { Button } from "@chakra-ui/react";
import { TiArrowShuffle } from "react-icons/ti";

const ShuffleButton = () => {
  const handleClick = () => {
    window.location.reload();
  };

  return (
    <Button
      leftIcon={<TiArrowShuffle fontSize="22" />}
      colorScheme="green"
      size="lg"
      variant="solid"
      width="300px"
      onClick={handleClick}
    >
      Shuffle
    </Button>
  );
};

export default ShuffleButton;
