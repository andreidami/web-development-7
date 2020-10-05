import React from "react"

const BirthdayCard = (props) => {

    
    return <div style={{
        width: "120px",
        height: "200px",
        backgroundColor: props.gender  === "male" ? "blue" : "red",

    }}><h1>Happy  {props.age}th birthday {props.name}</h1></div>
}

export default  BirthdayCard;