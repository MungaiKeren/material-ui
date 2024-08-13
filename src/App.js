import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Notes from "./Pages/Notes";
import Create from "./Pages/Create";
import { createTheme, ThemeProvider } from "@mui/material";
import { purple } from "@mui/material/colors";
import Layout from "./Components/Layouts";

const theme = createTheme({
  palette: {
    primary: {
      main: "#921A40"
    },
    secondary: {
      main: "#9c27b0"
    }
  },
  typography: {
    fontFamily: "Quicksand",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Notes />} />
            <Route path="/create" element={<Create />}/>
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
};

export default App;
