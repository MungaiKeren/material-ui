import React from "react";
import { 
    Container,
    Typography,
    Button
} from "@mui/material";
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';


export default function Create() {
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


            <Button 
                variant="contained"
                type="submit"
                color="secondary"
                startIcon={<SendOutlinedIcon />}
                onClick={() => console.log("Click")}
            >
                Send
            </Button>
        </Container>
    );
};