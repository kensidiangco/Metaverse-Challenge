import { useMoralis } from 'react-moralis'

function changeUsername() {
    const {setUserData, userError, userIsUpdating, user} = useMoralis()
    
    const setUsername = () => {
        const username = prompt(
            `Enter you new Username (Current: ${user.getUsername()})`)  

        if(!username) return;
        
        setUserData({
            username,
        }) 
    }

    return (
        <div className="text-sm absolute top-5 right-5">
            <button 
                disabled={userIsUpdating}
                className="hover:text-pink-700"
                onClick={setUsername}
            >
                Change your Username
            </button>
        </div>
    )
}

export default changeUsername
