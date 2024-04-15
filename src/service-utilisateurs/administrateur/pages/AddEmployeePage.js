import React from 'react';
import EmployeeForm from '../components/EmployeeForm';
import Header from '../components/Header/header';

function AddEmployeePage() {
  const handleAddEmployee = (formData) => {
    console.log('New employee added:', formData);
  };

  return (
    <div>
      <Header />
      <EmployeeForm onSubmit={handleAddEmployee} />
    </div>
  );
}

export default AddEmployeePage;
