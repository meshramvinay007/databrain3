import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';

export default function SecondPage() {
    const history = useHistory();
    const phoneNumber = useSelector(state => state.phoneNumber);
    const email = useSelector(state => state.email);
    const [error,setError] = useState({
        phoneNumber:false,
        email:false
    })

  useEffect(() => {
    if(phoneNumber.length === 10){
        setError(prev => ({...prev,phoneNumber:false}))
    }
    if(email.includes("@")){
        setError(prev => ({...prev,email:false}))
    }
  },[email,phoneNumber])


    const dispatch = useDispatch();

    const handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name,value);
    dispatch({type:'ADD',payload:{name,value}})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
      if( phoneNumber.length !== 10   || !email.includes('@')){
          if(phoneNumber.length !== 10){
              setError(prev => ({...prev, phoneNumber:true}))
          }
          if(!email.includes('@')){
            setError(prev => ({...prev, email:true}))
        }
          return;
      } 
       history.push('/3');
    }
  return (
    <div className='col-lg-6'>
     <center><h1>Register</h1></center>
    <form action="" className='form'onSubmit={handleSubmit} >
    <div className='form__div'>
    <label htmlFor="" className='form__label'>
          Your Phone Number
      </label>
      <input type="text" name='phoneNumber' className='form__input' onChange={handleChange} value={phoneNumber}/>
   {error.phoneNumber &&   <p className="error__message">Enter a valid Phone Number</p>}
    </div>
    <div className='fomr__div'>
    <label htmlFor="" className='form__label'>
          Your Email Address
      </label>
      <input type="text" name='email' className='form__input' onChange={handleChange} value={email}/>
      {error.email && <p className="error__message">Enter a valid Email Address</p>}
    </div>
    <div style={{textAlign:'right'}}>
    <button className='form__button' type='button' onClick={() =>history.push('/')}>Previous</button>
        <button className='form__button' type='submit'>Next</button>
    </div>
  </form>
  </div>
  )
}
