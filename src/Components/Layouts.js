import React from "react";
import { 
    Drawer,
    Typography,
} from "@mui/material";

const drawerWidth = 240;

export default function Layout({ children }) {
    return (
        <div style={{display: "flex"}}>
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
                <Typography>
                    Ninja Notes
                </Typography>
            </Drawer>
            <div>
                {children}
            </div>
        </div>
    );
};