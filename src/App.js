import "./App.css";
import NavBar from "./Components/NavBar";
import { Routes } from "react-router";
import { Route } from "react-router";
import Home from "./Components/Home";
import Students from "./Components/Students";
import ContactUs from "./Components/ContactUs";
import AddNewStudent from "./Components/AddNewStudent";
import EditStudent from "./Components/EditStudent"

function App() {
  return (
    <div>
      <NavBar />

      <Routes>
        <Route path="/" element={
            <Home />
          } />
        <Route path="students" element={
          <Students />
        } />
        <Route path="contact" element={
          <ContactUs />
        } />
        <Route path="/addnewstudent" element={
          <AddNewStudent />
        } />
        <Route path="/editstudent" element={
          <EditStudent />
        } />
      </Routes>
    </div>
  );
}

export default App;
