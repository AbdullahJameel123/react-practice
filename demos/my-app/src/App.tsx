import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import UserDetails from "./Components/UserDetailss";
import Home from "./Components/Home";
import ProfileCard from "./Components/ProfileCard";
import NavBar from "./Components/NavBar";
import 'bootstrap-icons/font/bootstrap-icons.css';
import Instructors from "./Components/Instructors";
import FeedBack from "./Components/FeedBack";
import CourseList2 from "./Components/CourseList2";
import UserList from "./Components/UserList2";
import ProductList2 from "./Components/ProductList2";
import PostList4 from "./Components/PostList4";
import RecipeList4 from "./Components/RecipeList4";
import SearchProducts from "./Components/SearchProducts";
import CourseListMockAPI from "./Components/CourseListMockAPI";
import AddCourse from "./Components/AddCourse";
import EditCourse from "./Components/EditCourse";


function App() {
  return (
    <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/courses" element={<CourseListMockAPI />} />
          <Route path="/users/:id" element={<UserDetails />} />
          <Route path="/instructors" element={<Instructors />} />
          <Route path="/feedback" element={<FeedBack />} />
          <Route path="/CourseList" element={<CourseList2 />} />
          <Route path="/ProductList" element={<SearchProducts />} />
          <Route path="/PostList" element={<PostList4 />} />
          <Route path="/UserList" element={<UserList />} />
          <Route path="/ProductList2" element={<ProductList2 />} />
          <Route path="/RecipeList" element={<RecipeList4 />} />
          <Route path="/add-course" element={<AddCourse />} />
          <Route path="/edit-course/:id" element={<EditCourse />} />
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
