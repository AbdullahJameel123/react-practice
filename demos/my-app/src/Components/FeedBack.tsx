
type Feedback = {
  name: string;
  message: string;
};

const feedbacks: Feedback[] = [
  {
    name: "Ahmed Al-Sayed",
    message: "This app is very helpful and easy to use. Thank you!",
  },
  {
    name: "Fatima Al-Mansour",
    message: "Great experience! I found what I needed quickly.",
  },
  {
    name: "Omar Al-Farouq",
    message: "Excellent support and user-friendly interface.",
  },
];

function FeedBack(){
  return (
    <div className="container py-5">
      <div className="card p-4">
        <h1 className="mb-4 text-info">Testimonials</h1>
        <div className="row g-4">
          {feedbacks.map(function (fb, idx) {
            return (
              <div className="col-md-4" key={idx}>
                <div className="card bg-dark text-light shadow-sm border-0 h-100">
                  <div className="card-body">
                    <h5 className="card-title">{fb.name}</h5>
                    <p className="card-text">"{fb.message}"</p>
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

export default FeedBack;
