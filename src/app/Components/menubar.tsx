import { AppBar, Box, Container, Icon, IconButton, Toolbar, Typography, Button } from "@mui/material";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import Link from "next/link";
import { Height } from "@mui/icons-material";

interface MenuBarProps{
    title: string
}

const MenuBar: React.FC<MenuBarProps> = (menuProps) => {
    return (
        <Box >
            <AppBar position="static" sx={{background:'#612940'}}>
                    <Toolbar variant="dense">
                        <Link href="/">
                        <Button sx={{color:'#CDA8B8'}}>
                            <HomeRoundedIcon/>
                            <Typography>{menuProps.title}</Typography>
                        </Button>
                        </Link>
                    </Toolbar>
            </AppBar>
        </Box>
    );
};

export default MenuBar;