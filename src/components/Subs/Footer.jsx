import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";

const Footer = () => {
    return (
        <>
            <div className='footer-bar'>
                <span className='bar-left'></span>
                <div className="footer-text">
                    Or
                </div>
                <span className='bar-right'></span>
            </div>
            <div className="footer-other">
                <button> <BsFacebook />
                    <span>Continue with Facebook</span>
                </button>
                <button> <FcGoogle className='google-icon' />
                    <span>Continue with Google</span>
                </button>
            </div>
        </>
    );
}

export default Footer;