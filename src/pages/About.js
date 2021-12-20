import React from 'react'
import Welcome from '../components/Welcome'
import matrix from "../assets/morpheusreal.png"

const About = () => {
    return (
        <div>
            <h1>About</h1>
            <Welcome name="Header" img={matrix}/>
        </div>
    )
}

export default About
