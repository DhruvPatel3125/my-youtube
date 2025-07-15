import React from 'react'
import Button from './Button'

const List = ["All","Gaming","Song","Live","Soccer","Cricket","Cooking","Valentines","All","Gaming","Song","Live","Soccer"]
const ButtonList = () => {
  return (
    <div className='flex overflow-x-auto'>
     {List.map((item,index)=>(
      <Button key={index} name={item}/>
     ))}
    </div>
  )
}

export default ButtonList