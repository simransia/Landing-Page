import React from 'react'

function Contact(props) {

    const contact={
        width:'20vw',
        height:'30vh',
        textAlign:'center',
    }
  

    return (
        <div style={contact}>
            <h2>{props.heading}</h2>
            <p >{props.description}</p>
        </div>
    )
}

export default Contact
