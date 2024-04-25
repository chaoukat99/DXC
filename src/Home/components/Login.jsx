import React from 'react'

function Login() {
  return (
    <div>
        <div classNameN="row justify-content-center" id='login'>

                <div classNameN="col-md-4">

                    <form classNameN="login-form justify-content-center">
                        <h2 classNameN="text-center mb-4 customtitle">Login</h2>
                        <div classNameN="form-group">
                            <label for="username">Username:</label>
                            <input type="text" classNameN="form-control custominput" id="username" name="username" placeholder="Enter your username" />
                        </div>
                        <div classNameN="form-group">
                            <label for="password">Password:</label>
                            <br></br>
                            <input type="password" classNameN="form-control custominput" id="password" name="password" placeholder="Enter your password" />
                            </div>
                             <br></br>
                        <button type="submit" classNameN="btn  w-100 custombtn">Login</button>
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

export default Login
