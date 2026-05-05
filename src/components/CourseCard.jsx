import { Card, CardContent, Typography, Box, Chip } from "@mui/material";

const getCategoryColor = (category) => {
  switch (category) {
    case "Frontend":
      return "#3b82f6";
    case "Backend":
      return "#10b981";
    case "Design":
      return "#f59e0b";
    case "Programming":
      return "#8b5cf6";
    default:
      return "#6b7280";
  }
};

const CourseCard = ({ course }) => {
  return (
    <Card
      sx={{
        width: "100%",
        height: 220,
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <CardContent sx={{ height: "100%" }}>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
            mb: 1,
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {course.name}
        </Typography>

        <Box sx={{ mb: 1 }}>
          <Chip
            label={course.category}
            size="small"
            sx={{
              backgroundColor: getCategoryColor(course.category),
              color: "#fff",
            }}
          />
        </Box>

        <Typography variant="body2"> {course.instructor}</Typography>
        <Typography variant="body2">⏱ {course.duration}</Typography>

        <Typography sx={{ mt: 2, fontWeight: 600, color: "#4f46e5" }}>
          ⭐ {course.rating}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CourseCard;
