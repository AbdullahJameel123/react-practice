

function Courses() {
  return (
    <div className="container py-5">
      <div className="card p-4 bg-dark">
        <h1 className="mb-4 text-info">List of Courses</h1>
        <ul className="list-group list-group-flush">
          <li className="list-group-item bg-secondary m-2 text-light">Frontend React</li>
          <li className="list-group-item bg-secondary m-2 text-light">Advanced Web Design</li>
          <li className="list-group-item bg-secondary m-2 text-light">Canva</li>
          <li className="list-group-item bg-secondary m-2 text-light">Python</li>
          <li className="list-group-item bg-secondary m-2 text-light">Full Stack - MERN</li>
        </ul>
      </div>
    </div>
  );
}

export default Courses;
