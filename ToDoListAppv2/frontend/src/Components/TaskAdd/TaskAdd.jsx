import styles from './TaskAdd.module.css'
import TitleNavbar from '../../ReusableComponents/TitleNavbar.jsx'
import Footer from '../../ReusableComponents/Footer.jsx'

function TaskAdd() {

    document.title = "Task Manager";

    return (
        <>
            <TitleNavbar/>
            <div className={styles.container}>
                <div className={styles.box}>
                    <h1>Add task:</h1>
                    <input type="text" placeholder="Name"/> <br/>
                    <textarea placeholder="Description" rows="3"/> <br/>
                    <input type="date"/>
                    <div className={styles.buttonsContainer}>
                        <button>Submit</button>
                        <button>Display tasks</button>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default TaskAdd;
