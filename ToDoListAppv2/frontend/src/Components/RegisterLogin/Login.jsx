import styles from './RegisterLogin.module.css'
import TitleNavbar from "../../ReusableComponents/TitleNavbar.jsx";
import Footer from "../../ReusableComponents/Footer.jsx";
import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";


function Login() {

    document.title = "Login | Task Manager";
    const api = "http://localhost:8080/api/auth/login";
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [info, setInfo] = useState([]);
    const [isActive, setActive] = useState(false);

    const login = async (username, password) => {
        try {
            const response = await axios.post(`${api}`, {username, password});
            if (response.data.token) {
                localStorage.setItem('token', response.data.token);
                setInfo(["Logged in successfully!"]);
                setActive(true);
                setTimeout(() => {
                    navigate("/taskmanager/showall");
                }, 2000)
            }
        } catch (error) {
            console.log(error);
            if (error.response) {
                setInfo(["Wrong username or password"]);
                setActive(true);
            } else {
                setInfo(["Login failed, please try again"]);
                setActive(true);
            }
        }
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await login(username, password);
        } catch (error) {
            console.log("Login failed", error);
        }
    }

    return (
        <>
            <TitleNavbar/>
            <div className={styles.container}>
                <div className={styles.box}>
                    <h1>Log in:</h1>
                    <div className={isActive ? styles.active : styles.inactive}>
                        <ol>
                            {info.map((item, index) => (
                                <li className={styles.item} key={index}>{item}</li>
                            ))}
                        </ol>
                    </div>
                    <input value={username} onChange={(e) =>
                        setUsername(e.target.value)}
                           type="text" placeholder="Enter username" required/>
                    <input value={password} onChange={(e) =>
                        setPassword(e.target.value)}
                           type="password" placeholder="Enter password" required/>
                    <div>
                        <button onClick={handleLogin}>Submit</button>
                        <span className={styles.endBox}>
                            <p>You don't have an account?</p>
                            <Link className={styles.link} to="/register">
                                <p>Register here!</p>
                            </Link>
                        </span>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}


export default Login