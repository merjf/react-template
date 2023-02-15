import React from 'react';
import { Container, Box, Grid, Link } from "@mui/material";
import { makeStyles } from "@mui/styles";
import variables from '../assets/style/variable.module.scss';
import { theme } from '../utils/Utils';

const useStyles = makeStyles({
    block: {
        margin: "auto"
    },
    
});

const Portfolio = () => {
    const classes = useStyles(theme);

    return (
        <Container className={"main"}>
        </Container>
    )
}
  
export default Portfolio;