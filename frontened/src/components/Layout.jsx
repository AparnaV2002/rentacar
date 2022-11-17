import React from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Layout = (props) => {

    const navigate = useNavigate();

    const userInfo = localStorage.getItem('userInfo');

    const logoutHandler = () => {
        localStorage.removeItem('userInfo');
        toast.success('You have successfully logged out!');
        navigate('/login');
    }

  return (
    <>
        <div className='header'>
            <div className='col'>
                <a href="/" className='logo'>Lets Go Now</a>
            </div>
            <div className="col">
                <span className='name'>ADMIN</span>
                {userInfo ? (
                    <span onClick={logoutHandler} className='logout'>Logout</span>
                ) : (
                    <a href="/login" className='login'>Login</a>
                )}
                
            </div>
            
            
        </div>
        <div className='main'>
            {props.children}
        </div>
        <div className='footer'>
            <p>&copy;2022. All rights reserved. Powered by Apar.</p>
        </div>
    </>
  )
}

export default Layout