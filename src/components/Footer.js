import React from 'react'

function Footer() {

    const footer={
            marginTop:'2rem',
            height:"45px",
            backgroundColor:"black",
            color:"white",
            textAlign:"center",
            paddingTop:"0.5px"
    }

    return (
        <div style={footer}>
            <p>@ Copyright</p>
        </div>
    )
}

export default Footer
