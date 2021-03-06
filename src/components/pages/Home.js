import React, { useEffect } from 'react';
import { Grid, Typography, Container, Button } from '@material-ui/core';
import SVG from '../svg/SVG';

const Home = () => {
    useEffect(() => {
        document.getElementById('home').style.minHeight = `calc(100vh - ${document.getElementById('nav').clientHeight}px)`;
        // eslint-disable-next-line
    }, []);
    return (
        <Container maxWidth="lg" id="home" className="home">
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} className="grid-items details">
                    <Typography variant="body2">Developed By</Typography>
                    <Typography variant="h3" className="shadow">Ahmed Faraz</Typography>
                    <Typography variant="subtitle2">Developed using Web Animations API</Typography>
                    <Typography variant="h3" className="shadow">Let's Animate</Typography>
                    <br />
                    <Button variant="outlined" className="btn" onClick={() => {
                        document.getElementById('details-page').scrollIntoView();
                    }}>Show more</Button>
                </Grid>
                <Grid item xs={12} sm={6} className="grid-items">
                    <SVG />
                </Grid>
            </Grid>
        </Container>
    )
}

export default Home;
