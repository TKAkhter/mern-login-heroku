// import { useContext, useState, useEffect } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const Posts = () => {
  return (
    <>
      <Container>
        <Typography
          variant="h4"
          style={{ marginTop: "30px", fontWeight: "bold", color: "darkred" }}
        >
          Add your Post
        </Typography>
      </Container>
    </>
  );
};

export default Posts;
