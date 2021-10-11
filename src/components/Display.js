import React from 'react';
import Displaytext from './Displaytext.js';
import Bgimage from '../image/background2.jpg'

function Display() {

    const display = {
        clear:'both',
        background: `url(${Bgimage}) `,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#1e90ff',
        backgroundBlendMode:'screen',
        height: '75vh',
        
    }



    return (
        <div style={display}>
            <Displaytext />
        </div>
    )
}

export default Display
