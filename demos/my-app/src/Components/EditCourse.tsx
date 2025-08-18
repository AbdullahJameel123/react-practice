import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

interface Course {
  id: string;
  title: string;
  description: string;
  duration: number;
}

const API_URL = "https://689dc5e2ce755fe69789f10f.mockapi.io/courses/courses";


function EditCourse() {
  const { id } = useParams<{ id: string }>();
  const [course, setCourse] = useState<Course | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  const navigate = useNavigate()


  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await fetch(`${API_URL}/${id}`);
        if (!response.ok) throw new Error("Failed to fetch course");
        const data = await response.json();
        setCourse(data);
      } catch {
        setError("❌ Could not load course details.");
      }
    };
    fetchCourse();
  }, [id]);

  const handleUpdate = async () => {
    if (!course) return;
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(course),
      });
      if (!response.ok) throw new Error("Update failed");

      setMessage("✅ Course updated successfully!");
      setTimeout(() => navigate("/courses"), 1200); // redirect after update
    } catch {
      setError("❌ Sorry, Failed to update course.");
    }
  };
  if (error) return <p className="text-danger">{error}</p>;
  if (!course) return <p>Loading...</p>;
  return (
  <div className="container py-5">
    <div className="card p-4 bg-dark text-light shadow-lg border border-info rounded-4">
      <h1 className="text-info mb-4 d-flex align-items-center gap-2">
        <i className="bi bi-pencil-square"></i> Edit Course
      </h1>

      {message && <p className="alert alert-success py-2">{message}</p>}
      {error && <p className="alert alert-danger py-2">{error}</p>}

      <div className="mb-3">
        <label className="form-label fw-bold">Title</label>
        <input
          type="text"
          className="form-control bg-secondary text-light border-info rounded-3"
          placeholder="Enter course title"
          value={course.title}
          onChange={(e) => setCourse({ ...course, title: e.target.value })}
        />
      </div>

      <div className="mb-3">
        <label className="form-label fw-bold">Description</label>
        <textarea
          className="form-control bg-secondary text-light border-info rounded-3"
          rows={3}
          placeholder="Enter course description"
          value={course.description}
          onChange={(e) =>
            setCourse({ ...course, description: e.target.value })
          }
        />
      </div>

      <div className="mb-4">
        <label className="form-label fw-bold">Duration (weeks)</label>
        <input
          type="number"
          className="form-control bg-secondary text-light border-info rounded-3"
          placeholder="e.g., 4"
          value={course.duration}
          onChange={(e) =>
            setCourse({ ...course, duration: Number(e.target.value) })
          }
        />
      </div>

      <div className="d-flex gap-2">
        <button
          className="btn btn-success px-4"
          onClick={() => handleUpdate()}
        >
          <i className="bi bi-arrow-repeat me-2"></i> Update
        </button>
        <Link to="/courses" className="btn btn-outline-light px-4">
          Cancel
        </Link>
      </div>
    </div>
  </div>
);

}





export default EditCourse;
