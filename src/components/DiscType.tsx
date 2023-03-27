import { Heading, Flex, Text, Box, Card, CardBody } from "@chakra-ui/react";

const DiscType = () => {
  const discType = [
    "Overstable",
    "Understable",
    "Driver",
    "Mid",
    "Putter",
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

  const newDiscType = shuffle(discType);

  return (
    <>
      <Box width={200}>
        <Flex flexDirection="column">
          <Box display="flex" justifyContent="center">
            <Heading fontSize="3xl" marginBottom={5}>
              Disc
            </Heading>
          </Box>
          <Card align="center">
            <CardBody>
              <Text
                fontSize="2xl"
                fontWeight="bold"
                textAlign="center"
                color="red.500"
              >
                {newDiscType[0]}
              </Text>
            </CardBody>
          </Card>
        </Flex>
      </Box>
    </>
  );
};

export default DiscType;
