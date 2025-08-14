"use client";

import { Box, Divider, Fab } from "@mui/material";
import PostDisplay from "./Components/postdisplay";
import { AddRounded } from "@mui/icons-material";
import { useEffect, useState } from "react";
import Link from "next/link";
import MenuBar from "./Components/menubar";
import Post from "./Types";
import { getPosts } from "./appData/posts";


export default function Home() {
  const [posts, setPosts]=useState<Post[]>([]);

  useEffect(() => {
    setPosts(getPosts());
  }, []);
  return (
    <Box margin={1}>
      <MenuBar title="Hygge"></MenuBar>
      <PostDisplay posts={posts}></PostDisplay>
      <Link href="/newpost">
      <Fab
        aria-label="add"
        sx={{ position: 'fixed', bottom: 16, right: 16, backgroundColor:'#CDA8B8', color:'#612940' }}
      >
        <AddRounded />
      </Fab>
      </Link>
    </Box>
  );
}
