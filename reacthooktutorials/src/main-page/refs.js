import React, {useRef, useState, useEffect} from "react";
import { render } from '@testing-library/react';


function Refered(){
    const [name, setName] = useState("");
    const renderCount = useRef(0);
    useEffect(() =>{
        renderCount.current = renderCount.current + 1;

    }, [])

    return(
        <>
        <input type="text" onChange={e => setName(e.target.value)} />
        <p>My name is {name}</p>
        <p>I render {renderCount.current} times</p>
        </>
    )


}


export default Refered;