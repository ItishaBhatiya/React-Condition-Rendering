import React, { useState } from 'react'

const ToggleMessage = () => {
    let[isToggled,setisToggled]=useState(false)

  return (
    <div>
        <p>{isToggled?"Message is Visible" : "Message is Hidden"}</p>
        <button onClick={()=>setisToggled(!isToggled)}>
            {isToggled?"Message is Hidden" : "Message is Visible"}
        </button>
    </div>
  )
}

export default ToggleMessage