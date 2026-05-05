import { useEffect, useState, useMemo } from "react";
import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const useCourses = () => {
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [page, setPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [sortBy, setSortBy] = useState("");

  console.log("API:", process.env.REACT_APP_API_BASE_URL);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        setLoading(true);

        const res = await axios.get(`${API_BASE_URL}/courses`, {
          headers: {
            "Cache-Control": "no-cache",
          },
        });

        setCourses(res.data);
        setFilteredCourses(res.data);
      } catch (err) {
        setError("Failed to fetch courses");
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  const sortedCourses = useMemo(() => {
    let sorted = [...filteredCourses];

    if (sortBy === "name") {
      sorted.sort((a, b) => a.name.localeCompare(b.name));
    }

    if (sortBy === "rating") {
      sorted.sort((a, b) => b.rating - a.rating);
    }

    return sorted;
  }, [filteredCourses, sortBy]);

  const paginatedCourses = useMemo(() => {
    const start = (page - 1) * itemsPerPage;
    return sortedCourses.slice(start, start + itemsPerPage);
  }, [sortedCourses, page, itemsPerPage]);

  const totalPages = Math.ceil(sortedCourses.length / itemsPerPage);

  const applyFilters = ({ search, category, instructor }) => {
    let filtered = [...courses];

    if (search) {
      filtered = filtered.filter((c) =>
        c.name.toLowerCase().includes(search.toLowerCase()),
      );
    }

    if (category) {
      filtered = filtered.filter((c) => c.category === category);
    }

    if (instructor) {
      filtered = filtered.filter((c) =>
        c.instructor.toLowerCase().includes(instructor.toLowerCase()),
      );
    }

    setFilteredCourses(filtered);
    setPage(1);
  };

  const changeItemsPerPage = (value) => {
    setItemsPerPage(value);
    setPage(1);
  };

  return {
    courses: paginatedCourses,
    loading,
    error,
    applyFilters,
    page,
    setPage,
    totalPages,
    itemsPerPage,
    changeItemsPerPage,
    setSortBy,
  };
};
