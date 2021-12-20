import React from 'react'
import Welcome from '../components/Welcome'
import pills from '../assets/blueredpills1.png'
import Button from '../components/Button'

const Header = () => {
    const handleClick = () => {
        alert("header sayfasına yönlendiriliyorusunuz")
    }
    return (
        <div>
            <h1>Header</h1>
            <Welcome name="Header" img={pills}/>
            <Button name="header" handleClick={handleClick} color="white" bgColor="black"/>
        </div>
    )
}

export default Header
