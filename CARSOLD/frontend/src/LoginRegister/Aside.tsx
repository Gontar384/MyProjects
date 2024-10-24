import {faCheck} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function Aside() {
    return (
        <div className="w-11/12 text-md mb-8 mt-8 sm:mt-4 sm:w-2/3 sm1:text-xl sm2:w-10/12 sm1:w-10/12 lg:w-5/12 bg-lowLime
                        p-3 rounded-xl md:mt-0 flex flex-col justify-center
                        bg-[url('src/assets/carBackground.jpg')] bg-center bg-cover">
            <p className="text-center pb-3 text-2xl font-bold">Why to use?</p>
            <p><FontAwesomeIcon icon={faCheck}/>CAR$OLD is a site created with passion,
                dedication and a dream.</p>
            <p><FontAwesomeIcon icon={faCheck}/>Our services are free to use.</p>
            <p><FontAwesomeIcon icon={faCheck}/>Putting your car for sell is easy and fast.</p>
            <p><FontAwesomeIcon icon={faCheck}/>Write and meet new people.</p>
            <p><FontAwesomeIcon icon={faCheck}/>Test some new features, like adding comments to auctions.</p>
            <p className="mb-72"><FontAwesomeIcon icon={faCheck}/>Register and check how simple it is!</p>
        </div>
    )
}

export default Aside;