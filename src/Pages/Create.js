import React, { useState } from "react";
import { Container, Typography, Button, TextField } from "@mui/material";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";

export default function Create() {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitleError(false);
    setDetailsError(false);

    if (title === "") {
      setTitleError(true);
    }
    if (details === "") {
        setDetailsError(true);
    }

    if (title && details) {
      console.log(title, details);      
    }
  };


  return (
    <Container>
      <Typography
        variant="h6"
        component="h2"
        gutterBottom
        color="textSecondary"
      >
        Create a new note
      </Typography>

      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          label="Note Title"
          variant="outlined"
          color="secondary"
          fullWidth
          required
          sx={{
            marginTop: 2,
            marginBottom: 2,
            display: "block",
          }}
          error={titleError}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          label="Note Details"
          variant="outlined"
          color="secondary"
          multiline
          rows={4}
          fullWidth
          required
          sx={{
            marginBottom: 2,
            display: "block",
          }}
          error={detailsError}
          onChange={(e) => setDetails(e.target.value)}
        />
        <Button
          variant="contained"
          type="submit"
          color="secondary"
          endIcon={<SendOutlinedIcon />}
          onClick={() => console.log("Click")}
        >
          Submit
        </Button>
      </form>
    </Container>
  );
}
