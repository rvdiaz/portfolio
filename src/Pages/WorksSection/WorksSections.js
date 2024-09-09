import { Box, Fade, Grid, Typography } from "@mui/material";
import React, { useContext } from "react";
import { UnderConstruction } from "../../Components/Basic/UnderConstruction/UnderConstruction";
import { WorkCardsImage } from "../../Components/Basic/WorksCards/WorkCardsImage";
import { WorkCardsLink } from "../../Components/Basic/WorksCards/WorkCardsLink";
import { Queries } from "../../config/Queries";
import { DataContext } from "../../Context/DataContext";

export const WorksSections = () => {
  const { dataPages, error, loading } = useContext(DataContext);
  const { works } = dataPages;

  const { mediaQueries } = Queries();
  const { isDesktop } = mediaQueries;

  if (error || loading) {
    return <></>;
  }

  return (
    <Fade in={!loading} timeout={1000}>
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
          Some Works
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
            Projects
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
        {works.map((work) => {
          return (
            <Box
              key={work.title}
              sx={{
                marginTop: "4vh",
              }}
            >
              <Box
                sx={{
                  borderBottom: "3px solid #a77043",
                  display: "flex",
                  justifyContent: "end",
                }}
              >
                <Typography
                  sx={{
                    color: "white",
                    borderRadius: "0px",
                    padding: "5px 15px",
                    fontSize: "20px",
                    fontWeight: "500",
                    backgroundColor: "#a77043",
                    height: "fit-content",
                    width: "fit-content",
                  }}
                >
                  {work.title}
                </Typography>
              </Box>
              <Grid
                container
                spacing={3}
                sx={{
                  justifyContent: "center",
                  marginTop: "10px",
                }}
                key={work.title}
              >
                {work.workItems.map((work) => (
                  <Grid key={work.title} item md={5} sm={6} xs={10}>
                    {work.type === "externalLink" ? (
                      <WorkCardsLink
                        imageUrl={work.image}
                        alternativeText={work.title}
                        target="_blank"
                        externalLink={work.link}
                        label={work.title}
                      />
                    ) : (
                      <WorkCardsImage
                        imageUrl={work.link}
                        alternativeText={work.title}
                        label={work.title}
                      />
                    )}
                  </Grid>
                ))}
              </Grid>
            </Box>
          );
        })}
      </Box>
    </Fade>
  );
};
