import { Box, Fade, Grid, Typography } from "@mui/material";

import React, { useContext } from "react";
import { Image } from "../../Components/Basic/Image/Image";
import { Queries } from "../../config/Queries";
import { DataContext } from "../../Context/DataContext";

export const ServiceSection = () => {
  const { dataPages, error, loading } = useContext(DataContext);
  const { services } = dataPages;

  const { mediaQueries } = Queries();
  const { isDesktop, isMobile } = mediaQueries;

  if (error || loading) {
    return <></>;
  }

  return (
    <Fade in={!loading} timeout={600}>
      <Box
        sx={{
          textAlign: "center",
          paddingBottom: "3vh",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            textTransform: "uppercase",
            fontWeight: "600",
            textAlign: "center",
            fontSize: isDesktop ? "33px" : "24px",
            marginBottom: "1vh",
          }}
        >
          My Services
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: "20px",
              height: "2px",
              backgroundColor: "#a77043",
              marginRight: "5px",
            }}
          ></Box>
          <Typography
            variant="h5"
            sx={{
              textTransform: "uppercase",
              color: "#a77043",
              fontWeight: "600",
              fontSize: isDesktop ? "20px" : "16px",
            }}
          >
            "What I offer"
          </Typography>
          <Box
            sx={{
              width: "20px",
              height: "2px",
              backgroundColor: "#a77043",
              marginLeft: "5px",
            }}
          ></Box>
        </Box>
        <Grid
          container
          spacing={3}
          sx={{
            marginTop: "1vh",
          }}
        >
          {services.map((service, index) => {
            return (
              <Grid item sm={6} key={index}>
                <Box>
                  <Typography>
                    <Image
                      src={service.iconLink}
                      alt={service.title}
                      sx={{
                        width: "6vh",
                      }}
                    />
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: isMobile ? "20px" : "24px",
                      fontWeight: "700",
                      lineHeight: "1.2",
                      margin: "0.6vh 0",
                    }}
                  >
                    {service.title}
                  </Typography>
                  <Typography variant="body2">{service.description}</Typography>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Fade>
  );
};
