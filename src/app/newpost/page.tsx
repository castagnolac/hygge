"use client"

import { Box, TextField, Divider, Button } from "@mui/material";
import MenuBar from "../Components/menubar";
import { useState } from "react";

export default function Home() {
    const [content, setContent] = useState("");

    const handlePostClick = () => {
        setContent("")
    }

    return (
        <Box margin={1}>
            <MenuBar title={"Hygge"}></MenuBar>
            <Box textAlign={"center"} alignItems={"center"}>
                <TextField
                    id="filled-basic"
                    variant="filled"
                    margin="dense"
                    multiline
                    fullWidth
                    minRows={3}
                    sx={{}}
                />
                <Divider />
                <Box>
                    <Button variant="contained" onClick={handlePostClick} sx={{backgroundColor:"#612940"}}>New Post</Button>
                </Box>
            </Box>
        </Box>
    );
}