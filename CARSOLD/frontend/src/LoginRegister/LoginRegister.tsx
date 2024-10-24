import Aside from "./Aside.tsx";
import Form from "./Form.tsx";
import Headings from "./Headings.tsx";
import {useState} from "react";

function LoginRegister() {

    const [choose, setChoose] = useState<boolean>(true);

    return (
        <div className="flex flex-col justify-center items-center pt-12
                        md:items-start md:flex-row sm:pt-32 sm:gap-4 md:gap-12 lg:gap-28">
            <div className="flex flex-col justify-center items-center bg-lime pt-8 pb-24
                            sm3:px-1 sm2:px-6 sm1:px-8 rounded-xl">
                <Headings setChoose={setChoose}/>
                <Form choose={choose}/>
            </div>
            <Aside/>
        </div>
    )
}

export default LoginRegister;