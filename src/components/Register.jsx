import img1 from '../assests/image/Vector.png'
import img2 from '../assests/image/sign_up--01 1.png'
import '../assests/Auth.scss'
import { RiEyeCloseFill } from "react-icons/ri";
import { SlEye } from "react-icons/sl";
import Footer from './Subs/Footer';

const Register = (props) => {
    const {handleToLogin, isShow, handleShow} = props

    return ( 
        <div className="auth-container">
            <div className="content-left">
                <img src={img1} alt="" className='img1'/>
                <img src={img2} alt="" className='img2'/>
            </div>
            <div className="content-right">
                <div className="header">
                    <div className="title">Create Your Account</div>
                    <span className='toLogin'>Already have an account? <a href='#' onClick={handleToLogin}>Login</a></span>
                </div>
                <div className="body">
                    <div className="form">
                        <div className="form-item">
                            <label>First name</label>
                            <input type="text" placeholder='Enter your first name'/>
                        </div>
                        <div className="form-item">
                            <label>Last name</label>
                            <input type="text" placeholder='Enter your last name'/>
                        </div>
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
                        <div className="form-item">
                            <label>Confirm password</label>
                            <input type='password' placeholder='Confirm your password'/>
                        </div>
                    </div>

                    <div className='body-btn'>
                        <button onClick={handleToLogin}>Register</button>
                    </div>
                </div>
                <div className="footer">
                    <Footer/>
                </div>
            </div>
        </div>
     );
}
 
export default Register;