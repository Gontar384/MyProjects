import styles from './Box.module.css'
import Box3 from './Box3'

function Box2() {

    return (
        <div className={styles.box}>
            <h3>Box2</h3>
            <Box3/>
        </div>
    );
}

export default Box2;