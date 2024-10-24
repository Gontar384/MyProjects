import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye, faEyeSlash, faCircleExclamation, faCircleCheck, IconDefinition} from "@fortawesome/free-solid-svg-icons";
import {useEffect, useState} from "react";
import axios, {AxiosResponse} from "axios";

function Form({choose}: { choose: boolean }) {

    interface User {
        email: string,
        username: string,
        password: string
    }

    const [user, setUser] = useState<User>({
        email: "", username: "", password: ""
    })
    const [passwordRep, setPasswordRep] = useState<string>("");

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const [inputType, setInputType] = useState<string>("password")
    const [eyeIcon, setEyeIcon] = useState<IconDefinition>(faEye);
    const toggleInput = (): void => {
        setInputType(inputType === "password" ? "text" : "password");
        setEyeIcon(eyeIcon === faEye ? faEyeSlash : faEye);
    }

    const [icon, setIcon] = useState<IconDefinition | null>(null);

    const url = `${import.meta.env.VITE_BACKEND_URL}api/auth/register/check-email`;
    const url1 = `${import.meta.env.VITE_BACKEND_URL}api/auth/register/check-username`;
    const url2 = `${import.meta.env.VITE_BACKEND_URL}api/auth/register`;

    const [emailInfo, setEmailInfo] = useState<string>("");
    const [emailActive, setEmailActive] = useState<boolean>(false);

    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const checksPassword = (password: string) => {

        const comms = [];

        if (password.trim().length < 5) {
            comms.push("*Password has to be at least 5 chars long");
            return comms;
        }
        if (!/[A-Z]/.test(password)) {
            comms.push("*Password has to include at least one uppercase");
        }
        if (!/[a-z]/.test(password)) {
            comms.push("*Password has to include at least one lowercase");
        }
        if (!/\d/.test(password)) {
            comms.push("*Password has to include at least one number");
        }

        return comms;
    }

    const handleRegister = async (): Promise<void> => {
        if (user.email && user.username && user.password && passwordRep) {
            try {
                if (!validateEmail(user.email)) {
                    return;
                }
                const emailExists = await axios.get(`${url}`, {
                    params: {email: user.email}
                });
                if (emailExists.data["exists"]) {
                    return;
                }
                const usernameExists = await axios.get(`${url1}`, {
                    params: {username: user.username}
                });
                if (usernameExists.data["exists"]) {
                    return;
                }
                if (checksPassword(user.password).length !== 0) {
                    return;
                }
                if (user.password !== passwordRep) {
                    return;
                }
                await axios.post(`${url2}`, user)
                console.log("user registered");
                //navigate
            } catch (error) {
                if (error) {

                }
                console.log("Error during register:", error)
            }
        } else {

        }
    }

    const emailExists =
        async (): Promise<AxiosResponse<{ exists: boolean }>> => {
            return await axios.get(`${url}`, {
                params: {email: user.email}
            });
        };

    useEffect((): void => {
        if (user.email !== "") {
            if (validateEmail(user.email)) {
                const checkEmail = async () => {
                    try {
                        const response = await emailExists();
                        if (response.data.exists) {
                            setIcon(faCircleExclamation);
                            setEmailInfo("Email is already taken.")
                            setEmailActive(true);
                        } else {
                            setIcon(faCircleCheck);
                            setEmailInfo("");
                            setEmailActive(false);
                        }
                    } catch (error) {
                        console.log("Error checking email: ", error)
                    }
                }
                checkEmail().then(() => console.log("done"));
            } else {
                setIcon(faCircleExclamation);
                setEmailActive(true);
                setEmailInfo("It doesn't look like an email...")
            }
        }
    }, [user.email])


    if (choose) {
        return (
            <div className="flex flex-col pt-6 items-center rounded-xl h-64 w-80
                            text-xl sm3:w-72 sm2:80 sm1:w-96 sm1:text-2xl sm1:h-64 mt-6 shadow-2xl gap-6">
                <input className="w-64 sm1:w-80 rounded-md p-1 mb-2" placeholder="E-mail" type="text"
                       value={email} onChange={(e) => setEmail(e.target.value.trim())}/>
                <input className="w-64 sm1:w-80 rounded-md p-1 mb-6" placeholder="Password" type={inputType}
                       value={password} onChange={(e) => setPassword(e.target.value.trim())}/>
                <div className="relative">
                    <button
                        className="shadow-xl h-9 w-20 mt-2 rounded-md hover:bg-white cursor-pointer sm1:w-24">Sign in
                    </button>
                    <button className="absolute left-32 cursor-pointer" onClick={toggleInput}><FontAwesomeIcon
                        icon={eyeIcon}/>
                    </button>
                </div>
            </div>
        )
    } else {
        return (
            <div className="flex flex-col pt-6 items-center rounded-xl h-96 w-80
                            text-xl sm3:w-72 sm2:80 sm1:w-96 sm1:text-2xl sm1:h-96 mt-6 shadow-2xl gap-6">
                <div className="relative">
                    <input className="w-64 sm1:w-80 rounded-md p-1 mb-2 pr-12" placeholder="E-mail" type="text"
                           value={user.email} onChange={(e) => setUser({...user, email: e.target.value.trim()})}/>
                    {icon && <FontAwesomeIcon icon={icon}
                                              className="text-2xl sm1:text-3xl absolute right-3 top-1 opacity-90"/>}
                    <p className={emailActive ? "text-xs sm1:text-sm absolute top-10" : "hidden"}>{emailInfo}</p>
                </div>
                <input className="w-64 sm1:w-80 rounded-md p-1 mb-2" placeholder="Username" type="text"
                       value={user.username} onChange={(e) => setUser({...user, username: e.target.value.trim()})}/>
                <input className="w-64 sm1:w-80 rounded-md p-1 mb-2" placeholder="Password" type={inputType}
                       value={user.password} onChange={(e) => setUser({...user, password: e.target.value.trim()})}/>
                <input className="w-64 sm1:w-80 rounded-md p-1 mb-4" placeholder="Repeat password" type={inputType}
                       value={passwordRep} onChange={(e) => setPasswordRep(e.target.value)}/>
                <div className="relative">
                    <button
                        className="shadow-xl h-9 w-20 mt-2 rounded-md hover:bg-white cursor-pointer sm1:w-24"
                        onClick={handleRegister}>Register
                    </button>
                    <button className="absolute left-32 cursor-pointer" onClick={toggleInput}><FontAwesomeIcon
                        icon={eyeIcon}/>
                    </button>
                </div>
            </div>
        )
    }
}

export default Form