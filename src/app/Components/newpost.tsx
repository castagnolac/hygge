
import { Box, Divider, TextField } from "@mui/material";
import { Button } from "@mui/material"
import Image from "next/image";

function NewPost() {
    return (
        <Box textAlign={"center"} alignItems={"center"}>
            <TextField
                id="standard-basic"
                variant="standard"
                multiline
                fullWidth
                minRows={3}
            />
            <Divider />
            <Box>
                <Button variant="contained">New Post</Button>
            </Box>
        </Box>
    );
}

export default NewPost;