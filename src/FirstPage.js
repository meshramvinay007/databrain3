import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';

export default function FirstPage() {
    const history = useHistory();
    const firstName = useSelector(state => state.firstName);
    const lastName = useSelector(state => state.lastName);
    const [error,setError] = useState({
        firstName:false,
        lastName:false
    })

  useEffect(() => {
    if(firstName.length >= 2){
        setError(prev => ({...prev,firstName:false}))
    }
    if(lastName.length >= 2){
        setError(prev => ({...prev,lastName:false}))
    }
  },[firstName,lastName])


    const dispatch = useDispatch();

    const handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name,value);
    dispatch({type:'ADD',payload:{name,value}})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
      if(firstName.length < 2 || lastName.length < 2){
          console.log('Here');
          if(firstName.length < 2){
              setError(prev => ({...prev, firstName:true}))
          }
          if(lastName.length < 2){
            setError(prev => ({...prev, lastName:true}))
        }
          return;
      } 
       history.push('/2');
    }
  return (
    <div className='col-lg-6' >
     <center><h1>Register</h1></center>
        <form action="" className='form' onSubmit={handleSubmit} >
          <div className='form__div'>
          <label htmlFor="" className='form__label'>
                Your First Name
            </label>
            <input type="text" value={firstName} name='firstName'  className='form__input' onChange={handleChange}/>
           {error.firstName && <p className="error__message">Enter a valid First Name</p>}
          </div>
          <div className='form__div'>
          <label htmlFor="" className='form__label'>
                Your Last Name
            </label>
            <input type="text" value={lastName} name='lastName' className='form__input'  onChange={handleChange}/>
          {error.lastName &&  <p className="error__message">Enter a valid Last Name</p>}
          </div>
          <div style={{textAlign:'right'}}>
              <button type='submit'  className="form__button">Next</button>
          </div>
        </form>
    </div>
  )
}
