import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";

interface Post {
    id: string;
    title: string;
    content: string;
    image?: string;
}
const Post: React.FC<Post> = ({id, title, content, image}) => {
    return (
        <Box>
            <CardMedia image={image} sx={{width: "100%", height: "100%"}}/>
            <Card>
                <CardContent>
                <Typography variant="h3">{title}</Typography>
                <Typography variant="h6">{content}</Typography>
                </CardContent>
            </Card>
        </Box>
    );
};
export default Post;