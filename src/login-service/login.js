import "./login.css";
import { useState } from "react";
import CryptoJS from "crypto-js";

function Login() {
  const [User, setUser] = useState({
    email: "",
    password: "",
  });


  // check tokens ---> get user info ---> create session
  function Chek() {
    //encypted
    var encryptedBase64Key = "bXVzdGJlMTZieXRlc2tleQ==";
    var parsedBase64Key = CryptoJS.enc.Base64.parse(encryptedBase64Key);

    const encryptedEmail = CryptoJS.AES.encrypt(User.email, parsedBase64Key, {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7,
    });
    const encryptedPassword = CryptoJS.AES.encrypt(
      User.password,
      parsedBase64Key,
      {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7,
      }
    );

    //decrypted

    
   
   
    // Construct the encrypted token object
    const token = {
      email: encryptedEmail.toString(),
      password: encryptedPassword.toString()
    };
    
    fetch("http://localhost:8083/SERVICE-UTILISATEUR/Utilisateur-service/login", {
  method: "POST",
  mode: "cors",
  headers: {
    Accept: 'application/json',
    "Content-Type": "application/json",
  },
  body: JSON.stringify(token)
})
.then(response => {
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  
  return response.text();
})
.then(data => {
//decrypt user info
  var decryptedData = CryptoJS.AES.decrypt(data, parsedBase64Key, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7,
  });
    //create session with user info

if(decryptedData.toString(CryptoJS.enc.Utf8).length === 0){
alert("login or password incorrect");
}else{
  sessionStorage.setItem("UserInfo", decryptedData.toString(CryptoJS.enc.Utf8)); 

}

})
.catch(error => {
  console.error("Error:", error);
});

   
  }

  return (
    <div className="container-xl ">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <form method="POST" className="login-form justify-content-center">
            <div className="dot"></div>
            <br></br>
            <h2 className="text-center mb-4 customtitle">Login</h2>

            <div className="form-group">
              <label>email</label>
              <br></br>
              <input
                type="text"
                className="form-control custominput"
                id="username"
                name="email"
                value={User.email}
                onChange={(e) => setUser({ ...User, email: e.target.value })}
                placeholder="Enter your username"
              />
            </div>
            <div className="form-group">
              <label >password</label>
              <br></br>
              <input
                type="password"
                className="form-control custominput"
                id="password"
                name="password"
                value={User.password}
                onChange={(e) => setUser({ ...User, password: e.target.value })}
                placeholder="Enter your password"
              />
            </div>
            <br></br>
            <button
              type="button"
              className="btn  w-100 custombtn"
              onClick={() => {
                Chek();
               
        
              }}
            >
              Login
            </button>
            <br></br>
            <br></br>

            <br></br>
            <br></br>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Login;
