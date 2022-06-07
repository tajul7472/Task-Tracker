import React from 'react'
import Button from './Button'



const Header = ({tittle}) => {
    const onClick = ()=>{
        console.log('Click')
    }
  return (
    <header className='header'>
        <h1>{tittle}</h1>
        <Button text="Add" color="green" onClick={onClick}/>
        
    </header>
  )
}

export default Header