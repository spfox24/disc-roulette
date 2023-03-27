import { Heading, Flex, Text, Box, Card, CardBody } from "@chakra-ui/react";

const ThrowType = () => {
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

  const newThrowType = shuffle(throwType);
  return (
    <>
      <Box width={250} margin={2}>
        <Flex flexDirection="column">
          <Box display="flex" justifyContent="center">
            <Heading fontSize="3xl" marginBottom={5}>
              Throw
            </Heading>
          </Box>
          <Card align="center">
            <CardBody>
              <Text
                fontSize="2xl"
                fontWeight="bold"
                textAlign="center"
                color="green.500"
              >
                {newThrowType[0]}
              </Text>
            </CardBody>
          </Card>
        </Flex>
      </Box>
    </>
  );
};

export default ThrowType;
