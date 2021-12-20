import React from 'react'

const btnStyle={
    
    borderRadius:"15px",
    fontSize:"20px",
}
const divStyle = {
    display:"flex",
    alignItem : "center",
    justifyContent:"center",
    padding:"10px",
}

const Button = (props) => {
    const {handleClick,name,color,bgColor} = props

    return (
        <div style={divStyle}>
            <button style={{...btnStyle,color:color,background:bgColor}} onClick={handleClick}>{name}</button>
        </div>
    )
}

export default Button
