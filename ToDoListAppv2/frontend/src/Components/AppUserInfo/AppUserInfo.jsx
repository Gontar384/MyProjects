import styles from './AppUserInfo.module.css'
import TitleNavbar from "../../ReusableComponents/TitleNavbar.jsx";
import Footer from "../../ReusableComponents/Footer.jsx";
import api from '../../Components/AxiosConfig.jsx'
import React, {useState, useEffect} from 'react'

function AppUserInfo() {

    document.title = "Task Manager | User";
    const url = "http://localhost:8080/api/user-info";
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        fetchInfo().then(()=> console.log("Data fetched successfully"))
    },[])

    const fetchInfo = async () => {
        try {
            const {data} = await api.get(`${url}`);
            setUsername(data.username);
        } catch (error) {
            console.error("Error fetching info:", error);
        }
    }

    return (
        <>
            <TitleNavbar/>
            <div className={styles.container}>
                <div className={styles.box}>
                    <p>Username: {username}</p>
                    <p>Tasks added: 15</p>
                    <div className={styles.form}>
                    <input placeholder="Old Password"/>
                    <input placeholder="New Password"/>
                    <button>Change password</button>
                    </div>
                    <div className={styles.deleteBox}>
                        <h5>Double click to delete account</h5>
                    <button>Delete</button>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default AppUserInfo;