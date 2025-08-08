import { Link, NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
      <div className="container">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink
              to="/"
              className={(navData) =>
                "nav-link" + (navData.isActive ? " active text-info" : "")
              }
            >
              ReactApp
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/about"
              className={(navData) =>
                "nav-link" + (navData.isActive ? " active text-info" : "")
              }
            >
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/contact"
              className={(navData) =>
                "nav-link" + (navData.isActive ? " active text-info" : "")
              }
            >
              Contact
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/courses"
              className={(navData) =>
                "nav-link" + (navData.isActive ? " active text-info" : "")
              }
            >
              Courses
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/instructors"
              className={(navData) =>
                "nav-link" + (navData.isActive ? " active text-info" : "")
              }
            >
              Our Instructors
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/feedback"
              className={(navData) =>
                "nav-link" + (navData.isActive ? " active text-info" : "")
              }
            >
              Feedback
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/CourseList"
              className={(navData) =>
                "nav-link" + (navData.isActive ? " active text-info" : "")
              }
            >
              CourseList
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/ProductList"
              className={(navData) =>
                "nav-link" + (navData.isActive ? " active text-info" : "")
              }
            >
              ProductList
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/PostList"
              className={(navData) =>
                "nav-link" + (navData.isActive ? " active text-info" : "")
              }
            >
              PostList
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/UserList"
              className={(navData) =>
                "nav-link" + (navData.isActive ? " active text-info" : "")
              }
            >
              UserList
            </NavLink>
          </li>
         
        </ul>
      </div>
    </nav>
  );
}
export default NavBar;