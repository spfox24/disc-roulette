import { Grid, GridItem, HStack } from "@chakra-ui/react";
import DiscType from "./components/DiscType";
import NavBar from "./components/NavBar";
import ShuffleButton from "./components/ShuffleButton";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "main"`,
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <HStack justifyContent="center">
        <GridItem area="main">
          <DiscType />
          <ShuffleButton />
        </GridItem>
      </HStack>
    </Grid>
  );
}

export default App;
