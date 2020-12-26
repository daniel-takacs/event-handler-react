import { getSuggestedQuery } from '@testing-library/react';
import React, { useState } from 'react';
import './EventHandler.css'

export default function EventHandler (props) {

    const [click, setClick] = useState(0);

    const onClickHandler = ()=> {
      setClick(click + 1);
       console.log(click)
    }
    
        return (
            <div>
                <div className="clickme" onClick={onClickHandler}>Click me {click}</div>
            </div>
        )
    
}