import React, { useState } from "react";
import { 
    Container, Typography, Button, TextField, RadioGroup, Radio,
    FormControlLabel, FormLabel, FormControl
} from "@mui/material";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";

export default function Create() {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);
  const [category, setCategory] = useState("todos");

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
      fetch("http://localhost:8000/notes", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ title, details, category }),
      })
      .then((res) => res.json())
      .then((data) => {
        console.log("New note added:", data);
        window.location.href = "/";
      })
      .catch((err) => console.log(err));
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
        <FormControl>
            <FormLabel>Note Category</FormLabel>
            <RadioGroup 
                row
                defaultValue={category}
                onChange={(e) => setCategory(e.target.value)}
            >
                <FormControlLabel value="money" control={<Radio />} label="Money" />
                <FormControlLabel value="todos" control={<Radio />} label="Todos" />
                <FormControlLabel value="reminders" control={<Radio />} label="Reminders" />
                <FormControlLabel value="work" control={<Radio />} label="Work" />
            </RadioGroup>
        </FormControl>
        <br />
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
