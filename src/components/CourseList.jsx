import { Box } from "@mui/material";
import CourseCard from "./CourseCard";

const CourseList = ({ courses }) => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr",
          sm: "1fr 1fr",
          md: "1fr 1fr 1fr",
          lg: "1fr 1fr 1fr 1fr",
        },
        gap: 3,
      }}
    >
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </Box>
  );
};

export default CourseList;
