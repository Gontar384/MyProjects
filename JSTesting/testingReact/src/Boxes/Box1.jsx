import React, {useState, createContext} from 'react';
import styles from './Box.module.css'
import Box2 from './Box2.jsx';

export const UsernameContext = createContext("");

function Box1() {

    const [username] = useState("Gontar");

    return (
        <div className={styles.box}>
            <h3>Box1</h3>
            <p>Welcome {username}</p>
            <UsernameContext.Provider value={username}>
                <Box2 username={username}/>
            </UsernameContext.Provider>
        </div>
    );
}

export default Box1