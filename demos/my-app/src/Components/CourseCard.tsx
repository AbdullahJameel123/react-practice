type CourseCardProps = {
  title: string;
  instructor: string;
  duration: number;
  topics: string[];
};

function CourseCard({ title, instructor, duration, topics }: CourseCardProps) {
  return (
    <div className="card h-100 bg-dark text-light shadow-sm border border-info">
      <div className="card-body">
        <h5 className="card-title text-info">{title}</h5>
        <h6 className="card-subtitle my-2 text-light">Instructor: {instructor}</h6>
        <p className="card-text">
          <strong>Duration:</strong> {duration} hours
        </p>
        <div>
          {topics.map(function (topic, idx) {
            return (
              <span key={idx} className="badge bg-secondary me-1">
                {topic}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
