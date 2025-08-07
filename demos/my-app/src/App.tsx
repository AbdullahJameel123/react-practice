import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import UserDetails from "./Components/UserDetalils";
import Home from "./Components/Home";
import ProfileCard from "./Components/ProfileCard";
import NavBar from "./Components/NavBar";
import Courses from "./Components/Courses";
import Instructors from "./Components/Instructors";
import FeedBack from "./Components/FeedBack";


function App() {
  return (
    <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/users/:id" element={<UserDetails />} />
          <Route path="/instructors" element={<Instructors />} />
          <Route path="/feedback" element={<FeedBack />} />
          <Route
              path="/profile"
              element={
                <ProfileCard
                  name="Usman Ghani"
                  role="UI/UX Designer"
                  skills={["HTML", "CSS"]}
                />
              }
            />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
