import { Container, Typography, Box } from "@mui/material";
import Filters from "../components/Filters";
import CourseList from "../components/CourseList";
import PaginationControls from "../components/PaginationControls";
import Loader from "../components/Loader";
import ErrorState from "../components/ErrorState";
import { useCourses } from "../hooks/useCourses";

const Home = () => {
  const {
    courses,
    loading,
    error,
    applyFilters,
    page,
    setPage,
    totalPages,
    itemsPerPage,
    changeItemsPerPage,
    setSortBy,
  } = useCourses();

  if (loading) return <Loader />;
  if (error) return <ErrorState message={error} />;

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" sx={{ mb: 3, fontWeight: 700 }}>
        Course Directory
      </Typography>

      <Box
        sx={{
          backgroundColor: "#ffffff",
          padding: "16px",
          borderRadius: "10px",
          boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
          mb: 4,
        }}
      >
        <Filters onFilter={applyFilters} onSort={setSortBy} />
      </Box>

      {courses.length === 0 ? (
        <p style={{ textAlign: "center" }}>No courses found</p>
      ) : (
        <CourseList courses={courses} />
      )}

      <PaginationControls
        page={page}
        setPage={setPage}
        totalPages={totalPages}
        itemsPerPage={itemsPerPage}
        changeItemsPerPage={changeItemsPerPage}
      />
    </Container>
  );
};

export default Home;
