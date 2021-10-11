import React from 'react';
import aboutImage from '../image/background.jpg';

function About() {
     
    const about = {
        backgroundColor:'#DCDCDC',
        height: '250px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    }
    const aboutUs = {
        width: '16rem',
        height: '10rem',
        marginBottom:'15px'
    }
    const image={
        width: '15rem',
        height: '10rem',
        marginTop:'15px'
    }

    return (
       
        <div style={about }>
            <div style={aboutUs} >
                <h2>ABOUT US</h2>
                <p> Lorem, ipsum dolor sit amet
                    consectetur adipisicing elit.
                    Quidem nobis nisi sit animi
                    svoluptas veniam mollitia
                    consectetur adipisicing elit.</p>
            </div>
            <img style={image} src={aboutImage} />
        </div>
        
    )
}

export default About
