import React from 'react'
import { useSelector } from 'react-redux'

export default function Dashboard() {
    
    const state = useSelector(state => state);
  return (
   <div className="col-lg-6 dashboard" style={{textAlign:'left'}}>
    <p>Your First Name is <span>{state.firstName}</span></p>
    <p>Your Last Name is <span>{state.lastName}</span></p>
    <p>Your Phone Number is <span>{state.phoneNumber}</span></p>
    <p>Your Email Address is <span>{state.email}</span></p>
    <p>Your Address is <span>{state.address}</span></p>
    <p>Your Date of Birth is <span>{state.dob}</span></p>
   </div>
  )
}
