import { Grid, GridItem, HStack } from "@chakra-ui/react";
import MainWrapper from "./components/MainWrapper";
import NavBar from "./components/NavBar";
import RandomizeTest from "./components/RandomizeTest";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav" "main"`,
      }}
      templateColumns={{
        base: "1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <HStack justifyContent="center">
        <GridItem area="main">
          <MainWrapper />
        </GridItem>
      </HStack>
    </Grid>
  );
}

export default App;
