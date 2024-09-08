import { Box, Typography } from "@mui/material";

export const PersonalBiographyItem = (props) => {
  const { label, value } = props;

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        marginTop: "3vh",
      }}
    >
      <Typography
        sx={{
          margin: "0 15px",
          fontSize: "18px",
          fontWeight: "600",
          textTransform: "capitalize",
        }}
      >
        {label}:
      </Typography>
      <Typography
        sx={{
          marginLeft: "auto",
        }}
      >
        {value}
      </Typography>
    </Box>
  );
};
