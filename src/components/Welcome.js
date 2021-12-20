import React from 'react'

const Welcome = (props) => {
    const {name,img} = props //Destructuring
    console.log(props);
    return(
        <div>
            Welcome to {name} page
            <img src={img} alt="" style={{width:"400px" ,height:"400px"}}/>
        </div>
    )
}

export default Welcome
