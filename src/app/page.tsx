import { Box, Fab } from "@mui/material";
import PostDisplay from "./Components/postdisplay";
import { AddRounded } from "@mui/icons-material";
import Link from "next/link";

export default function Home() {
  let items = [
    { id: "1", title: "Flowers", content: "My partner got me an orchid plant!", image: "https://upload.wikimedia.org/wikipedia/commons/4/45/Phalaenopsis_c.v._orchid_%2849367895198%29.jpg" },
    { id: "2", title: "Angry Birds", content: "2016" },
    { id: "3", title: "Yummy Coffee", content: "I had a nice iced coffee." },
    { id: "4", title: "John Wick", content: "2020" },
    { id: "5", title: "Angry Birds", content: "2016" },
    { id: "6", title: "Yummy Coffee", content: "I had a nice iced coffee." },
  ]
  return (
    <Box>
      <PostDisplay posts={items}></PostDisplay>
      <Link href="/newpost">
      <Fab
        aria-label="add"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
      >
        
        <AddRounded />
      </Fab>
      </Link>
    </Box>
  );
}
