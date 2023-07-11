/* Method 1 using html and css directly, Method 2 is in SampleButton2*/

import React from 'react';
import './GreyButton.css';


const GreyButton = (props) => {
    const { text } = props;
    return(
        <>
        <button className='grey-button'>{text}</button>
        </>
    )
}

export default GreyButton;