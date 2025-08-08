import { Container, Form, Button } from "react-bootstrap";

const Contact = () => {
  return (
    <Container className="text-light py-5">
      <h2 className="fw-bold text-primary glow-text">Contact Us</h2>
      <Form className="mt-4">
        <Form.Group className="mb-3">
          <Form.Label>Your Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Your Email</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={4} placeholder="Type your message" />
        </Form.Group>
        <Button variant="primary" type="submit">Send</Button>
      </Form>
    </Container>
  );
};

export default Contact;
