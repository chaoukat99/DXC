import React from 'react'
import "./Profile.css"
import Menu from '../Home/components/Menu'
import { Button } from '@mui/material'

function Profile() {
  return (
    <>
    <Menu/>
    <div className="container rounded bg-white mt-5 mb-5">
    <div className="row">
        <div className="col-md-3 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5"><img className="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"/><span className="font-weight-bold">Edogaru</span><span className="text-black-50">edogaru@mail.com.my</span><span> </span></div>
        </div>
        <div className="col-md-5 border-right">
            <div className="p-3 py-5">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h4 className="text-right">Profile Settings</h4>
                </div>
                <div className="row mt-2">
                    <div className="col-md-6"><label className="labels">Name</label><input type="text" className="form-control" placeholder="first name" value=""/></div>
                    <div className="col-md-6"><label className="labels">Surname</label><input type="text" className="form-control" value="" placeholder="surname"/></div>
                </div>
                <div className="row mt-3">
                    <div className="col-md-12"><label className="labels">Mobile Number</label><input type="text" className="form-control" placeholder="enter phone number" value=""/></div>
                    <div className="col-md-12"><label className="labels">Address Line 1</label><input type="text" className="form-control" placeholder="enter address line 1" value=""/></div>
                    <div className="col-md-12"><label className="labels">Address Line 2</label><input type="text" className="form-control" placeholder="enter address line 2" value=""/></div>
                    <div className="col-md-12"><label className="labels">Postcode</label><input type="text" className="form-control" placeholder="enter address line 2" value=""/></div>
                    <div className="col-md-12"><label className="labels">State</label><input type="text" className="form-control" placeholder="enter address line 2" value=""/></div>
                    <div className="col-md-12"><label className="labels">Area</label><input type="text" className="form-control" placeholder="enter address line 2" value=""/></div>
                    <div className="col-md-12"><label className="labels">Email ID</label><input type="text" className="form-control" placeholder="enter email id" value=""/></div>
                    <div className="col-md-12"><label className="labels">Education</label><input type="text" className="form-control" placeholder="education" value=""/></div>
                </div>
                <div className="row mt-3">
                    <div className="col-md-6"><label className="labels">Country</label><input type="text" className="form-control" placeholder="country" value=""/></div>
                    <div className="col-md-6"><label className="labels">State/Region</label><input type="text" className="form-control" value="" placeholder="state"/></div>
                </div>
                <div className="mt-5 text-center">
                <Button
            type="submit"
            fullWidth
            variant="contained"
            style={{background:"rgb(51,0,114)"}}
            sx={{ mt: 3, mb: 2 }}>
                Save Data
            </Button>
                </div>
            </div>
        </div>
       
    </div>
</div>
</>
  )
}

export default Profile