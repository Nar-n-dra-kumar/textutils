import React, { useState } from 'react';

function copy() {
    var copyText = document.getElementById("floatingTextarea2");
      copyText.select();
      copyText.setSelectionRange(0, 99999);
      navigator.clipboard.writeText(copyText.value);
  }

  function toCamelCaseWithSpaces(str) {
    return str
        .toLowerCase()
        .replace(/[^A-Za-z0-9]+(.)/g, (match, chr) => ' ' + chr.toUpperCase());
}


export default function TextForm(props) {

    const handleUpClick = ()=> {
        let newtext= text.toUpperCase();
        setText(newtext);
        props.showAlert("Converted to Uppercase" , "success");
    }

    const handleLowClick = ()=> {
        let newtext= text.toLowerCase();
        setText(newtext);
        props.showAlert("Converted to Lowercase" , "success");
    }

    const clear = ()=> {
        let newtext= " ";
        setText(newtext);
        props.showAlert("Text cleared" , "success");

    }
    const riverseCase = ()=> {
        let newtext = text.split('').reverse().join('');
        setText(newtext);
        props.showAlert("Text reversed" , "success");
    }
    const handleCamelClick = ()=> {
        let newtext = toCamelCaseWithSpaces(text);
        setText(newtext);
        props.showAlert("Converted to Camelcase" , "success");
    }
    
    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const [text, setText] = useState('');
    
    return (
        <div className='container'>
            <h3>{props.heading}</h3>
            <div className="form-floating my-3">
                <textarea 
                    style={{backgroundColor : props.mode==='dark' ? 'black' : 'white', height: "300px", color :  props.mode==='dark' ? 'white' : 'black'}}     
                    className="form-control" 
                    value={text} 
                    onChange={handleOnChange} 
                    placeholder="Leave a comment here" 
                    id="floatingTextarea2" 
                    name="form"
                ></textarea>
                <label htmlFor="floatingTextarea2">Text here</label>
            </div>
            <div className='container'>
                <button className="btn btn-warning mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-warning mx-1" onClick={handleLowClick}>Convert to Lowercase</button>
                <button className="btn btn-warning mx-1" onClick={handleCamelClick}>Convert to Camelcase</button> 
                <button className="btn btn-warning mx-1" onClick={riverseCase}>Riverse</button>
                <button className="btn btn-warning mx-1" onClick={copy}>Copy</button>
                <button className="btn btn-warning mx-1" onClick={clear}>Clear</button>
                
            </div>
            <div className="container my-3">

            <h1>Your text summary</h1>
            <p>{text.split(' ').filter(Boolean).length} words, {text.length} characters</p>
            <p>{0.007 * text.split(' ').filter(Boolean).length} Minutes To Read</p>
            </div>
        </div>
    );
}
