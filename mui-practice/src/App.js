import "./App.css";
import React from "react";
import Content from "./components/Content";
import Navbar from "./components/Navbar";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Sidebar from "./components/Sidebar";
import RightBar from "./components/RightBar";
import { Container } from "@mui/system";

function App() {
    return (
        <React.Fragment>
            <Navbar />
            <Container maxWidth="lg">
                <Grid2 container spacing={2} width>
                    <Grid2 md={3}>
                        <Sidebar />
                    </Grid2>
                    <Grid2 md={6}>
                        <Content />
                    </Grid2>
                    <Grid2 md={3}>
                        <RightBar />
                    </Grid2>
                </Grid2>
            </Container>
        </React.Fragment>
    );
}

export default App;
