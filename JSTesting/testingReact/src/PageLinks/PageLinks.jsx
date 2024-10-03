import styles from './PageLinks.module.css';
import {Link} from 'react-router-dom';

function PageLinks(props) {
    return (
        <div className={styles.container}>
            <Link to={`http://localhost:5174/${props.link}`}>
                <button className={styles.button}>{props.number}{props.arrow}</button>
            </Link>
        </div>
    );
}

export default PageLinks;