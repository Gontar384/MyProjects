import NavBar from "../NavBar/NavBar.tsx";
// import {useEffect, useState} from "react";

function Home() {

    // const [animation, setAnimation] = useState<string>('animate-slideIn');
    //
    // useEffect(() => {
    //     const timer = setTimeout(()=>{
    //         setAnimation('animate-slideOut');
    //     },3000);
    //     return () => clearTimeout(timer);
    // },[]);

    return (
        <>
            <NavBar/>
        </>
    )
}

export default Home;