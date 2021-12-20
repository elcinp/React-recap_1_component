import React from 'react'

const Welcome = (props) => {
    const {name,img} = props //Destructuring
    console.log(props);
    return(
        <div>
            Welcome to {name} page
            <img src={img} alt="" width={{width:'100px' ,height:'100px'}}/>
        </div>
    )
}

export default Welcome
