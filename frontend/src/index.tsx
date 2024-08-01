import React from 'react';
import {Container, CssBaseline, Typography} from '@mui/material';
import {createRoot} from "react-dom/client";


const domRoot = document.getElementById('root') as HTMLElement;
const root = createRoot(domRoot);

root.render(
    <Container>
        <CssBaseline />
        <Typography variant="h3" component="h2" gutterBottom>
            Welcome to the Stock Sentiment Project
        </Typography>
    </Container>
);