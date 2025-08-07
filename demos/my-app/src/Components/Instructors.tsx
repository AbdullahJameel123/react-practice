function Instructors(){
  const instructors = [
    {
      name: "Ahmed Ali",
      title: "Senior React Instructor",
      bio: "Expert in React and TypeScript with over 8 years of teaching experience.",
    },
    {
      name: "Sara Mohammed",
      title: "Frontend Developer",
      bio: "Passionate about user experience and modern JavaScript frameworks.",
    },
    {
      name: "Khaled Youssef",
      title: "Full Stack Engineer",
      bio: "Enjoys sharing knowledge about web development and best practices.",
    },
  ];

  return (
    <div className="container py-5">
      <div className="card p-4">
        <h1 className="mb-4">Meet Our Instructors</h1>
        <div className="row g-4">
          {instructors.map(function (instructor, idx) {
            return (
              <div className="col-md-4" key={idx}>
                <div className="card h-100 bg-dark text-light shadow-sm border-0">
                  <div className="card-body">
                    <h5 className="card-title">{instructor.name}</h5>
                    <h6 className="card-subtitle mb-2 text-info">{instructor.title}</h6>
                    <p className="card-text">{instructor.bio}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Instructors;
