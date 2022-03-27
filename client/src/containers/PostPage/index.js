import React from "react";
import { Box } from "@mui/material";
import NavBar from "../../components/Navbar";
import PostPageComp from "../../components/PostPage";

function PostPage() {
  return (
    <Box sx={{ flexGrow: 1 }} className="App-header">
      <NavBar />
      <PostPageComp></PostPageComp>
    </Box>
  );
}

export default PostPage;
