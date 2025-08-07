// src/pages/Contact.tsx
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="container py-5">
      <div className="card p-4">
        <h1 className="mb-3">Contact</h1>
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control bg-dark text-white" id="name" placeholder="Your name" />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control bg-dark text-white" id="email" placeholder="you@example.com" />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea className="form-control bg-dark text-white" id="message" rows={4}></textarea>
          </div>
          <button type="submit" className="btn btn-info">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
