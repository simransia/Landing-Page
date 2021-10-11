
import React from 'react';


function Product(props) {

    const product={
        width:'20vw',
        height:'55vh',
        textAlign:'center',

    }
    const image={
         width:'15vw',
         height:'20vh',
         borderRadius:'50%',
         boxShadow:'2px 2px 2px blue',
    }
    return (
        <div style={product}>
            <img style={image} src={props.picture}/>
            <h2>{props.title}</h2>
            <p> Lorem, ipsum dolor sit amet
        consectetur adipisicing elit.</p>
        </div>
    )
}

export default Product
