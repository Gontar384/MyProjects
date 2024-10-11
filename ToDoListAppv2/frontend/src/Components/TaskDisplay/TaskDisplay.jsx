import styles from './TaskDisplay.module.css'
import TitleNavbar from '../../ReusableComponents/TitleNavbar.jsx'
import Footer from '../../ReusableComponents/Footer.jsx'

function TaskDisplay() {

    document.title = "Task Manager | All Tasks";

    return (
        <>
            <TitleNavbar/>
            <div className={styles.container}>
                <div className={styles.box}>
                    <h1>All tasks to do:</h1>
                    <h4>Added on:</h4>
                    <ol>
                        <li>
                            <div className={styles.dateBox}>
                                <p>26.04</p>
                                <p>15:30</p>
                            </div>
                            <div className={styles.taskBox}>
                                <h2>Title</h2>
                                <p>testtesttest</p> <br/>
                                <h5>on: 26.04.2002</h5>
                            </div>
                            <div className={styles.doneBox}>
                                <input type="checkbox"/>
                                <button>Delete</button>
                            </div>
                        </li>
                    </ol>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default TaskDisplay;
