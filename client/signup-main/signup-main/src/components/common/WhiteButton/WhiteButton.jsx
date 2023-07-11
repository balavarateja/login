/* Method 1 using html and css directly, Method 2 is in SampleButton2*/

import React from 'react';
import './WhiteButton.css';


const WhiteButton = (props) => {
    const { text } = props;
    return(
        <>
        <button className='white-button'>{text}</button>
        </>
    )
}

export default WhiteButton;