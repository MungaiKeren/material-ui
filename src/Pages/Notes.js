import React, { useEffect, useState } from "react";
import NoteCard from "../Components/NoteCard";

import { 
    Container,
    Typography,
    Grid,
    Paper
} from "@mui/material";

export default function Notes() {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8000/notes")
        .then((res) => res.json())
        .then((data) => setNotes(data))
        .catch((err) => console.log(err));
    }, [notes]);

    return (
        <Container>
            <Typography
                variant="h6"
                component="h2"
                gutterBottom
                color="textSecondary"
            >
                All Notes
            </Typography>

            <Grid container>
                {notes.map((note) => (
                    <NoteCard note={note}/>
                ))}
            </Grid>
        </Container>
    );
};