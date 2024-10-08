import axios from "axios";
import { useState, useContext } from 'react';
import { AuthContext } from "../ContextAPI/AuthContext";
import {useNavigate} from "react-router-dom";
import "./Login.css";
import Footer from "./Footer";


function Login() {

  const {login, logOut, isLoggedIn} = useContext(AuthContext);

  const [formState, setFormState] = useState({
    user: "",
    email: "",
    password: "",
  })

  const navigate = useNavigate();


  const handleChange = (e) =>{
    const value = e.target.value;
    setFormState({
      ...formState,
      [e.target.name]: value
    })
  }

  const handleSubmit = async(e) =>{
    e.preventDefault()
    try {
      let res = await axios.post("https://reqres.in/api/login",formState);
      login(formState.user)
      console.log(formState);
      alert("User LoggedIn Successfully");
      navigate('/');
      console.log(res);
    } catch (error) {
      console.log(`error While Login ${error}`);;
    }
  }



  return (
    <>
      <div className='login-wrapper'>
        <div className="login">
          <div className="banner">
            <img src="https://www.bluefly.com/cdn/shop/files/5_SHIPPING_PROMO_1200X200_52ec07bc-4e53-4782-982c-5d4707f1b89b.png?v=1725371398&width=1200" alt="$5 Shipping banner" />
          </div>
          <div className="form">
            <h2>LOGIN</h2>
            <form onSubmit={handleSubmit}>
              <input type="text" name="user" value={formState.user} className="user" placeholder="USERNAME" onChange={handleChange} required />
              <input type="email" name="email" className="email" value={formState.email} placeholder='EMAIL' onChange={handleChange} required />
              <input type="password" name="password" className="password" value={formState.password} placeholder='PASSWORD' onChange={handleChange} required />
              {/* <input type="submit" value="SIGN IN" className="submit-btn" /> */}
              <button type="submit">SIGN IN</button>
            </form>
            {isLoggedIn.login ? (
              <button onClick={()=>logOut()} className="logout-btn">LOGOUT</button>
            ): (
              <div className="login-information">
                <p>Im Using Reqres.in for Login</p>
                <p>Enter Below Details to Login</p>
                <p>Email: <b>eve.holt@reqres.in</b></p>
                <p>Password: <b>cityslicka</b></p>
              </div>
            )}
            <div className="createUser">
              <p>Dont have Account?</p>
              <button> CREATE USER</button>
            </div>
            
          </div>
        </div>
      </div>
        <Footer />
    </>
  )
}

export default Login
