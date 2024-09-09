import React from "react";
import { Card, CardContent, CardMedia, Link, Typography } from "@mui/material";

export const WorkCardsLink = (props) => {
  const { imageUrl, alternativeText, target, externalLink, label } = props;
  return (
    <Card
      elevation={2}
      sx={{
        width: "100%",
        borderRadius: "5px",
        textAlign: "center",
        border: "1px solid #a770439E",
        "&:hover": {
          boxShadow: "0 0 5px 0 #a77043",
        },
      }}
    >
      <Link
        sx={{
          textDecoration: "none",
        }}
        target={target}
        href={externalLink}
      >
        <CardMedia
          component="img"
          image={imageUrl}
          alt={alternativeText}
          sx={{
            width: "100%",
            height: "20vh",
            objectFit: "contain",
          }}
        ></CardMedia>
        <CardContent
          sx={{
            paddingBottom: "0 !important",
            padding: "10px !important",
            borderTop: "1px solid #e8e2e2",
          }}
        >
          <Typography
            sx={{
              fontSize: "18px",
              color: "black",
            }}
          >
            {label}
          </Typography>
        </CardContent>
      </Link>
    </Card>
  );
};
