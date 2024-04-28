import React from 'react'

const Register = () => {
  return (
    <div className='containerRegist'>
        
        <div className='wrapperRegist'>
            <form>
                <input type='text' placeholder='Enter Your Name'/>
                <input type='email' placeholder='Enter Email'/>
                <input type='password' placeholder='Enter Password'/>
                <input type='file'/>
                <button>Sign up</button>
            </form>
            <p>Already Have an Account? Click Here!</p>
        </div>
    
    </div>
  )
}

export default Register