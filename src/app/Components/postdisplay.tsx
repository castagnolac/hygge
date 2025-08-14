import { Masonry } from "@mui/lab";
import { Box } from "@mui/material";
import PostBox from "./post";
import Post from "../Types";

interface postDisplayProps{
    posts: Array<Post>;
}
const PostDisplay: React.FC<postDisplayProps> = ({ posts }) => {
  return (
    <Box sx={{ width: '100%', minHeight: 200 }} margin={1}>
      <Masonry columns={{ xs: 2, sm: 3, md: 4, lg: 5, sl: 6 }} spacing={2}>
        {posts.map((post : Post) => (
            <PostBox key={post.id} post={post}/>
        ))}
      </Masonry>
    </Box>
  );
};

export default PostDisplay;