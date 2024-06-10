import React from 'react';

const FacultyList = ({ faculty }) => {
  return (
    <div>
      <h3>Faculty List</h3>
      {faculty.length > 0 ? (
        <ul>
          {faculty.map((facultyMember, index) => (
            <li key={index}>
              <strong>Name:</strong> {facultyMember.name}, <strong>Department:</strong> {facultyMember.department}
            </li>
          ))}
        </ul>
      ) : (
        <p>No faculty members added yet.</p>
      )}
    </div>
  );
};

export default FacultyList;