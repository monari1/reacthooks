import React, {useRef, useState, useEffect} from "react";
import { render } from '@testing-library/react';


function Refered(){
    const [name, setName] = useState("");
    const prevName = useRef('');
    useEffect(() =>{
        prevName.current = name;

    }, [name])

    // function focus(){
    //     inputRef.current.focus();
    // }
    // useEffect(() =>{
    //     renderCount.current = renderCount.current + 1;

    // }, [])

    return(
        <>
        <input type="text" onChange={e => setName(e.target.value)} />
        <p>My name is {name} and it used to be {prevName.current}</p>
        {/* <button className="btx" onClick={focus}>FOCUS</button> */}
        </>
    )


}


export default Refered;

