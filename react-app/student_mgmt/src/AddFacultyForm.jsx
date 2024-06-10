import React, { useState } from 'react';

const AddFacultyForm = ({ addFaculty }) => {
  const [name, setName] = useState('');
  const [department, setDepartment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !department) return; // Prevent adding if fields are empty
    addFaculty({ name, department });
    setName('');
    setDepartment('');
  };

  return (
    <div>
      <h3>Add Faculty</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label htmlFor="department">Department:</label>
          <input type="text" id="department" value={department} onChange={(e) => setDepartment(e.target.value)} />
        </div>
        <button type="submit">Add Faculty</button>
      </form>
    </div>
  );
};

export default AddFacultyForm;