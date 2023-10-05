import React, { useState } from "react";
import { Grid, TextField } from "@mui/material";

export const Home = () => {
  const [data, setData] = useState("");

  return (
    <React.Fragment>
      <Grid container spacing={2} align="center" sx={{ margin: 2 }}>
        <Grid item xs={3}></Grid>
        <Grid item xs={6}>
          <TextField
            onChange={(e) => setData(e.target.value)}
            label="Enter Your Address: "
            variant="outlined"
            fullWidth
          ></TextField>

          <Grid
            item
            xs={12}
            fullWidth
            sx={{
              bgcolor: "yellow",
              height: 200,
              width: 800,
              marginTop: 2,
              padding: 5,
            }}
          >
            <h3>{`My Address:  ${data}`}</h3>
          </Grid>
        </Grid>
        <Grid item xs={3}></Grid>
      </Grid>
    </React.Fragment>
  );
};
