import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";

function Form({choose}: { choose: boolean }) {

    interface User {
        email: string,
        username: string,
        password: string
    }

    const [inputType, setInputType] = useState<string>("password")
    const toggleInput = (): void => {
        setInputType(inputType === "password" ? "text" : "password");
    }

    const [user, setUser] = useState<User>({
        email: "", username: "", password: ""
    })

    if (choose) {
        return (
            <div className="flex flex-col justify-center items-center rounded-xl h-44 w-72
                            text-xl sm1:w-80 sm1:text-2xl sm1:h-52 mt-6 shadow-2xl gap-2">
                <input className="w-64 rounded-md p-1 mb-2" placeholder="E-mail" type="text"
                       value={user.email} onChange={(e) => setUser({...user, email: e.target.value.trim()})}/>
                <input className="w-64 rounded-md p-1" placeholder="Password" type={inputType}
                       value={user.password} onChange={(e) => setUser({...user, password: e.target.value.trim()})}/>
                <div className="relative">
                    <button
                        className="shadow-xl h-9 w-20 mt-2 rounded-md hover:bg-white cursor-pointer sm1:w-24">Sign in
                    </button>
                    <button className="absolute left-32 cursor-pointer" onClick={toggleInput}><FontAwesomeIcon
                        icon={faEye}/>
                    </button>
                </div>
            </div>
        )
    } else {
        return (
            <div className="flex flex-col justify-center items-center rounded-xl h-64 w-72
                            text-xl sm1:w-80 sm1:text-2xl sm1:h-72 mt-6 shadow-2xl gap-2">
                <input className="w-64 rounded-md p-1 mb-2" placeholder="E-mail" type="text"
                       value={user.email} onChange={(e) => setUser({...user, email: e.target.value.trim()})}/>
                <input className="w-64 rounded-md p-1 mb-2" placeholder="Username" type="text"
                       value={user.username} onChange={(e) => setUser({...user, username: e.target.value.trim()})}/>
                <input className="w-64 rounded-md p-1" placeholder="Password" type={inputType}
                       value={user.password} onChange={(e) => setUser({...user, password: e.target.value.trim()})}/>
                <input className="w-64 rounded-md p-1" placeholder="Repeat password" type={inputType}/>
                <div className="relative">
                    <button
                        className="shadow-xl h-9 w-20 mt-2 rounded-md hover:bg-white cursor-pointer sm1:w-24">Register
                    </button>
                    <button className="absolute left-32 cursor-pointer" onClick={toggleInput}><FontAwesomeIcon
                        icon={faEye} className=""/>
                    </button>
                </div>
            </div>
        )
    }
}

export default Form