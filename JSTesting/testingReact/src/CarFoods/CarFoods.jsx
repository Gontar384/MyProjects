import styles from './CarFoods.module.css'
import React, {useState} from "react";
import PageLinks from "../PageLinks/PageLinks.jsx";

function CarFoods() {

    const [carObj, setCar] = useState({
        make: "Volkswagen",
        model: "golf",
        year: 2017
    });

    function handleMakeChange(event) {
        setCar({...carObj, make: event.target.value});
    }

    function handleModelChange(event) {
        setCar({...carObj, model: event.target.value});
    }

    function handleYearChange(event) {
        setCar({...carObj, year: event.target.value});
    }

    const [foods, setFoods] = useState(["Pizza", "Sushi", "Hamburger", "Kebab", "Fries"]);

    function handleAddFoods() {

        const foodInput = document.getElementById("input").value;
        document.getElementById("input").value = "";

        setFoods(f => [...f, foodInput]);
    }

    function handleRemoveFoods(index) {
        setFoods(foods.filter((_, f) => f !== index));
    }

    const [cars, setCars] = useState([]);
    const [carMake, setMake] = useState("");
    const [carModel, setModel] = useState("");
    const [carYear, setYear] = useState(new Date().getFullYear());

    function handleAddCar() {
        const newCar = {make: carMake, model: carModel, year: carYear};
        setCars(c => [...c, newCar]);

        setMake("");
        setModel("");
        setYear(new Date().getFullYear());

    }

    function handleRemoveCar(index) {
        setCars(cars.filter((_, i)=> i !== index));
    }

    function handleSetMake(event) {
        setMake(event.target.value);
    }

    function handleSetModel(event) {
        setModel(event.target.value);
    }

    function handleSetYear(event) {
        setYear(event.target.value);
    }


    return (
        <>
            <body className={styles.carFoodBody}>
            <div className={styles.container}>
                <p className={styles.display}>{carObj.make} {carObj.model} {carObj.year}</p>
                <input className={styles.input} type="text" value={carObj.make} onChange={handleMakeChange}/>
                <input className={styles.input} type="text" value={carObj.model} onChange={handleModelChange}/>
                <input className={styles.input} type="number" value={carObj.year} onChange={handleYearChange}/>
                <br/> <br/>
                <h2>List of foods</h2>
                <ul className={styles.list}>
                    {foods.map((food, index) =>
                        <li key={index} onClick={() => handleRemoveFoods(index)}>
                            {food}
                        </li>
                    )}
                </ul>
                <input id="input" className={styles.input} type="text" placeholder="Enter food"/>
                <button className={styles.button} onClick={handleAddFoods}>Add</button>
                <div className={styles.container1}>
                    <h2>List Of Cars</h2>
                    <ul className={styles.list}>
                        {cars.map((car, index) =>
                            <li key={index} onClick={()=> handleRemoveCar(index)}>{car.make} {car.model} {car.year}</li>)}
                    </ul>
                    <input className={styles.input} type="text" value={carMake} placeholder="Enter car make" onChange={handleSetMake}/>
                    <input className={styles.input} type="text" value={carModel} placeholder="Enter car model" onChange={handleSetModel}/>
                    <input className={styles.input} type="number" value={carYear} onChange={handleSetYear}/> <br/>
                    <button className={styles.button} onClick={handleAddCar}>Add Car</button>
                </div>
            </div>
            <PageLinks arrow="⬅️" link="colorPicker" number={2}/>
            </body>
        </>
    );
}

export default CarFoods;