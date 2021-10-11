import React from 'react'

function Image(props) {

    const img={
        clear:'both',
        width:'8rem',
        height:'6rem',
        borderRadius:'50%',
        boxShadow:'2px 2px 2px blue'

    }

    return (
        <div>
            <img style={img} src={props.image}/>
        </div>
    )
}

export default Image
