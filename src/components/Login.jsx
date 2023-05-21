import img1 from '../assests/image/Vector.png'
import img2 from '../assests/image/sign_up--01 1.png'
import '../assests/Auth.scss'
import { SlEye } from "react-icons/sl";
import Footer from './Subs/Footer';
import { useState } from 'react';
import { RiEyeCloseFill } from "react-icons/ri";

const Login = (props) => {
    const {handleToLogin, isShow, handleShow} = props

    return ( 
        <div className="auth-container">
            <div className="content-left">
                <img src={img1} alt="" className='img1'/>
                <img src={img2} alt="" className='img2'/>
            </div>
            <div className="content-right">
                <div className="header">
                    <div className="title">Login</div>
                    <span className='toLogin'>Don't you have an account? <a href='#' onClick={handleToLogin}>Create now</a></span>
                </div>
                <div className="body">
                    <div className="form">
                        <div className="form-item">
                            <label>Email</label>
                            <input type="email" placeholder='Enter your email'/>
                        </div>
                        <div className="form-item">
                            <label>Password</label>
                            <input type={isShow ? 'text' : 'password'} placeholder='Enter your password'/>
                            {isShow ? 
                                <span className='eye-icon' onClick={handleShow}><SlEye/></span>
                            :
                                <span className='eye-icon' onClick={handleShow}><RiEyeCloseFill/></span>
                            }
                        </div>
                    </div>

                    <div className='body-btn'>
                        <button>Login</button>
                    </div>
                    <span className='forgot-pass'>Forgot a password?</span>
                </div>
                <div className="footer">
                    <Footer/>
                </div>
            </div>
        </div>
     );
}
 
export default Login;