import { Box } from "@mui/material";
import NewPost from "../Components/newpost";
import MenuBar from "../Components/menubar";

export default function Home() {
    return (
        <Box>
            <MenuBar title={"Hygge"}></MenuBar>
            <NewPost/>
        </Box>
    );
}