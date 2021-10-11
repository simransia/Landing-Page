import React from 'react';
import Brand from '../image/main.png'
function Header() {
    const header = {
        height: '10vh',
        width: '100%',
    }
    const logo = {
        float: 'left',
        width: '4rem',
        height: '4rem',
        marginLeft: '3rem',

    }
    const links = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '50% ',
        float: 'right',
        fontSize: '1rem',
    }

    return (
        <div style={header}>
            <div >
                <img style={logo} src={Brand} />
            </div>

            <div style={links}>
                <p>Home</p>
                <p>Product</p>
                <p>Pricing</p>
                <p>Contact Us</p>

            </div>

        </div>
    )
}

export default Header;
