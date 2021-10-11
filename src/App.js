import React from 'react';
import Display from './components/Display.js';
import Header from "./components/Header.js";
import ProductList from "./components/ProductList.js";
import About from "./components/About.js";
import Review from "./components/Review.js";
import Form from "./components/Form.js";
import ContactDetails from "./components/ContactDetails.js";
import Footer from "./components/Footer.js";
        
function App() {
  return (
    <>
      <Header />
      <Display />
      <h1 style={{
        textAlign: 'center',
        fontFamily: 'initial'
      }}>
        OUR PRODUCTS</h1>
      <ProductList />
      <About />
      <Review />
      <Form/>
      <ContactDetails/>
      <Footer/>
    </>

  );
}

export default App;
