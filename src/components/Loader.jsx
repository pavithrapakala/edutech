import { Box, CircularProgress, Typography } from "@mui/material";

const Loader = () => {
  return (
    <Box
      sx={{
        height: "60vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 2,
      }}
    >
      <CircularProgress
        size={50}
        sx={{
          color: "#4f46e5",
        }}
      />

      <Typography variant="body2" sx={{ color: "#555" }}>
        Loading courses...
      </Typography>
    </Box>
  );
};

export default Loader;
