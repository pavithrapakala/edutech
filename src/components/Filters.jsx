import { TextField, MenuItem, Box } from "@mui/material";
import { useState } from "react";

const Filters = ({ onFilter, onSort }) => {
  const [filters, setFilters] = useState({
    search: "",
    category: "",
    instructor: "",
  });

  const handleChange = (e) => {
    const updated = { ...filters, [e.target.name]: e.target.value };
    setFilters(updated);
    onFilter(updated);
  };

  return (
    <Box display="flex" gap={2} flexWrap="wrap">
      <TextField
        size="small"
        label="Search"
        name="search"
        onChange={handleChange}
      />

      <TextField
        size="small"
        select
        label="Category"
        name="category"
        onChange={handleChange}
        sx={{ minWidth: 150 }}
      >
        <MenuItem value="">All</MenuItem>
        <MenuItem value="Frontend">Frontend</MenuItem>
        <MenuItem value="Backend">Backend</MenuItem>
        <MenuItem value="Design">Design</MenuItem>
        <MenuItem value="Programming">Programming</MenuItem>
      </TextField>

      <TextField
        size="small"
        label="Instructor"
        name="instructor"
        onChange={handleChange}
      />

      <TextField
        size="small"
        select
        label="Sort By"
        onChange={(e) => onSort(e.target.value)}
        sx={{ minWidth: 150 }}
      >
        <MenuItem value="">None</MenuItem>
        <MenuItem value="name">Name (A-Z)</MenuItem>
        <MenuItem value="rating">Rating (High-Low)</MenuItem>
      </TextField>
    </Box>
  );
};

export default Filters;
