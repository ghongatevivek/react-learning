import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

const firstName = 'Vivek';
const lastName = 'Ghongate';
const currentDate = new Date().toLocaleDateString();
const currentTime = new Date().toLocaleTimeString();
const img1 = "https://picsum.photos/200/300";
const img2 = "https://picsum.photos/250/300";
const img3 = "https://picsum.photos/100/300";

const headingText = {
    color: "red",
    textAlign: 'center',
    fontWeight: 'bold',
    margin: '50px 0',
    fontFamily: '"Josefin Sans",sans-serif',
};
ReactDOM.render(
    <>
        <h1 style={headingText}>Hello World</h1>
        <div className='img_div'>
            <img src= {img1} alt='Sample Image' />
            <img src= {img2} alt='Sample Image' />
            <img src= {img3} alt='Sample Image' />
        </div>
    </>,
    document.getElementById('root'));
