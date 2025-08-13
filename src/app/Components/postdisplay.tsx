import { Masonry } from "@mui/lab";
import { Box } from "@mui/material";
import Post from "./post";

interface postDisplayProps{
    posts: Array<Post>;
}
const PostDisplay: React.FC<postDisplayProps> = ({ posts }) => {
  return (
    <Box sx={{ width: '100%', minHeight: 400 }}>
      <Masonry columns={{ xs: 2, sm: 3, md: 4 }} spacing={2}>
        {posts.map((post : Post) => (
            <Post key={post.id} id={post.id} title={post.title} content={post.content} image={post.image}/>
        ))}
      </Masonry>
    </Box>
  );
};

export default PostDisplay;