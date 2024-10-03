import styles from './Box.module.css'
import Box4 from './Box4.jsx';
import {UsernameContext} from "./Box1.jsx";
import {useContext} from "react";

function Box3() {

    const username = useContext(UsernameContext);

    return (
        <div className={styles.box}>
            <h3>Box3</h3>
            <p>Hello again {username}</p>
            <Box4/>
        </div>
    );
}

export default Box3;