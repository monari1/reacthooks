import './main-page.css'
import React, {useEffect, useState} from 'react';
import Header from './header';
import Refered from './refs';
function countInitial(){
    console.log('run function');
    return 5;
}
function App() {


    const [state, setState] = useState( {count: 4, theme: 'blue'});

    useEffect(()=>{

        console.log('run function');
    }, [state])

    const count = state.count;
    const theme = state.theme;
    function Add(){
        setState(prevState =>{return {...prevState, count:prevState.count +1}})
        // setState(prevState => {...prevState, prevState.count+1});
    }

    function Sub(){
        // setCount(prevCount => prevCount + 1);
        setState(prevState =>{return {...prevState, count:prevState.count -1}})

    }



    return(
        <div>
          <div><p></p>< Refered/></div>
          <div><p></p><Header/></div>

        <button onClick={Sub}>Decrement</button>
        <span>{count}</span>
        <span>{theme}</span>
        <button onClick={Add}>Increment</button>
        
        </div>
    );


};

export default App;