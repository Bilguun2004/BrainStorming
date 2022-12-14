import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import image from "../assets/images/zurag.webp";
import PostCard from "../components/PostCard";
import uploaderImage from "../assets/images/uploader.webp";
import TextWithTitle from "../components/TextWithTitle";

function Blogs() {
  return (
    <div>
      <Navbar />
      <Box sx={{ maxWidth: "1350px", mx: "auto", my: "100px" }}>
        <TextWithTitle
          title="Blog posts"
          text="Our latest updates and blogs about managing your team"
        />
        <Grid
          sx={{}}
          container
          rowSpacing={8}
          columnSpacing={{ xs: 2, sm: 3, md: 5 }}
          columns={{ xs: 2, md: 3 }}
          alignItems="center"
          justifyContent="space-around"
        >
          <Grid item>
            <PostCard
              title="10 secret tips for managing a team remotely"
              text="Our latest updates and blogs about managing your team
        Our latest updates and blogs about managing your team"
              image={image}
              uploaderImage={uploaderImage}
              uploaderName="Bessie Cooper"
              uploadedDate="2nd January,2022"
            />
          </Grid>
          <Grid item>
            <PostCard
              title="The Emotional Toll of Being in UX"
              text="Our latest updates and blogs about managing your team
        Our latest updates and blogs about managing your team"
              image={image}
              uploaderImage={uploaderImage}
              uploaderName="Bessie Cooper"
              uploadedDate="2nd January,2022"
            />
          </Grid>
          <Grid item>
            <PostCard
              title="10 secret tips for managing a team remotely"
              text="Our latest updates and blogs about managing your team
        Our latest updates and blogs about managing your team"
              image={image}
              uploaderImage={uploaderImage}
              uploaderName="Bessie Cooper"
              uploadedDate="2nd January,2022"
            />
          </Grid>
          <Grid item>
            <PostCard
              title="10 secret tips for managing a team remotely"
              text="Our latest updates and blogs about managing your team
        Our latest updates and blogs about managing your team"
              image={image}
              uploaderImage={uploaderImage}
              uploaderName="Bessie Cooper"
              uploadedDate="2nd January,2022"
            />
          </Grid>
          <Grid item>
            <PostCard
              title="10 secret tips for managing a team remotely"
              text="Our latest updates and blogs about managing your team
        Our latest updates and blogs about managing your team"
              image={image}
              uploaderImage={uploaderImage}
              uploaderName="Bessie Cooper"
              uploadedDate="2nd January,2022"
            />
          </Grid>
          <Grid item>
            <PostCard
              title="10 secret tips for managing a team remotely"
              text="Our latest updates and blogs about managing your team
        Our latest updates and blogs about managing your team"
              image={image}
              uploaderImage={uploaderImage}
              uploaderName="Bessie Cooper"
              uploadedDate="2nd January,2022"
            />
          </Grid>
          <Grid item>
            <PostCard
              title="10 secret tips for managing a team remotely"
              text="Our latest updates and blogs about managing your team
        Our latest updates and blogs about managing your team"
              image={image}
              uploaderImage={uploaderImage}
              uploaderName="Bessie Cooper"
              uploadedDate="2nd January,2022"
            />
          </Grid>
          <Grid item>
            <PostCard
              title="10 secret tips for managing a team remotely"
              text="Our latest updates and blogs about managing your team
        Our latest updates and blogs about managing your team"
              image={image}
              uploaderImage={uploaderImage}
              uploaderName="Bessie Cooper"
              uploadedDate="2nd January,2022"
            />
          </Grid>
          <Grid item>
            <PostCard
              title="10 secret tips for managing a team remotely"
              text="Our latest updates and blogs about managing your team
        Our latest updates and blogs about managing your team"
              image={image}
              uploaderImage={uploaderImage}
              uploaderName="Bessie Cooper"
              uploadedDate="2nd January,2022"
            />
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </div>
  );
}

export default Blogs;
