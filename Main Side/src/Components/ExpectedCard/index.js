import React from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardHeader,
  CardContent,
  Typography,
  Box,
  Rating,
} from "@mui/material";
import Icon from "@mdi/react";
import { mdiStar } from "@mdi/js";

const ExpectedCard = ({ name, genre, imageUrl, rating }) => {
  return (
    <Card
      sx={{
        maxWidth: 190,
        backgroundColor: "#2331",
        height: "300px ",
        display: "flex",
        alignItems: "center",
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          alt={name}
          src={imageUrl}
          sx={{
            height: "200px",
            objectFit: "cover",
            width: "200px",
            borderRadius: 0,
          }}
        />
        <CardContent>
          <Typography
            variant="h5"
            component="div"
            sx={{ color: "white", fontSize: "15px" }}
          >
            {name}
          </Typography>
          <Typography variant="subtitle2" sx={{ color: "#ff55a5" }}>
            {genre}
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", marginTop: 1 }}>
            <Icon path={mdiStar} size={0.5} color="yellow" />
            <Icon path={mdiStar} size={0.5} color="yellow" />
            <Icon path={mdiStar} size={0.5} color="yellow" />
            <Icon path={mdiStar} size={0.5} color="yellow" />
            <Typography
              variant="body2"
              sx={{ color: "white", marginLeft: 0.5 }}
            >
              {rating}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ExpectedCard;
