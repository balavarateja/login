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