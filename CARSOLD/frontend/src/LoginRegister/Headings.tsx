import React from "react";

function Headings({setChoose}:
                      { setChoose: React.Dispatch<React.SetStateAction<boolean>>; }) {
    return (
        <div className="text-xl w-80 h-10 sm1:w-96 sm1:text-2xl flex flex-row justify-center divide-x
                        divide-black shadow ">
            <button className="py-1 px-4 w-40 sm1:w-48 text-center hover:bg-white hover:rounded-l-xl
                              hover:rounded-bl-xl hover:cursor-pointer" onClick={() => setChoose(true)}>Login
            </button>
            <button className="py-1 px-4 w-40 sm1:w-48 text-center hover:bg-white hover:rounded-r-xl
                              hover:rounded-br-xl hover:cursor-pointer" onClick={() => setChoose(false)}>Register
            </button>
        </div>
    )
}

export default Headings;