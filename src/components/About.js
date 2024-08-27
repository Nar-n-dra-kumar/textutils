import React, { useState } from 'react';

export default function About() {
    const [myStyle, setMyStyle] = useState({
        color: 'black',
        backgroundColor: 'white',
    });
    const [btnText, setBtnText] = useState("Enable Dark Mode");

    const toggleStyle = () => {
        if (myStyle.color === 'black') {
            setMyStyle({
                color: 'white',
                backgroundColor: 'black',
                border: '1px solid white',
            });
            setBtnText("Enable Light Mode");
        } else {
            setMyStyle({
                color: 'black',
                backgroundColor: 'white',
                border: '1px solid black',
            });
            setBtnText("Enable Dark Mode");
        }
    };

    return (
        <div id="about" className="container my-3 py-3 rounded" style={myStyle}     
>
            <div className='my-3'>
                <h2>About Us</h2>
            </div>
            <div className="accordion" id="accordionPanelsStayOpenExample" style={myStyle}>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                        <button
                            className="accordion-button"
                            style={myStyle}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseOne"
                            aria-expanded="true"
                            aria-controls="panelsStayOpen-collapseOne"
                        >
                            <b>About Text Analyser</b>
                        </button>
                    </h2>
                    <div
                        id="panelsStayOpen-collapseOne"
                        className="accordion-collapse collapse show" style={myStyle}
                        aria-labelledby="panelsStayOpen-headingOne"
                    >
                        <div className="accordion-body" style={myStyle}>
                            Welcome to Text Analyser, your one-stop solution for all your text analysis needs.
                            Our tool is designed to help you effortlessly extract valuable insights from any text,
                            whether it's for academic research, content creation, or data-driven decision-making.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                        <button
                            className="accordion-button collapsed"
                            type="button" style={myStyle}
                            data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseTwo"
                            aria-expanded="false"
                            aria-controls="panelsStayOpen-collapseTwo"
                        >
                            <b>Our Mission</b>
                        </button>
                    </h2>
                    <div
                        id="panelsStayOpen-collapseTwo"
                        className="accordion-collapse collapse" style={myStyle}
                        aria-labelledby="panelsStayOpen-headingTwo"
                    >
                        <div className="accordion-body" style={myStyle}>
                            At Text Analyser, our mission is to provide an easy-to-use and powerful platform that empowers users to understand and interpret text data efficiently.
                            We strive to make text analysis accessible to everyone, from students and researchers to professionals and hobbyists.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                        <button
                            className="accordion-button collapsed"
                            type="button" style={myStyle}
                            data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseThree"
                            aria-expanded="false"
                            aria-controls="panelsStayOpen-collapseThree"
                        >
                            <b>Features</b>
                        </button>
                    </h2>
                    <div
                        id="panelsStayOpen-collapseThree"
                        className="accordion-collapse collapse" style={myStyle}
                        aria-labelledby="panelsStayOpen-headingThree"
                    >
                        <div className="accordion-body" style={myStyle}>
                            <p>Sentiment Analysis: Understand the emotional tone of your text to gauge public opinion or customer sentiment.</p>
                            <p>Keyword Extraction: Identify the most important words and phrases in your text to improve SEO or summarize content.</p>
                            <p>Entity Recognition: Automatically detect and categorize entities such as names, organizations, and locations.</p>
                            <p>Text Summarization: Generate concise summaries of lengthy documents to save time and effort.</p>
                            <p>Language Detection: Identify the language of any text to ensure accurate processing and analysis.</p>
                            <p>Customizable Reports: Generate detailed reports tailored to your specific needs and preferences.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container my-2'>
                <button className="btn btn-warning" onClick={toggleStyle} type='button'>{btnText}</button>
            </div>
        </div>
    );
}
