import { Grid, GridItem, HStack } from "@chakra-ui/react";
import { useState } from "react";
import MainWrapper from "./components/MainWrapper";
import NavBar from "./components/NavBar";
import RandomizeTest from "./components/RandomizeTest";
import { Disc } from "./hooks/useDiscType";

export interface DiscQuery {
  disc: Disc | null;
}

function App() {
  const [discQuery, setDiscQuery] = useState<DiscQuery>({} as DiscQuery);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "main"`,
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
