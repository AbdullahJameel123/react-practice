import EmployeeCard from "./Components/EmployeeCard";
import Greeting from "./Components/Greeting";
import ProfileCard from "./Components/ProfileCard";

function App() {
  return (
    <div>
      <h1>Welcome to My App</h1>

      <p>This is a simple React application.</p>
      {/* <Greeting name="Mohammed Iliyas" />
      <ProfileCard
        name="Abdullah Askeri"
        role="Software Engineer"
        skills={["JavaScript", "React", "Node.js"]}
      />   */}

      <EmployeeCard 
        name="Abdullah Askeri"
        designation="React Developer"
        department="Engineering"
        salary={1000000}
        />
    </div>
  );
}

export default App;
