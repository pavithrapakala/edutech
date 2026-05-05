import { Box, Button, Select, MenuItem, Typography } from "@mui/material";

const PaginationControls = ({
  page,
  setPage,
  totalPages,
  itemsPerPage,
  changeItemsPerPage,
}) => {
  return (
    <Box
      sx={{
        mt: 5,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 2,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Typography variant="body2" sx={{ color: "#555" }}>
          Show:
        </Typography>

        <Select
          size="small"
          value={itemsPerPage || 5}
          onChange={(e) => changeItemsPerPage(Number(e.target.value))}
        >
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={15}>15</MenuItem>
        </Select>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1.5,
        }}
      >
        <Button
          variant="contained"
          onClick={() => setPage((p) => p - 1)}
          disabled={page === 1}
          sx={{
            textTransform: "none",
            backgroundColor: "#6366f1",
            "&:hover": { backgroundColor: "#4f46e5" },
          }}
        >
          Prev
        </Button>

        <Box
          sx={{
            px: 2,
            py: "6px",
            borderRadius: "6px",
            backgroundColor: "#4f46e5",
            color: "#fff",
            fontWeight: 500,
          }}
        >
          {page} / {totalPages}
        </Box>

        <Button
          variant="contained"
          onClick={() => setPage((p) => p + 1)}
          disabled={page === totalPages}
          sx={{
            textTransform: "none",
            backgroundColor: "#6366f1",
            "&:hover": { backgroundColor: "#4f46e5" },
          }}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default PaginationControls;
