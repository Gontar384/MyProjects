import Counter from "./Counter/Counter.jsx";
import ColorPicker from "./ColorPicker/ColorPicker.jsx";
import CarFoods from "./CarFoods/CarFoods.jsx";
import ToDoList from "./ToDoList/ToDoList.jsx";
import Clock from './Clock/Clock.jsx'
import Box1 from "./Boxes/Box1.jsx";
import Stopwatch from "./Stopwatch/Stopwatch.jsx";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/counter" element={<Counter/>}/>
                <Route exact path="/colorpicker" element={<ColorPicker/>}/>
                <Route exact path="/carfoods" element={<CarFoods/>}/>
                <Route exact path="/todolist" element={<ToDoList/>}/>
                <Route exact path="/clock" element={<Clock/>}/>
                <Route exact path="/box" element={<Box1/>}/>
                <Route exact path="/stopwatch" element={<Stopwatch/>}/>
            </Routes>
        </Router>
    );
}

export default App
