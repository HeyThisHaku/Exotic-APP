import Grid from '@mui/material/Grid';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export default function DashboardContent() {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        margin: theme.spacing(1),
        textAlign: 'center',
        color: "black"
    }));
    return (
        <Grid container spacing={1}>
            <Grid item xs={2.5}>
                <Item>Total Member: </Item>
            </Grid>
            <Grid item xs={2.5}>
                <Item>Curently Active: </Item>
            </Grid>
            <Grid item xs={7}>
                <Item>Profit: </Item>
            </Grid>
            <Grid item xs={14}>
                <Item>Activity Graph</Item>
            </Grid>
        </Grid>
    );
}
