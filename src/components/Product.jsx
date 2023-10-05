import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid, TextField } from "@mui/material";
import { ProductItem } from "./ProductItem";

export const Product = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const result = await axios.get("https://fakestoreapi.com/products");
    setData(result.data);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <Grid container spacing={2} align="center">
      <Grid item xs={12} sx={{ marginTop: 2, margin: 1 }}>
        <TextField fullWidth></TextField>
      </Grid >
      {data.map((item) => (
        <ProductItem item={item} />
      ))}
    </Grid>
  );
};
