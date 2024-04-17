import React from 'react';
import EmployeeForm from '../components/EmployeeForm';
import Header from '../components/Header/header';
import { Card, CardContent } from '@mui/material';
import Typography from '@mui/material/Typography';

function AddEmployeePage() {
  const handleAddEmployee = (formData) => {
    console.log('New employee added:', formData);
  };

  return (
    <div>
      <Header />
      <Card sx={{ maxWidth: 600, margin: 'auto', marginTop: 1 }}>
      <CardContent >
           <Typography variant="h4" sx={{ color: '#75356b', textAlign: 'center', my: 1 }}>
              Ajouter un nouveau utilisateur
            </Typography>
      </CardContent>
    </Card>
      <EmployeeForm onSubmit={handleAddEmployee} />
    </div>
  );
}

export default AddEmployeePage;
