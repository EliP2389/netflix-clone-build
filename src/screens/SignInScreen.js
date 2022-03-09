import React from 'react';
import './SignInScreen.css';

export default function SignInScreen() {
  return (
    <div className='signinScreen'>
         <form>
             <h1>Sign In</h1>
             <input placeholder='Email' type='email' />
             <input placeholder='Password' type='password' />
             <button type='submit'>Sign In</button>
             <h4></h4>
         </form>
         </div>
  )
}
