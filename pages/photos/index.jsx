import PhotoCard from "../../src/components/PhotoCard";
import { Container, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import NarBar from "../../src/components/NavBar";

function IndexPage() {
  const [photos, setPhotos] = useState([]);
  async function getPhotos() {
    try {
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/photos"
      );
      return res.data;
    } catch (err) {
      console.log(err);
      return [];
    }
  }
  return (
    <>
        <Container>
        <Grid container spacing={5}>
          <PhotoCard />
          <PhotoCard />
          <PhotoCard />
          <PhotoCard />
        </Grid>
      </Container>
    </>
  );
}

export default IndexPage;
