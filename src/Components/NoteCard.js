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
import { red, deepPurple, blue, green } from '@mui/material/colors';
import { DeleteOutline } from "@mui/icons-material";

export default function NoteCard({ note, handleDelete }) {
    const [color, setColor] = useState(deepPurple[500]);

    useEffect(() => {
        if (note.category == "todos") {
            setColor(red[500])
        } else if (note.category == "work") {
            setColor(blue[500])
        } else if (note.category == "reminders") {
            setColor(green[400])
        }
    }, [note]);
    

    return (
        <Card elevation={1}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: color }}>
                        {note.category.substring(0,1).toUpperCase()}
                    </Avatar>
                }
                action={
                    <IconButton onClick={() => handleDelete(note.id)}>
                        <DeleteOutline />
                    </IconButton>
                }
                title={note.title}
                subheader={note.category.charAt(0).toUpperCase() + note.category.slice(1)}
            />
            <CardContent>
                <Typography 
                    variant="body2"
                    color="textSecondary"
                >
                    {note.details}
                </Typography>
            </CardContent>
        </Card>
    );
};