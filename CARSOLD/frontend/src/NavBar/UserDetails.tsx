function UserDetails() {

    const test:boolean = true;

    if (test){
        return (
            <div className="text-md sm1:text-xl lg:text-2xl truncate cursor-pointer">
                <p>Log in | Register</p>
            </div>
        )
    }else
    return (
        <div className="truncate cursor-pointer">
            <p className="text-xl sm1:text-2xl lg:text-3xl">Gontar</p>
            <p className="text-sm sm1:text-md lg:text-xl">Followed 2⭐</p>
        </div>
    )
}

export default UserDetails;