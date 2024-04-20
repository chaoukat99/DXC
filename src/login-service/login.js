import './login.css'
import { useState } from 'react';
function Login(){
//partie Admin
const ChekAdmin =()=>{
  fetch('http://localhost:8091/Utilisateur-service/List')
  .then(response => response.json())
  .then(data => {
    alert("data receved");
    // Handle the data received from the server
    const users = data;

    // Now you can work with the array of users
    users.forEach(user => {
      alert("User ID:"+user.id_utilisateur);
      alert("Name:" +user.nom_utilisateur+ user.prenom_utilisateur);
      alert("Email:"+ user.email);
      alert("Pasword" +user.mot_de_passe);
      // Handle other user properties as needed
    });
  })
  .catch(error => {
    // Handle any errors that occur during the fetch
    console.error('Error fetching data:', error);
  });
}


//partie Employee
const ChekEmployee =()=>{
  fetch('http://localhost:8091/Utilisateur-service/ListEmployee')
  .then(response => response.json())
  .then(data => {
    alert("data receved");
    // Handle the data received from the server
    const users = data;

    // Now you can work with the array of users
    users.forEach(user => {
      alert("User ID:"+user.id_utilisateur);
      alert("Name:" +user.nom_utilisateur+ user.prenom_utilisateur);
      alert("Email:"+ user.email);
      // Handle other user properties as needed
    });
  })
  .catch(error => {
    // Handle any errors that occur during the fetch
    console.error('Error fetching data:', error);
  });
}


//partie Chef
const ChekChef =()=>{
  fetch('http://localhost:8091/Utilisateur-service/ListChef')
  .then(response => response.json())
  .then(data => {
    alert("data receved");
    // Handle the data received from the server
    const users = data;

    // Now you can work with the array of users
    users.forEach(user => {
      alert("User ID:"+user.id);
      alert("Name:" +user.nom+ user.prenom);
      alert("Email:"+ user.email);
      // Handle other user properties as needed
    });
  })
  .catch(error => {
    // Handle any errors that occur during the fetch
    console.error('Error fetching data:', error);
  });
}









  const [User, setUser] = useState({
    email: "",
    code: ""
  })
    return(
        <div class="container-xl ">
    <div class="row justify-content-center">

      <div class="col-md-4">

        <form class="login-form justify-content-center">
        <div className='dot'></div>
<br></br>
          <h2 class="text-center mb-4 customtitle">Login</h2>
          
          <div class="form-group">
            <label for="username">email</label>
            <br></br>
            <input type="text" class="form-control custominput" id="username" name="email" value={User.email} onChange={(e) => setUser({...User, email: e.target.value})} placeholder="Enter your username" />
          </div>
          <div class="form-group">
            <label for="password">password</label>
            <br></br>
            <input type="password" class="form-control custominput" id="password" name="code"  value={User.code} onChange={(e) => setUser({...User, code: e.target.value})} placeholder="Enter your password" />
          </div>
          <br></br>
          <button type="submit" class="btn  w-100 custombtn" onClick={()=>{ ChekAdmin();alert("hello "+User.email+" ,"+User.code);}}>Login</button>
        <br></br>
        <br></br>
        
        <br></br>
        <br></br>

        </form>
      </div>
    </div>
  </div>
    )
}
export default Login;