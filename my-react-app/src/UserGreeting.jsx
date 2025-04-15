function UserGreeting({name="Guest", isLoggedIn=false}) {

    return (
        <>
        <p>
            {isLoggedIn ? "Welcome "+name : "Please Log in first "+name}
        </p>
        
        </>
    )
}

export default UserGreeting;

/*
demonstrates conditional rendering
*/