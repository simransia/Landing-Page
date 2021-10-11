import React from 'react';


function Displaytext() {
    const container = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        textAlign: 'center',
        paddingTop: '4rem',
        fontSize: '3.3vh',

    }

    const button={
        border:'none',
        borderRadius:'10px',
        width:'10rem',
        height:'2rem',
        fontSize:'0.9rem',
        fontWeight:'bold',
        padding:'2px,',
        boxShadow:'2px 2px 5px black , -2px -2px 5px black'
    }
    return (
        <div>
            <div style={container}>
                <h1>WE HELP YOUR BUSINESS</h1>
                <p>Our organisation helps professionals build better businesses.<br />
                    Modern websites, smarter marketing, and powerful e-commerce solutions
                    <br />designed to be as easy and affordable as possible. We can get started today..!!</p>
                    
                    <button style={button}>Learn More</button>
            </div>
           
        </div>
    )
}

export default Displaytext
