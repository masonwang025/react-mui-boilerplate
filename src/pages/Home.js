import React from "react";
import { Container, Grid, Typography, Box } from "@material-ui/core";
import Page from "../components/Page";

export default function Home() {
  return (
    <Page>
      <Container>
        <Grid>
          <Typography variant="h3">Home page</Typography>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
            illum.
          </p>
        </Grid>
      </Container>
    </Page>
  );
}
