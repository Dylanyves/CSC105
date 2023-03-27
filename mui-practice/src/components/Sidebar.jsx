import {
    ListItem,
    ListItemButton,
    ListItemIcon,
    List,
    ListItemText,
} from "@mui/material";
import React from "react";

import HomeIcon from "@mui/icons-material/Home";
import ArticleIcon from "@mui/icons-material/Article";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import StoreIcon from "@mui/icons-material/Store";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountBoxIcon from "@mui/icons-material/AccountBox";

function Sidebar(props) {
    const items = [
        { icon: HomeIcon, text: "Homepage" },
        { icon: ArticleIcon, text: "Pages" },
        { icon: PeopleAltIcon, text: "Groups" },
        { icon: StoreIcon, text: "Marketplace" },
        { icon: PersonIcon, text: "Friends" },
        { icon: SettingsIcon, text: "Settings" },
        { icon: AccountBoxIcon, text: "Profile" },
    ];

    return (
        <List sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
            {items.map((item, index) => {
                return (
                    <ListItem>
                        <ListItemButton>
                            <ListItemIcon>
                                <item.icon />
                            </ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItemButton>
                    </ListItem>
                );
            })}
        </List>
    );
}

export default Sidebar;
