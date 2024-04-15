import logo from './logo.svg';
import './App.css';

import React from 'react';
import  {BrowserRouter,Routes,Route} from 'react-router-dom';
import AddEmployeePage from './service-utilisateurs/administrateur/pages/AddEmployeePage.js';
import AdminDashboardPage from './service-utilisateurs/administrateur/pages/AdminDashboardPage.js';
import Login from './login-service/login.js';


function App() {
  return (
    
    <BrowserRouter>
        <Routes>
            <Route path='/login' element={<Login/>}></Route>
            <Route path="/Add-Employee" element={<AddEmployeePage/>}> </Route>
            <Route path="/Dashboard-Admin" element={<AdminDashboardPage/>}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
