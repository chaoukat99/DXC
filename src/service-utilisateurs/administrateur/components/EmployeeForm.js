import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Card, CardContent, FormControl, InputLabel, Select, MenuItem ,FormHelperText } from '@mui/material';
import FilledInput from '@mui/material/FilledInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';
// import Visibility from '@mui/icons-material/Visibility';

function EmployeeForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    role: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const validateEmail = (email) => {
    // Regex for email validation
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const emptyFields = {};
    const invalidFields = {};
    Object.entries(formData).forEach(([key, value]) => {
      if (value.trim() === '') {
        emptyFields[key] = true;
      }
      if (key === 'email' && !validateEmail(value)) {
        invalidFields[key] = true;
      }
    });
    if (Object.keys(emptyFields).length > 0 || Object.keys(invalidFields).length > 0) {
      setErrors({ ...emptyFields, ...invalidFields });
    } else {
      setErrors({});
      onSubmit(formData);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        role: '',
      });
    }
  };

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Card sx={{ maxWidth: 600, margin: 'auto', marginTop: 5 }}>
      <CardContent>
        <Box
          component="form"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            '& .MuiTextField-root': { m: 2, width: '50ch' },
          
          }}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <div>
            <TextField
              required
              id="firstName"
              label="Prénom"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              variant="filled"
              error={errors.firstName}
               color='secondary'
              sx={{
                '& .MuiFilledInput-underline:before': {
                  borderBottomColor: errors.firstName ? 'red' : '#75356b'
                },
                '& .MuiInputLabel-root': {
                  color: errors.firstName ? 'red' : '#75356b'
                },
              }}
            />
          </div>
          <div>
            <TextField
              required
              id="lastName"
              label="Nom"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              variant="filled"
              error={errors.lastName}
              color='secondary'
              sx={{
                '& .MuiFilledInput-underline:before': {
                  borderBottomColor: errors.lastName ? 'red' : '#75356b'
                },
                '& .MuiInputLabel-root': {
                  color: errors.lastName ? 'red' : '#75356b'
                },
              }}
            />
          </div>
          <div>
            <TextField
              required
              id="email"
              label="E-mail"
              name="email"
              value={formData.email}
              onChange={handleChange}
              variant="filled"
              error={errors.email}
              color='secondary'
              sx={{
                '& .MuiFilledInput-underline:before': {
                  borderBottomColor: errors.email ? 'red' : '#75356b'
                },
                '& .MuiInputLabel-root': {
                  color: errors.email ? 'red' : '#75356b'
                },
              }}
            />
            {errors.email && (
              <FormHelperText error sx={{ml:2 , mt: 0, mb: 0}}>Format d'email non valide</FormHelperText>
            )}
          </div>
          <div>
            <FormControl sx={{ m: 2, width: '50ch' }} variant="filled" size="small">
              <InputLabel required htmlFor="password"
                sx={{
                    color: errors.password ? 'red' : '#75356b'
                }}
              >Mot de passe</InputLabel>

              <FilledInput
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {/* {showPassword ? <VisibilityOff /> : <Visibility />} */}
                    </IconButton>
                  </InputAdornment>
                }
                error={errors.password}
                sx={{
                  '& .MuiFilledInput-underline:before': {
                    borderBottomColor: errors.password ? 'red' : '#75356b'
                  }
                }}
              />
            </FormControl>
          </div>
          <div>
            <FormControl sx={{ m: 2, width: '50ch' }} >
              <InputLabel required id="role"
              sx={{
                  color: errors.role ? 'red' : '#75356b'
              }}
              >Role</InputLabel>

              <Select
                labelId="role"
                id="demo-simple-select"
                value={formData.role}
                name="role"
                label="Role"
                onChange={handleChange}
                variant="filled"
                error={errors.role}
                color='secondary'
                sx={{
                  '& .MuiFilledInput-underline:before': {
                    borderBottomColor: errors.role ? 'red' : '#75356b'
                  },
                }}
              >
                <MenuItem value="">Sélectionnez un role</MenuItem>
                <MenuItem value="Développeur">Développeur</MenuItem>
                <MenuItem value="Concepteur">Concepteur</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div>
            <Button sx={{
              backgroundColor: '#75356b',
              '&:hover': {
                backgroundColor: '#ac85a6',
              },
            }}
              variant="contained" type="submit">Ajouter</Button>
          </div>
        </Box>
      </CardContent>
    </Card>
  );
}


export default EmployeeForm;
