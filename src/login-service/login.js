import './login.css'
function Login(){
    return(
        <div class="container ">
    <div class="row justify-content-center">

      <div class="col-md-4">

        <form class="login-form justify-content-center">
        <div className='dot'></div>

          <h2 class="text-center mb-4 customtitle">Login</h2>
          
          <div class="form-group">
            <label for="username">Username:</label>
            <br></br>
            <input type="text" class="form-control custominput" id="username" name="username" placeholder="Enter your username" />
          </div>
          <div class="form-group">
            <label for="password">Password:</label>
            <br></br>
            <input type="password" class="form-control custominput" id="password" name="password" placeholder="Enter your password" />
          </div>
          <br></br>
          <button type="submit" class="btn  w-100 custombtn">Login</button>
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