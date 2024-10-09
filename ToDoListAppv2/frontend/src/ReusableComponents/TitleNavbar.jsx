import styles from './ReusableComponents.module.css'
import {Link, useNavigate} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faRightFromBracket, faClipboard, faFileCirclePlus} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";

function TitleNavbar() {

    const [isActive, setActive] = useState(false);
    const [info, setInfo] = useState("");
    const navigate = useNavigate()

    const logout = () => {
        if (localStorage.getItem('token')) {
            localStorage.removeItem('token');
            setInfo("Logging out...");
            setActive(true);
            setTimeout(() => {
                navigate('/login')
            }, 2000)
        }
        return null;
    };

    return (
        <>
            <h1 className={styles.title}>Task Manager</h1>
            <div className={isActive ? styles.active : styles.inactive}>
                <p className={styles.item}>{info}</p>
            </div>
            <nav className={styles.navbar}>
                <Link className={styles.link} to={"/taskmanager/add"}>
                    <FontAwesomeIcon icon={faFileCirclePlus} size="3x"/>
                </Link>
                <Link className={styles.link} to={"/taskmanager/showall"}>
                    <FontAwesomeIcon icon={faClipboard} size="3x"/>
                </Link>
                <button className={styles.logout} onClick={logout}>
                    <FontAwesomeIcon icon={faRightFromBracket} size="3x"/>
                </button>
            </nav>
        </>
    );
}

export default TitleNavbar;