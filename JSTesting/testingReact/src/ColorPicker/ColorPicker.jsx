import React, {useState} from 'react';
import styles from './ColorPicker.module.css'
import PageLinks from "../PageLinks/PageLinks.jsx";

function ColorPicker() {

    const [color, setColor] = useState('#000000');

    function handleColorChange(e) {
        setColor(e.target.value);
    }

    return (
        <>
            <body className={styles.colorPickerBody}>
            <div className={styles.container}>
                <div className={styles.display} style={{backgroundColor: color}}>
                    <p className={styles.description}>Selected color: {color}</p>
                </div>
                <br/>
                <label className={styles.label}>Pick a color: </label>
                <input type="color" value={color} onChange={handleColorChange}/>
            </div>
            <PageLinks arrow="⬅️" link="counter" number={1}/>
            </body>
        </>
    );
}

export default ColorPicker;