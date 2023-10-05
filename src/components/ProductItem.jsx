import React from "react";

import {
  Grid,
  Card,
  CardContent,
  Rating,
  Badge,
  TextField,
} from "@mui/material";
import { Link } from "react-router-dom";

export const ProductItem = ({ item }) => {
  return (
    <React.Fragment>
      <Grid item xs={4} sx={{ marginTop: 2, padding: 2 }}>
        <Card
          sx={{
            bgcolor: "grey",
            borderRadius: "0px 20px 0px 20px",
            boxShadow: "2px 2px 10px 5px ",
          }}
        >
          <CardContent>
            <Link to="prod">
              <img src={item.image} alt="" />
              <h3>{` Rs. ${item.price}`}</h3>
              <h5>10% discount</h5>
              <Rating value={item.rating.rate} />
              <h3>{item.title.slice(0, 15)}</h3>
              <h6>{item.description.slice(0, 50)}</h6>
            </Link>
          </CardContent>
        </Card>
      </Grid>
    </React.Fragment>
  );
};
