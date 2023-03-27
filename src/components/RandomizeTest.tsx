import { Button, Heading, HStack } from "@chakra-ui/react";

const RandomizeTest = () => {
  const discType = [
    "Overstable",
    "Understable",
    "Driver",
    "Mid",
    "Putter",
    "You Choose",
  ];

  const throwType = [
    "Backhand",
    "Forehand",
    "Hyzer",
    "Anhyzer",
    "Roller",
    "You Choose",
  ];

  const shuffle = ([...arr]) => {
    let m = arr.length;
    while (m) {
      const i = Math.floor(Math.random() * m--);
      [arr[m], arr[i]] = [arr[i], arr[m]];
    }
    return arr;
  };

  const newDisc = shuffle(discType);
  const newThrow = shuffle(throwType);

  const handleClick = () => {
    window.location.reload();
  };

  return (
    <>
      <HStack flexDirection="column">
        <label>Disc</label>
        <Heading>{newDisc[0]}</Heading>
        <label>Throw</label>
        <Heading>{newThrow[0]}</Heading>
        <Button variant="outline" colorScheme="black" onClick={handleClick}>
          Test
        </Button>
      </HStack>
    </>
  );
};

export default RandomizeTest;
