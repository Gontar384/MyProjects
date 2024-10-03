import React, {useContext} from "react";
import {UsernameContext} from "./Box1.jsx";
import styles from './Box.module.css'


function Box5() {

    const username = useContext(UsernameContext);

    return (
        <div className={styles.box}>
            <h3>Box5</h3>
            <p>Bye {username}</p>
        </div>
    );
}

export default Box5;