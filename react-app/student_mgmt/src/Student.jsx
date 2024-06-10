import React from 'react';

const Student = ({ student }) => {
  return (
    <div>
      <p>Name: {student.name}</p>
      <p>Age: {student.age}</p>
    </div>
  );
};

export default Student;