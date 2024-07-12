import React, { useState } from 'react'

const UserAuthentication = () => {
    let[isLoggedIn,setisLoggedIn]=useState(false)

  return (
    <div>
        <p>{isLoggedIn?"Welcome To Our Site !" : "Please Login..."}</p>
        <button onClick={()=>setisLoggedIn(!isLoggedIn)}>
            {isLoggedIn ? "LogOut" : "Login"}
        </button>
    </div>
  )
}

export default UserAuthentication