import React from 'react';
import Product from './Product.js';
import seo from '../image/seo2.png';
import branding from '../image/brand.jpg';
import logo from '../image/logo2.jpg'

function ProductList() {

    const products={
          display:'flex',
          flexDirection:'row',
          justifyContent:'space-around',
          width:'80vw',
          margin:'auto',
    }
    return (
        <div style={products}>
            <Product picture={seo} title="SEO"/>
            <Product picture={branding} title="BRANDING"/>
            <Product picture={logo} title="LOGO"/>
        </div>
    )
}

export default ProductList