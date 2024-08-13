import React, { useEffect, useState } from "react";
import NoteCard from "../Components/NoteCard";

import { 
    Container,
    Typography,
    Grid,
    Paper
} from "@mui/material";
import Masonry from '@mui/lab/Masonry';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(0.5),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

export default function Notes() {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8000/notes")
        .then((res) => res.json())
        .then((data) => setNotes(data))
        .catch((err) => console.log(err));
    }, [notes]);

    const handleDelete = async (id) => {
        await fetch(`http://localhost:8000/notes/${id}`, {
            method: "DELETE",
        })       

        const newNotes = notes.filter(note => note.id !== id);
        setNotes(newNotes);
    }
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

            <Masonry 
                columns={3} 
                spacing={{ xs: 1, sm: 2, md: 3 }}
                sequential
            >
                {notes.map((note, index) => (
                    <Item key={index} sx={{ note }}>
                        <NoteCard note={note} handleDelete={handleDelete} />
                    </Item>
                ))}
            </Masonry>

            {/* <Grid container spacing={3}>
                {notes.map((note) => (
                    <Grid item key={note.id} xs={12} md={6} lg={4}>
                        <NoteCard note={note} handleDelete={handleDelete} />
                    </Grid>
                ))}
            </Grid> */}
        </Container>
    );
};