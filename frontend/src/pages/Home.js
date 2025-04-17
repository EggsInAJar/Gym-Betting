import React from 'react';
import {
  Typography,
  Paper,
  Grid,
  Button,
  Box,
} from '@mui/material';

function Home() {
  return (
    <Box>
      <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Welcome to Gym Betting
        </Typography>
        <Typography variant="body1" paragraph>
          Your one-stop platform for gym betting and fitness challenges.
        </Typography>
        <Button variant="contained" color="primary" size="large">
          Get Started
        </Button>
      </Paper>

      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Paper elevation={2} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Place Bets
            </Typography>
            <Typography variant="body2">
              Create and participate in gym-related bets with other users.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper elevation={2} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Track Progress
            </Typography>
            <Typography variant="body2">
              Monitor your fitness goals and betting history in one place.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper elevation={2} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Earn Rewards
            </Typography>
            <Typography variant="body2">
              Win bets and earn rewards while staying motivated to exercise.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Home; 