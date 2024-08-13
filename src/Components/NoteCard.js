import React, { useEffect, useState } from "react";
import {
    Card,
    CardHeader,
    CardContent,
    IconButton,
    Avatar,
    Typography
} from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { red, pink, blue, deepOrange } from '@mui/material/colors';
import { DeleteOutline } from "@mui/icons-material";

export default function NoteCard({ note }) {
    const [color, setColor] = useState(deepOrange[500]);

    useEffect(() => {
        if (note.category == "todos") {
            setColor(red[500])
        } else if (note.category == "work") {
            setColor(blue[500])
        } else if (note.category == "reminders") {
            setColor(pink[400])
        }
    }, [note]);
    

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: color }}>
                        {note.title.substring(0,1).toUpperCase()}
                    </Avatar>
                }
                action={
                    <IconButton>
                        <DeleteOutline />
                    </IconButton>
                }
                title={note.title}
                subheader={note.category.charAt(0).toUpperCase() + note.category.slice(1)}
            />
            <CardContent>
                <Typography 
                    // variant="body2" 
                    color="text.secondary"
                >
                    {note.details}
                </Typography>
            </CardContent>
        </Card>
    );
};