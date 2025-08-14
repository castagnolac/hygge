"use client";

import { Box, TextField, Divider, Button } from "@mui/material";
import MenuBar from "../Components/menubar";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { addNewPost } from "../appData/posts";

export default function Home() {
    const[title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const router = useRouter();

    const handlePostClick = () => {
        if(title.trim() && content.trim()){
            addNewPost({title, content});
            router.push("/");
        }
    }

    return (
        <Box margin={1}>
            <MenuBar title={"Hygge"}></MenuBar>
            <Box textAlign={"center"} alignItems={"center"}>
                <TextField 
                    variant="filled"
                    fullWidth
                    size="small"
                    label="Enter your Title"
                    onChange={(e) => setTitle(e.target.value)}
                    />
                <TextField
                    variant="filled"
                    margin="dense"
                    multiline
                    fullWidth
                    minRows={3}
                    label="Enter your post description."
                    onChange={(e) => setContent(e.target.value)}
                />
                <Divider />
                <Box>
                    <Button variant="contained" onClick={handlePostClick} sx={{backgroundColor:"#612940"}}>New Post</Button>
                </Box>
            </Box>
        </Box>
    );
}