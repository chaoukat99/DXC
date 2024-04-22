import "./css/Profile.css";
import React from "react";
import Header from "./administrateur/components/Header/header";
import lg from "../login-service/static/dxc.png";
import { useState } from "react";
function Profile() {
  alert(sessionStorage.getItem('UserInfo'))
  return (
    <>
      <Header />

      <div className="container-fluid w-100">
        <div className="row">
          <div className="col-3 p-5">
            <div>
              <div class="text-center ProfileIMage">
                <img
                  src={lg}
                  className="rounded-5"
                  width={"100%"}
                  height={"100%"}
                />
              </div>
            </div>
            <div >
              <input
                class="form-control form-control-lg"
                id="formFileLg"
                type="file"
              />
            </div>
          </div>

          <div className="col-9 p-5">
            <div class="container-fluid  ">
              <form method="post">
                <div class="row ">
                  <div class="form-group">
                    <input type="hidden" id="exampleInputEmail1" />
                  </div>

                  <div class="form-group">
                    <label for="exampleInputEmail1">
                      <h5>Adress mail</h5>
                    </label>
                    <input
                      type="email"
                      class="form-control rounded-5 h-50 text-xl-start "
                      id="exampleInputEmail1"
                      placeholder="Enter email"
                    />
                  </div>
                </div>
                <br></br>
                <div class="row ">
                  <div class="form-group">
                    <label for="exampleInputEmail1">
                      <h5>Nom</h5>
                    </label>
                    <input
                      type="text"
                      class="form-control form-control-lg rounded-5 h-50 text-xl-start "
                      id="exampleInputEmail1"
                      placeholder="Enter email"
                    />
                  </div>
                </div>
                <br></br>
                <div class="row ">
                  <div class="form-group">
                    <label for="exampleInputEmail1">
                      <h5>Prenom</h5>
                    </label>
                    <input
                      type="text"
                      class="form-control form-control-lg rounded-5 h-50 text-xl-start "
                      id="exampleInputEmail1"
                      placeholder="Enter email"
                    />
                  </div>
                </div>
                <br></br>
                <div class="row ">
                  <div class="form-group">
                    <label for="exampleInputEmail1">
                      <h5>Password</h5>
                    </label>
                    <input
                      type="text"
                      class="form-control form-control-lg rounded-5 h-50 text-xl-start "
                      id="exampleInputEmail1"
                      placeholder="Enter email"
                    />
                  </div>
                </div>
                <br></br>
                <div class="row ">
                  <div class="form-group">
                    <label for="exampleInputEmail1">
                      <h5>Equipe</h5>
                    </label>
                    <input
                      type="text"
                      class="form-control form-control-lg rounded-5 h-50 text-xl-start "
                      id="exampleInputEmail1"
                      placeholder="Enter email"
                      readonly
                    />
                  </div>
                </div>
                <br></br>
                <div class="row ">
                  <div class="form-group">
                    <label for="exampleInputEmail1">
                      <h5>Profession</h5>
                    </label>
                    <input
                      type="text"
                      class="form-control form-control-lg rounded-5 h-50 text-xl-start "
                      id="exampleInputEmail1"
                      placeholder="Enter email"
                      readonly
                    />
                  </div>
                </div>
               
                <br></br>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
