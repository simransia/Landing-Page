import React from 'react'

function Form() {

    const form={
        clear:'both',
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#1e90ff',
        height:'100px'
    }
    const input={
        padding:'5px',
        width:'25%',
        height:'20px',
        marginRight:'5px',
        borderRadius:'5px',
        opacity:'0.5',
        border: '2px solid grey'

    }
    const button={
        height:'30px',
        color:'blue',
        backgroundColor:'white',
        borderRadius:'8px',
        border:'1px solid grey'
    }

    return (
        <div >
            <form style={form}>
             <input style={input} placeHolder="Email Id"/>
             <button style={button}>Subscribe</button>
            </form>
        </div>
    )
}

export default Form
