import CourseCard from "./CourseCard";

function CourseList() {
  const courses = [
    {
      name: "Web Design",
      instructor: "Alice Johnson",
      duration: 20,
      topics: ["HTML", "CSS", "Bootstrap"],
    },
    {
      name: "React Fundamentals",
      instructor: "Bob Smith",
      duration: 25,
      topics: ["JSX", "Components", "Hooks"],
    },
    {
      name: "Full Stack with MERN",
      instructor: "Charlie Davis",
      duration: 40,
      topics: ["MongoDB", "Express", "React", "Node.js"],
    },
  ];

  return (
    <div className="container py-5">
      <div className="card p-4 ">
        <h1 className="mb-4 text-info">Available Courses</h1>
        <div className="row g-4">
          {courses.map(function (course, idx) {
            return (
              <div className="col-md-4" key={idx}>
                <CourseCard
                  title={course.name}
                  instructor={course.instructor}
                  duration={course.duration}
                  topics={course.topics}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CourseList;
