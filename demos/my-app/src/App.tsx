import EmployeeTable from "./Components/EmployeeTable";
import Greeting from "./Components/Greeting";
import ProfileCard from "./Components/ProfileCard";
import Courses from "./Courses";

function App() {
  return (
    <div>
      <h1>Welcome to My App</h1>

      <p>This is a simple React application.</p>
      <Greeting name="Mohammed Iliyas" />
      <ProfileCard
        name="Abdullah Askeri"
        role="Software Engineer"
        skills={["JavaScript", "React", "Node.js"]}
      />  
    </div>
  );
}

export default App;
