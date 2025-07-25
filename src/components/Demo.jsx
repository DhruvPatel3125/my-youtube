import React, { useState } from 'react'

const Demo = () => {
    const [text,setText] = useState("");
    console.log("rendring....")
  return (
    <div className='m-4 p-2 w-96 h-96 border border-black '>
        <div>
            <input type="text" value={text} onChange={(e)=>{
                setText(e.target.value)
            }} />
        </div>
    </div>
  )
}

export default Demo