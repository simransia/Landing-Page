import React from 'react';
import Contact from './Contact.js';


function ContactDetails() {

    const contacts={
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-around'

    }
    const links=["Lorem", <br/>, "Ipsum", <br/>, "Dollar"];
    
     const contact=["info@company.com",<br/>,"+91 079 00000000"]
    
    return (
        <div style={contacts}>
            <Contact heading="About Company" 
                     description="Lorem, ipsum dolor sit amet
                                 consectetur adipisicing elit."/>

             <Contact heading="Quick Links" 
                    description={links}/>

             <Contact heading="Contact Us"faTwitter
                      description={contact}/>
        </div>
    )
}

export default ContactDetails
