import React, {useContext} from 'react'
import UserContext from '../context/UserContext'
function Profile() {
    const {user} = useContext(UserContext)

    if (!user) return <div>Please Login</div>
      
    return <div>Welcome {user.username}</div>
  return (
    <div>profile</div>
  )
}

export default Profile