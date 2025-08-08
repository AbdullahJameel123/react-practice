import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-dark text-center text-light py-4 mt-auto shadow-top">
      <Container>
        <p className="m-0">
          &copy; {new Date().getFullYear()} My React Site | Built with 💙 in React & Bootstrap
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
