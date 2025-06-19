import * as React from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Paper,
} from "@mui/material";

export default function Home() {
  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h5" component="h1" gutterBottom>
          Simple Form
        </Typography>
        <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            required
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            type="email"
            required
          />
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}