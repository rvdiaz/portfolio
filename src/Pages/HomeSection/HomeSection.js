import { Box, Button, Fade, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useContext, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { Image } from "../../Components/Basic/Image/Image";
import { PersonalBiographyItem } from "../../Components/Basic/PersonalBiography";
import { Queries } from "../../config/Queries";
import { DataContext } from "../../Context/DataContext";

export const HomeSection = () => {
  const { dataPages, theme, error } = useContext(DataContext);
  const { info } = theme;
  const { primaryColor } = info;

  const { mediaQueries } = Queries();
  const { isMobile, isDesktop, isTablet } = mediaQueries;

  const imageSize = () => {
    switch (true) {
      case isMobile:
        return "auto";
      case isTablet:
        return "350px";
      default:
        return "90%";
    }
  };

  if (error) {
    return (
      <>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h5">Under Maintenance</Typography>
        </Box>
      </>
    );
  }

  return (
    <Fade in={true} timeout={1000}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "start",
          height: "100%",
          alignItems: isTablet ? "start" : "center",
          paddingTop: isTablet ? "4vh" : "0",
          flexDirection: isMobile && "column",
        }}
      >
        <Box
          sx={{
            width: isMobile ? "100%" : "50%",
            textAlign: "center",
          }}
          className="image"
        >
          <Image
            alt="Robe Valdes"
            sx={{
              width: imageSize,
              height: isMobile ? "40vh" : "auto",
            }}
            src={dataPages.profilePicture}
          />
        </Box>
        <Box
          sx={{
            width: isMobile ? "100%" : "50%",
            paddingTop: isMobile ? "2vh" : "4vh",
            paddingBottom: isMobile && "2vh",
          }}
          className="info"
        >
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
            >About me</Typography>
            <Box
              sx={{
                width: "20px",
                height: "2px",
                backgroundColor: "#a77043",
                marginLeft: "5px",
              }}
            ></Box>
          </Box>
          <Typography
            variant="h3"
            sx={{
              textTransform: "uppercase",
              fontWeight: "600",
              textAlign: "center",
              fontSize: isDesktop ? "33px" : "24px",
              marginTop: "1vh",
            }}
          >
            {dataPages.name}
          </Typography>
          <Typography
            variant="h3"
            sx={{
              textTransform: "uppercase",
              fontWeight: "600",
              textAlign: "center",
              fontSize: isDesktop ? "33px" : "24px",
              marginTop: "1vh",
            }}
          >
            {dataPages.profession}
          </Typography>
          <Box
            sx={{
              textAlign: isMobile ? "center" : "end",
              marginTop: "3vh",
              "& .description p": {
                margin: "0",
              },
            }}
          >
            <ReactMarkdown className="description">
              {dataPages.personalQuote.value}
            </ReactMarkdown>
            <Typography
              sx={{
                fontStyle: "italic",
                textAlign: isMobile ? "center" : "end",
              }}
            >
              {dataPages.personalQuote.author}
            </Typography>
          </Box>
          <PersonalBiographyItem
            label="Birthday"
            value={dataPages.birthday}
          ></PersonalBiographyItem>
          <PersonalBiographyItem
            label="Email"
            value={dataPages.email}
          ></PersonalBiographyItem>
          <PersonalBiographyItem
            label="Website"
            value={dataPages.website}
          ></PersonalBiographyItem>
          <Box
            className="personal"
            sx={
              isMobile
                ? {
                    width: "fit-content",
                    margin: "0 auto",
                    display: "flex",
                    flexDirection: "column",
                  }
                : {
                    display: "flex",
                    flexDirection: "column",
                  }
            }
          >
            <Button
              disableRipple
              target="_blank"
              href={dataPages.pdfResumeLink}
              sx={{
                color: primaryColor,
                border: "1px solid #a770439E",
                width: "fit-content",
                margin: "20px auto",
                fontWeight: "600",
                "&:hover": {
                  border: "1px solid #a77043",
                  color: primaryColor,
                  backgroundColor: "transparent",
                },
              }}
            >
              "Download CV"
              <Image
                sx={{
                  width: isDesktop ? "25px" : "20px",
                  marginRight: isDesktop ? "10px" : "0",
                }}
                src="https://rvdiaz-images.s3.amazonaws.com/icons8_download_24_e6ca62fe65.png"
              />
            </Button>
          </Box>
        </Box>
      </Box>
    </Fade>
  );
};
