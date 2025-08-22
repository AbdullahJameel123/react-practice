import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type Course = {
  id: number;
  title: string;
  description: string;
  duration: string;
};

function CourseList() {
  const [courses, setCourses] = useState<Course[]>([]);

  async function fetchCourses(): Promise<void> {
    const response = await fetch(
      "https://689dc5e2ce755fe69789f10f.mockapi.io/courses"
    );
    const data: Course[] = await response.json();
    setCourses(data);
  }

  
  useEffect(() => {
    fetchCourses();
  }, []);
  
  async function deleteCourse(id: number) {
    await fetch(`https://689dc5e2ce755fe69789f10f.mockapi.io/courses/${id}`, {
      method: "DELETE",
    });
    fetchCourses();
  }
  return (
    <div className="container py-5">
      <div className="card bg-dark text-light shadow-lg border border-info">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap">
            <h1 className="text-info mb-2 mb-md-0">📚 Available Courses</h1>
            <Link to="/add-course" className="ms-md-3">
              <button className="btn btn-outline-success d-flex align-items-center">
                <i className="bi bi-plus-circle me-2"></i> Add Course
              </button>
            </Link>
          </div>

          <div className="table-responsive">
            <table className="table table-dark table-hover align-middle text-center">
              <thead className="table-info text-dark">
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Title</th>
                  <th scope="col">Description</th>
                  <th scope="col">Duration</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {courses.map((course) => (
                  <tr key={course.id}>
                    <td className="fw-bold">{course.id}</td>
                    <td className="text-info fw-semibold">{course.title}</td>
                    <td className="text-light">{course.description}</td>
                    <td>
                      <span className="badge bg-info text-dark px-3 py-2 fs-6">
                        {course.duration} weeks
                      </span>
                    </td>
                    <td>
                      <div className="d-flex justify-content-center gap-2">
                        <Link to={`/edit-course/${course.id}`} className="ms-md-3">
                        <button className="btn btn-outline-warning btn-sm d-flex align-items-center">
                          <i className="bi bi-pencil-square me-1"></i> Edit
                        </button>
                        </Link>
                        <button className="btn btn-outline-danger btn-sm d-flex align-items-center"
                          onClick={() => deleteCourse(course.id)}
                        >
                          <i className="bi bi-trash me-1"></i> Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseList;
