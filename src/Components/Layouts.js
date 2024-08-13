import React, { useState } from "react";
import { 
    Drawer,
    Typography,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    AppBar,
    Toolbar,
    Avatar
} from "@mui/material";
import { AddCircleOutline, SubjectOutlined } from "@mui/icons-material";
import { format } from "date-fns";

const drawerWidth = 240;

export default function Layout({ children }) {
    const location = window.location.pathname;
    console.log(location);

    const menuItems = [
        {
            text: "My Notes",
            icon: <SubjectOutlined color="secondary" />,
            path: "/"
        },
        {
            text: "Create Note",
            icon: <AddCircleOutline color="secondary"/>,
            path: "/create"
        }
    ]

    return (
        <div style={{display: "flex"}}>
            {/* app bar */}
            <AppBar 
                color="secondary"
                sx={{
                    width: `calc(100% - ${drawerWidth}px)`
                }}
                elevation={0}
            >
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        {format(new Date(), 'do MMMM Y')}
                    </Typography>
                    <Typography>
                        Keren
                    </Typography>
                    <Avatar
                        sx={{marginLeft: 2}}
                        src=""/>
                </Toolbar>
            </AppBar>

            {/* drawer */}
            <Drawer
                variant="permanent"
                anchor="left"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
            >
                <Typography
                    sx={{
                        padding: 2
                    }}
                    letterSpacing={8}
                >
                    Ninja Notes
                </Typography>

                {/* list items */}
                <List>
                    {menuItems.map((item, index) => (
                        <ListItem 
                            key={index}
                            button                            
                            onClick={() => window.location.href = item.path}
                            sx={location == item.path ? {
                                background: "#B1AFFF"
                            } : null}
                        >
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText>{item.text}</ListItemText>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <div style={{ marginTop: "64px" }}>
                {children}
            </div>
        </div>
    );
};