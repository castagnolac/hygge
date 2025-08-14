import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Post as PostType } from "../Types";

const PostBox: React.FC<{post: PostType}> = ({post}) => {
    return (
        <Box>
            <Card>
                <CardContent>
                <CardMedia image={post.image} sx={{width: "100%", height: "100%"}}/>
                <Typography variant="h3">{post.title}</Typography>
                <Typography variant="h6">{post.content}</Typography>
                </CardContent>
            </Card>
        </Box>
    );
};
export default PostBox;