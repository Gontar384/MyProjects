import Logo from "./Logo.tsx";
import Searching from "./Searching.tsx";
import UserDetails from "./UserDetails.tsx";
import AddButton from "./AddButton.tsx";

function NavBar() {

    return (
        <div className="flex items-center justify-evenly flex-col gap-4 w-full
             font-sans border-b-2 border-black bg-lime p-1 sm:fixed sm:flex-row sm:h-20">
            <Logo/>
            <Searching/>
            <div className="flex flex-row items-center sm:hidden lg:flex gap-10">
                <UserDetails/>
                <AddButton/>
            </div>
        </div>
    )
}

export default NavBar