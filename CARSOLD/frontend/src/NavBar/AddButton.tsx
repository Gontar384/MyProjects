import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";

function AddButton() {
    return (
        <div className="flex flex-row gap-2 border-2 border-solid border-black cursor-pointer
                        p-1 hover:bg-white hover:rounded-md">
            <FontAwesomeIcon icon={faPlus} className="text-2xl sm1:text-3xl lg:text-3xl"/>
            <p className="text-md sm1:text-xl lg:text-2xl truncate">Add Offer</p>
        </div>
    )
}

export default AddButton;