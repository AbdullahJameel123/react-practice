// Login.tsx (UI only — no functionality)
import { useState } from "react";

const Login = () => {
  const [fullName, setFullName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [confirmPassword, setConfirmPassword] = useState<string>("")
  
  const [success, setSuccess] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)


  const validateEmail = (email: string) => 
    /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/.test(email); 

  const handleSubmit = () => {
    console.log("Handle submit called...");
    setError(null)
    setSuccess(null)

    if (fullName.trim().length == 0) {
      setError("Full Name cannot be left blank!!")
      return;
    }

    if (email.trim().length == 0) {
      setError("Email cannot be left blank!!")
      return;
    }

    let validEmail: boolean = validateEmail(email) 

    if(!validEmail) {
      setError("Email is not in correct format!!")
      return
    }

    if (password.trim().length < 8) {
      setError("Password cannot be less than 8 chars");
      return;
    }

    if (confirmPassword !== password) {
      setError("Confirm Password do not Match Password!!")
      return;
    }

    setSuccess("You have registered successfully!");

    setFullName("")
    setEmail("")
    setPassword("")
    setConfirmPassword("")

  }

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <div className="card shadow-lg border-0 rounded-3">
            <div className="card-body p-4 p-md-5">
              {/* Header */}
              <div className="text-center mb-4">
                <h2 className="mb-1">Create Account</h2>
                <p className="text-muted mb-0">Please fill the form to continue</p>
              </div>

              {error && <div className="alert alert-danger">{error}</div>}

             {success && <div className="alert alert-success">{success}</div>}

              {/* Form (UI only) */}
                {/* Name */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">Name</label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="bi bi-person"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your full name"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">Email</label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="bi bi-envelope"></i>
                    </span>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>

                {/* Password */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">Password</label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="bi bi-lock"></i>
                    </span>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Enter password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="form-text">
                    Use 8+ characters with letters & numbers.
                  </div>
                </div>

                {/* Confirm Password */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">Confirm Password</label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="bi bi-shield-check"></i>
                    </span>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Re-enter password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </div>
                </div>

                {/* Terms */}
                <div className="form-check mb-4">
                  <input className="form-check-input" type="checkbox" id="terms" />
                  <label className="form-check-label" htmlFor="terms">
                    I agree to the Terms & Privacy Policy
                  </label>
                </div>

                {/* Actions */}
                <div className="d-grid gap-2">
                  <button  className="btn btn-primary py-2" onClick={handleSubmit}>
                    Create Account
                  </button>
                  <button type="button" className="btn btn-outline-secondary">
                    Cancel
                  </button>
                </div>

              
            </div>
          </div>

          {/* Small helper note */}
          <p className="text-center text-muted small mt-3 mb-0">
            * UI only — wire up handlers/validation later.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
