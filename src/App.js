import logo from './logo.svg';
import React from 'react';
import {useState} from 'react';
import './styles/scss/ex_scss.css';

function App() {
    const [loginMenu, setLoginMenu]=useState(true);
    const [username, setUserName]=useState("");
    const [signedIn, setSignedIn]=useState("");
    const [dashboard, setDashboard]=useState(false)
    const [password, setPassword]=useState("")
    const [phone, setPhone]=useState("")
    const [email, setEmail]=useState("")
    const [firstName, setFirstName]=useState("")
    const [lastName, setLastName]=useState("")
    function  dashOn(name, password) {
        if(name === "admin" && password === "admin"){
            setDashboard(true);
        }else{
            alert ("Password anda salah")
        }
    }

    if(loginMenu === true){
        return(
            <div className="Menus">
                <div className="btnMenu">
                    <button  onClick={() =>setLoginMenu(false)}>Login</button>
                    <button  onClick={() =>setLoginMenu(true)}>sign up</button>
                </div>
                <div className="heading">
                    <h1>SIGN UP FOR FREE</h1>
                </div>
                
                <div className="form">
                    <div className="NameInput">
                        <input placeholder="First Name*"  type="text" value={username} onChange={(e) => setUserName(e.target.value)}/>
                        <input placeholder="Last Name*"  type="text" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                    </div>
                    <input placeholder="Your Email*"  type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <input placeholder="Your Phone*"  type="number" value={phone} onChange={(e) => setPhone(e.target.value)}/>
                    <input placeholder="Password*"  type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <button type="button" className="btnSubmit" >SIGN UP</button>
                </div>
            </div>
            
        )
    } else{
            if(dashboard === true ){
                return(
                    <div>
                        <h1>DASHBOARD NICH</h1>
                        <button type="button" className="btnSubmit" onClick={() => setDashboard(false)}>LOG OUT</button>
                    </div>
                );
            }
            else{
                return(
                    <div className="Menus">
                        <div className="btnMenu">
                            <button onClick={() =>setLoginMenu(false)}>Login</button>
                            <button onClick={() =>setLoginMenu(true)}>sign up</button>
                        </div>
                        <h1>LOG IN</h1>
                        <div>
                            <input placeholder="Username*"  type="text" value={username} onChange={(e) => setUserName(e.target.value)}/>
                            <input placeholder="Password*"  type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                            <button type="button" className="btnSubmit" onClick={() => {dashOn(username, password)}}>LOG IN</button>
                        </div>
                    </div>
                )
            }
        }
}

export default App;
