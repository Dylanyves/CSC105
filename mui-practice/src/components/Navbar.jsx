import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";

// import MenuIcon from "@mui/icons-material/Menu";

function Navbar(props) {
    return (
        <Box sx={{ flexGrow: 1 }} mb={4}>
            <AppBar position="static" sx={{ bgcolor: "#20232a" }}>
                <Toolbar>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1 }}
                    >
                        My Website
                    </Typography>
                    <Box
                        sx={{
                            display: { xs: "none", sm: "none", md: "block" },
                        }}
                    >
                        <Button color="inherit">HOME</Button>
                        <Button color="inherit">ABOUT</Button>
                        <Button color="inherit">CONTACT</Button>
                    </Box>
                    <Button
                        color="inherit"
                        sx={{ display: { xs: "block", md: "none" } }}
                    >
                        <MenuIcon color="white" />
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Navbar;
