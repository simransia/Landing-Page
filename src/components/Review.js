import React from 'react';
import lady from '../image/girl.jpg';
import Image from './Image.js';
import ReviewText from './ReviewText.js';

function Review() {

    const message =`Lorem, ipsum dolor sit amet
    consectetur adipisicing elit.
    Quidem nobis nisi sit animi
    svoluptas veniam mollitia`;

    const review={
        clear:'both',
        height:'200px',
        width:'80%',
        margin:'auto',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    }
    const symbol={
        fontSize:'3rem',
        
    }

    return (
        <div style={review}>
            <p style={symbol}> &#60;  </p>
            <Image image={lady}/>
            <ReviewText name="JON DEO"  message={message}/>
        <p style={symbol}>  &#62; </p>
        </div>
    )
}

export default Review
