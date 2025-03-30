import React, { useContext } from 'react';
import UserContext from '../context/Usercontext';

function Profile() {
    const { user } = useContext(UserContext);
    
    console.log("User in Profile:", user); // ✅ Debugging log

    if (!user) {
        return <p>No user logged in</p>; // ✅ Conditional rendering using 'if'
    }

    return (
        <div>
            <h1>Profile</h1>
            <p>Username: {user.username}</p>
            <p>Password: {user.password}</p> {/* Be careful displaying passwords */}
        </div>
    );
}

export default Profile;
