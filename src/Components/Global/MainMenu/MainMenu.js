import React, { useContext, useEffect, useState } from "react";
import { Box, Button } from "@mui/material";
import { Image } from "../../Basic/Image/Image";
import { Link, useLocation } from "react-router-dom";
import { Queries } from "../../../config/Queries";
import { DataContext } from "../../../Context/DataContext";

export const MainMenu = () => {
  const { menus } = useContext(DataContext);

  const { pathname } = useLocation();
  const [active, setactive] = useState(pathname);

  useEffect(() => {
    let aux = pathname;
    if (pathname.includes("%20")) aux = pathname.replace("%20", " ");
    setactive(aux);
  }, [pathname]);

  const { mediaQueries } = Queries();
  const { isMobile, isDesktop } = mediaQueries;

  const menuMobile = {
    display: "flex",
    padding: "0 12px",
  };
  const menuDesktop = {
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    marginTop: "20px",
  };

  return (
    <Box sx={isDesktop ? menuDesktop : menuMobile}>
      {menus.map((menu, index) => {
        const iconUrl = menu.iconUrl;
        const altText = menu.alt;
        const href = `/${menu.label.toLowerCase()}`;
        const color = active === href ? "black" : "#a09999";
        const borderBottom =
          isDesktop &&
          (active === href ? "2px solid #a77043" : "2px solid #a770439E");
        return (
          <Button
            tabIndex={index}
            disableRipple
            component={Link}
            to={href}
            key={index}
            sx={{
              color: { color },
              backgroundColor: "transparent",
              textTransform: "capitalize",
              fontSize: isMobile ? "12px" : "16px",
              fontWeight: "600",
              width: "100%",
              borderBottom: { borderBottom },
              justifyContent: "start",
              alignItems: "center",
              borderRadius: "0",
              margin: isMobile ? "0" : "10px",
              flexDirection: isDesktop ? "row" : "column",
              "&:hover": {
                backgroundColor: "transparent",
                color: "black",
                borderBottom: borderBottom,
              },
            }}
          >
            <Image
              sx={{
                width: isDesktop ? "25px" : "20px",
                marginRight: isDesktop ? "10px" : "0",
              }}
              src={iconUrl}
              alt={altText}
            />
            {menu.label}
          </Button>
        );
      })}
    </Box>
  );
};
