import React from 'react';
import Student from './Student';

const StudentList = ({ students }) => {
  return (
    <div>
      <h2>Student List</h2>
      {students.map(student => (
        <Student key={student.id} student={student} />
      ))}
    </div>
  );
};

export default StudentList;