import styles from './RegisterLogin.module.css'
import TitleNavbar from "../../ReusableComponents/TitleNavbar.jsx";
import Footer from "../../ReusableComponents/Footer.jsx";
import {Link, useNavigate} from "react-router-dom";
import React, {useState} from "react";
import axios from "axios";

function Register() {

    document.title = "Task Manager | Register";
    const api = "http://localhost:8080/api/auth/register";
    const api2 = "http://localhost:8080/api/auth/register/check-username";
    const [appUser, setAppUser] =
        useState({username: "", password: ""});
    const [repeatPassword, setRepeatPassword] = useState("");
    const [info, setInfo] = useState([]);
    const [isActive, setActive] = useState(false);
    const navigate = useNavigate();
    const [inputType, setInputType] = useState("password");

    const proceed = async () => {
        try {
            const usernameExists = await checkUsername(appUser.username);
            if (usernameExists) {
                setInfo(["Username already exists"]);
                setActive(true);
                return;
            }
            const isValid = checkPassword();
            if (isValid) {
                await saveAppUser();
                setInfo(["Registered successfully!"]);
                setActive(true);
                setTimeout(()=>{
                    navigate("/login");
                },2000)
                console.log("User data sent");
            }else {
                setActive(true);
            }
        } catch (error) {
            console.log(error);
        }
    }

    const saveAppUser = async () => {
        try {
            await axios.post(`${api}`, appUser);
        } catch (error) {
            console.log(error);
        }
    }

    const checkUsername = async (username) => {
        try {
            const response = await axios.get(`${api2}`, {
                params: {username},
            });
            return response.data["exists"];
        } catch (error) {
            console.log("Error with username", error);
        }
    }

    const checkPassword = () => {

        let isValid;
        let pass = false;
        const numbers = "0123456789";
        let isLongEnough = false;
        let includeLowercase = false;
        let includeUppercase = false;
        let includeNumbers = false;

        setInfo([]);

        if (appUser.password.trim().length >= 5) {
            isLongEnough = true;
            if (appUser.password.toUpperCase() !== appUser.password) {
                includeLowercase = true;
            } else {
                setInfo(i => [...i,
                    "Password must include at least one lowercase char"
                ]);
            }
            if (appUser.password.toLowerCase() !== appUser.password) {
                includeUppercase = true;
            } else {
                setInfo(i => [...i,
                    "Password must include at least one uppercase char"
                ]);
            }
            for (let i = 0; i < appUser.password.length; i++) {
                for (let j = 0; j < numbers.length; j++) {
                    if (appUser.password.charAt(i) === numbers.charAt(j)) {
                        includeNumbers = true;
                    }
                }
            }
            if (includeNumbers === false) {
                setInfo(i => [...i,
                    "Password must include at least one number"
                ]);
            }
        } else {
            setInfo(i => [...i,
                "Password must be at least 5 chars long"
            ]);
        }
        isValid = isLongEnough === true && includeLowercase === true &&
            includeUppercase === true && includeNumbers === true;

        if (isValid) {
            if (appUser.password === repeatPassword) {
                pass = true;
            } else {
                setInfo([
                    "Repeated password must be like the first one!"
                ]);
            }
        }

        return pass;
    }

    const toggleInputType = () => {
        setInputType(prevType =>
            (prevType === "password" ? "text" : "password"));
    }


    return (
        <>
            <TitleNavbar/>
            <div className={styles.container}>
                <div className={styles.box}>
                    <h1>Register:</h1>
                    <div className={isActive ? styles.active : styles.inactive}>
                        <ol>
                            {info.map((item, index) => (
                                <li className={styles.item} key={index}>{item}</li>
                            ))}
                        </ol>
                    </div>
                    <input value={appUser.username} onChange={(e) =>
                        setAppUser({...appUser, username: e.target.value})}
                           type="text" placeholder="Enter username" required/>
                    <br/>
                    <input value={appUser.password} onChange={(e) =>
                        setAppUser({...appUser, password: e.target.value})}
                           type={inputType} placeholder="Enter password" required/>
                    <input value={repeatPassword} onChange={(e) =>
                        setRepeatPassword(e.target.value)}
                           type={inputType} placeholder="Repeat password" required/>
                    <button id={styles["show1"]} className={styles.show} onClick={toggleInputType}>Show password</button>
                    <div>
                        <button className={styles.submit} onClick={proceed}>Submit</button>
                        <span className={styles.endBox}>
                            <p>You have an account?</p>
                            <Link className={styles.link} to="/Login">
                                <p>Log in here!</p>
                            </Link>
                        </span>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Register;