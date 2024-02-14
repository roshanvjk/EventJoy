import '../Pages/Css/login.css'
import { useState } from 'react';
import log_img from '../assets/Images/bd.jpg'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../features/userSlice.js';
import axios from 'axios';

function Login() {
    const [action, setAction] = useState("Sign In");
    // const [role, setRole] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const navigate=useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(""); 
    
        if (action === "Sign In") {
            if (!email || !password) {
                setError("Please fill in all fields.");
                return;
            }
            console.log("Signing in...");
            if (email === 'roshan@admin' && password === 'admin123') {
                const data = {
                    email: email,
                    password: password,
                    userRole : "ADMIN"
                }
                dispatch(login(data));
                navigate("/dash");
                return;
            }
            try {
                const response = await axios.post('http://localhost:8080/api/v1/auth/authenticate', {
                    email,
                    password,
                    role : "USER"
                });
    
                if (response.status === 200) {
                    const { token } = response.data;
                    localStorage.setItem('token', token);
                    dispatch(login({email: email,role : "user"})); // Dispatch login action with user email
                    navigate("/home");
                }
            } catch (error) {
                setError('Invalid email or password.');
                console.error('Error signing in:', error);
            }
        } else if (action === "Sign Up") {
            if (!name || !email || !mobileNumber || !password || !confirmPassword) {
                setError('All fields are required');
                return;
            }
            if (password !== confirmPassword) {
                setError('Passwords do not match');
                return;
            }
    
            try {
                const response = await axios.post('http://localhost:8080/api/v1/auth/register', {
                    name,
                    email,
                    mobileNumber,
                    password,
                    userRole : "user"
                });
    
                if (response.status === 200) {
                    navigate('/home');
                    alert("Registration Successful!!");
                }
            } catch (error) {
                if (error.response) {
                    setError(error.response.data.message);
                } else {
                    setError('An error occurred while registering user.'); 
                    console.error('Error registering user:', error);
                }
            }
            setAction("Sign In");
        }
    
    
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setMobileNumber("");
        setName("");
    };
    
    

    return (
        <div className='login_back'>
            <div className="img_container">
                <img src={log_img} alt="Login" />
            </div>
            <div className='container'>
                <div className="head">
                    <div className='text'>Welcome, Buddy!!!</div>
                    <div className='text'>{action}</div>
                    <div className="underline"></div>
                </div>
                <form className='inputs' onSubmit={handleSubmit}>
                    {action === "Sign Up" &&
                        <div className="input">
                            <input type="text" placeholder='Username' value={name} onChange={(e) => setName(e.target.value)}/>
                        </div>
                    }
                    <div className="input">
                        <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    {action === "Sign Up" &&
                        <div className="input">
                            <input type="text" placeholder='Mobile Number' value={mobileNumber} onChange={(e)=> setMobileNumber(e.target.value)} />
                        </div>
                    }
                    <div className="input">
                        <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    {action === "Sign Up" &&
                        <div className="input">
                            <input type="password" placeholder='Confirm Password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                        </div>
                    }
                    <div className="error">{error}</div>
                {action === "Sign In" &&
                    <div className="forgotpass">Forgot password?<a href='#'>Click here!</a></div>
                }
                    <div className="subcont">
                        <input type='submit' value='SignUp' className={action === "Sign In" ? "submit gray" : "submit"} onClick={() => { setAction("Sign Up") }}/>
                        <input type='submit' value='SignIn' className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => { setAction("Sign In") }}/>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;