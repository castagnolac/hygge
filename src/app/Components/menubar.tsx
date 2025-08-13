import { AppBar, Box, Container, Icon, IconButton, Toolbar, Typography, Button } from "@mui/material";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import Link from "next/link";

interface MenuBarProps{
    title: string
}

const MenuBar: React.FC<MenuBarProps> = (menuProps) => {
    return (
        <Box >
            <AppBar sx={{background:'#612940'}}>
                    <Toolbar>
                        <Link href="/">
                        <Button sx={{color:'#9D6381'}}>
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