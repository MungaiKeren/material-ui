import React, { useEffect, useState } from "react";
import { 
    Container, Typography
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
            {notes.map((note) => (
                <Typography key={note.id} variant="body1" gutterBottom>
                    {note.title}
                </Typography>
            ))}
        </Container>
    );
};