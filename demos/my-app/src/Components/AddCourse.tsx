import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API_URL = "https://689dc5e2ce755fe69789f10f.mockapi.io/courses";


  function AddCourse() {
    const [title, setTitle] = useState<string>("")
    const [description, setDescription] = useState<string>("")
    const [duration, setDuration] = useState<string>("")
    const [error, setError] = useState<string | null>(null)
    const [success, setSuccess] = useState<string | null>(null)
    

    const navigate = useNavigate()

    const addCourse = async () => {
        const course = {
            title,
            description,
            duration: Number(duration)

        }

        if(title.trim().length <= 6) {
          setError("Title should at least 6 characters!!")
          return;
        }

        if(description.trim().length <= 12) {
          setError("description should be at least 12 char!!")
          return;
        }

        if(duration.trim().length == 0) {
          setError("duration should not be blank!!")
          return;
        }
        

        await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(course),
        })

      setSuccess("✅ Course added successfully!");
      setTimeout(() => navigate("/courses"), 1200);

    }
    

  return (
    <div className="container py-5">
      <div className="card p-4 bg-dark text-light shadow border border-info">
        <h1 className="text-info mb-4">➕ Add New Course</h1>
        {success && <p className="alert alert-success my-2">{success}</p>}
        {error && <p className="alert alert-danger my-2">{error}</p>}
          <div className="mb-3">
            <label className="form-label">Title</label>
            <input
              type="text"
              className="form-control bg-secondary text-light border-info"
              placeholder="Enter course title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}

            />
          </div>

          <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea
              className="form-control bg-secondary text-light border-info"
              placeholder="Enter course description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Duration</label>
            <input
              type="number"
              className="form-control bg-secondary text-light border-info"
              placeholder="e.g., 2 weeks"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
            />
          </div>

          <button className="btn btn-success" onClick={() => addCourse()}>
            <i className="bi bi-plus-circle me-2"></i> Add Course
          </button>
      </div>
    </div>
  );
}


export default AddCourse;
