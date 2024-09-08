import { Box, Fade, Typography } from "@mui/material";
import axios from "axios";
import React, { useContext, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

import { Queries } from "../../config/Queries";
import { BioDesktopContent } from "./BioDesktopContent";
import { BioMobileContent } from "./BioMobileContent";
import { DataContext } from "../../Context/DataContext";

export const BioSection = () => {
  const { dataPages } = useContext(DataContext);
  const { experience } = dataPages;

  const { mediaQueries } = Queries();
  const { isDesktop } = mediaQueries;

  return (
    <Fade in={true} timeout={1000}>
      <Box
        sx={{
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
          {dataPages.name}
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
            {dataPages.profession}
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
        <Box
          sx={{
            marginTop: "2vh",
          }}
        >
          <Box>
            {experience.map((exp, index) => {
              return (
                <Box key={index}>
                  <Box
                    sx={{
                      borderBottom: "2px solid #a77043",
                      marginBottom: "1vh",
                      display: "flex",
                      justifyContent: "end",
                    }}
                  >
                    <Typography
                      sx={{
                        width: "fit-content",
                        padding: "5px 10px",
                        color: "white",
                        backgroundColor: "#a77043",
                        fontWeight: "700",
                      }}
                    >
                      {exp.title}
                    </Typography>
                  </Box>
                  {exp.experienceItems.map((step, index) =>
                    isDesktop ? (
                      <BioDesktopContent
                        key={index}
                        step={step}
                        index={index}
                      />
                    ) : (
                      <BioMobileContent key={index} step={step} index={index} />
                    )
                  )}
                </Box>
              );
            })}
          </Box>
        </Box>
      </Box>
    </Fade>
  );
};
