import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import {useEffect, useRef, useState} from "react";

function Searching() {

    const [isClicked, setIsClicked] = useState<boolean>(false);
    const componentRef = useRef<HTMLDivElement | null>(null);

    const handleClick = () => {
        setIsClicked((prev) => !prev);
    }

    const handleClickOutside = (event: MouseEvent) => {
        if (componentRef.current && !componentRef.current.contains(event.target as Node)) {
            setIsClicked(false);
        }
    }

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        }
    }, [])

    return (
        <div ref={componentRef} className="flex gap-1">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="text-2xl sm1:text-3xl sm:text-4xl"/>
            <input onClick={handleClick}
                   className={`resize w-60 h-6 sm1:w-70 sm1:h-8 sm:w-64 md:w-11/12 lg:w-11/12 sm:h-10 text-1xl sm1:text-2xl sm:text-3xl
                   border border-solid border-black text-black p-1 transition-all duration-400 ease-in-out 
                   ${isClicked ? 'bg-white rounded-1xl' : 'bg-lime rounded-full'}`}/>
        </div>
    )
}

export default Searching;