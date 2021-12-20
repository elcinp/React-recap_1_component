import React from 'react'
import Welcome from '../components/Welcome'
import pills from '../assets/blueredpills1.png'

const Header = () => {
    return (
        <div>
            <h1>Header</h1>
            <Welcome name="Header" img={pills}/>
        </div>
    )
}

export default Header
