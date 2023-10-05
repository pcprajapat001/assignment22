import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid, Card, CardContent } from "@mui/material";
import { CategoriesItem } from "./CategoriesItem";
import { Product } from "./Product";

export const Categories = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const result = await axios.get(
      "https://fakestoreapi.com/products/categories"
    );
    setData(result.data);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <Card sx={{ margin: 2 }}>
      <CardContent>
        <Grid container spacing={2} align="center">
          {data.map((item) => (
            <CategoriesItem item={item} />
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
};
