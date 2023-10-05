import React from "react";
import { Grid, Card, CardContent, Button } from "@mui/material";
import { Product } from "./Product";

export const CategoriesItem = ({ item }) => {
  return (
    <Grid item xs={3}>
      <Button variant="contained" fullWidth color="secondary">
        {item}
      </Button>
    </Grid>
  );
};
