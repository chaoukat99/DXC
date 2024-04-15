import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Card, CardContent, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import FilledInput from '@mui/material/FilledInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Visibility from '@mui/icons-material/Visibility';


function EmployeeForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    role: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      role: '',
    });
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
            alignItems: 'center', // Centrer horizontalement
            justifyContent: 'center', // Centrer verticalement
            '& .MuiTextField-root': { m: 2, width: '50ch'},
            '& .MuiFilledInput-underline:before': {
              borderBottomColor: '#75356b'},
            '& .MuiInputLabel-root': {
              color: '#75356b'
            },
            '& .MuiFilledInput-input': {
              paddingTop: '20px', // Ajuster l'espacement au-dessus du texte saisi
            },
            

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
            />
          </div>
          <div>
          <FormControl sx={{ m: 2, width: '50ch' }} variant="filled"  size="small">
          <InputLabel required htmlFor="password">Mot de passe</InputLabel>
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
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
          </div>
          <div>
            <FormControl sx={{ m: 2, width: '50ch' }} >
              <InputLabel required id="role">Role</InputLabel>
              <Select
                labelId="role"
                id="demo-simple-select"
                value={formData.role}
                name="role"
                label="Role"
                onChange={handleChange}
                variant="filled"
              >
                <MenuItem value="">Sélectionnez un role</MenuItem>
                <MenuItem value="Développeur">Développeur</MenuItem>
                <MenuItem value="Concepteur">Concepteur</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div>
            <Button  sx={{
                      backgroundColor: '#75356b',
                     '&:hover': {
                     backgroundColor: '#ac85a6',},
                     }}
                   variant="contained" type="submit">Ajouter</Button>
          </div>
        </Box>
      </CardContent>
    </Card>
  );
}

export default EmployeeForm;
