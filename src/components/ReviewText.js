import React from 'react'

function ReviewText(props) {

    const message={
        clear:'both',
        width:'300px',
        height:'50px',
        marginBottom:'6rem'
    
    }
    return (
        <div style={message}>
            <h3> {props.name} </h3>
            <p>{props.message}</p>
        </div>
    )
}

export default ReviewText
