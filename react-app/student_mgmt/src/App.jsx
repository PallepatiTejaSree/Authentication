import { useState } from 'react';
import './App.css'; // If you have any CSS file for global styles

import StudentList from './StudentList';
import AddStudentForm from './AddStudentForm';
import FacultyList from './FacultyList'; // Import FacultyList component
import AddFacultyForm from './AddFacultyForm'; // Import AddFacultyForm component

function App() {
  // State to store student data
  const [students, setStudents] = useState([]);

  // Function to add a new student to the list
  const addStudent = (newStudent) => {
    setStudents([...students, newStudent]);
  };

  // State to store faculty data
  const [faculty, setFaculty] = useState([]);

  // Function to add a new faculty member to the list
  const addFaculty = (newFaculty) => {
    setFaculty([...faculty, newFaculty]);
  };

  return (
    <div className="App">
      <h1>Student and Faculty Management System</h1>
      <h2>Students</h2>
      <AddStudentForm addStudent={addStudent} />
      <StudentList students={students} />
      <h2>Faculty</h2>
      <AddFacultyForm addFaculty={addFaculty} />
      <FacultyList faculty={faculty} />
    </div>
  );
}

export default App;