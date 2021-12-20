import React from 'react'
import Welcome from '../components/Welcome'
import matrix from "../assets/morpheusreal.png"
import Button from '../components/Button'

const About = () => {
    const handleClick = () => {
        alert("about sayfasına yönlendiriliyorusunuz")
    }
    return (
        <div>
            <h1>About</h1>
            <Welcome name="Header" img={matrix}/>
            <Button name="about" click={handleClick} color="white" bgColor="red" />
        </div>
    )
}

export default About
