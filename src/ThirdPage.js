import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';

export default function ThirdPage() {
    const history = useHistory();
    const dob = useSelector(state => state.dob);
    const address = useSelector(state => state.address);
    const [error,setError] = useState({
        address:false,
        dob:false
    })
    const dispatch = useDispatch();

    const handleChange = e => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(name,value);
        dispatch({type:'ADD',payload:{name,value}})
        }
    
        const handleSubmit = (e) => {
            e.preventDefault();
          if(address.length < 2 || dob.length < 2){
              if(address.length < 2){
                  setError(prev => ({...prev, address:true}))
              }
              if(dob.length < 2){
                setError(prev => ({...prev, dob:true}))
            }
              return;
          } 
          
           history.push('/dashboard');
        }

  useEffect(() => {
    if(address.length >= 2){
        setError(prev => ({...prev,address:false}))
    }
    if(dob.length >= 2){
        setError(prev => ({...prev,dob:false}))
    }
  },[dob,address])
  return (
      
    <div className='col-lg-6'>
     <center><h1>Register</h1></center>
    <form action="" className='form' onSubmit={handleSubmit}>
    <div className='form__div'>
    <label htmlFor="" className='form__label'>
          Your Address
      </label>
      <input type="text" name='address' className='form__input' onChange={handleChange} value={address}/>
    {error.address &&  <p className="error__message">Enter a valid Address</p>}
    </div>
    <div className='fomr__div'>
    <label htmlFor="" className='form__label'>
          Your Date of Birth
      </label>
      <br />
      <input type="date" max={'2022-01-01'} name='dob' className='form__input is--half' onChange={handleChange} value={dob}/>
     {error.dob &&  <p className="error__message">Enter a valid Date</p>}
    </div>
    <div style={{textAlign:'right'}}>
    <button className='form__button' type='button' onClick={() =>history.push('/2')}>Previous</button>
        <button className='form__button' type='submit'>Submit</button>
    </div>
  </form>
  </div>
  )
}
