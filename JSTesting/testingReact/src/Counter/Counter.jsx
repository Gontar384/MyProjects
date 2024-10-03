import React, {useState} from 'react';
import styles from './Counter.module.css'
import PageLinks from "../PageLinks/PageLinks.jsx";

function Counter() {

    const [count, setCount] = useState(0);

    const inc = () =>
        setCount(c => c + 1);

    const dec = () =>
        setCount(c => c - 1);

    const res = () =>
        setCount(0);

    return (
        <>
            <body className={styles.counterBody}>
            <div className={styles.container}>
                <p className={styles.display}>{count}</p>
                <button id="button1" onClick={dec} className={styles.button}>Decrement</button>
                <button id="button2" onClick={res} className={styles.button}>Reset</button>
                <button id="button3" onClick={inc} className={styles.button}>Increment</button>
            </div>
            <PageLinks arrow="➡️" link="colorPicker" number={2}/>
            </body>
        </>
    );
}

export default Counter;