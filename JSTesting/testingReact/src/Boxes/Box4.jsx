import styles from './Box.module.css'
import Box5 from './Box5.jsx';

function Box4() {

    return (
        <div className={styles.box}>
            <h3>Box4</h3>
            <Box5/>
        </div>
    );
}

export default Box4;