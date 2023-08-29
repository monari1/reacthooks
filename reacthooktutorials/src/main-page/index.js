import './main-page.css'
import React, {useState} from 'react';
import Header from './header';
function countInitial(){
    console.log('run function');
    return 5;
}
function App() {


    const [state, setState] = useState( {count: 4, theme: 'blue'});

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
            <div><Header/></div>
        <button onClick={Sub}>-</button>
        <span>{count}</span>
        <span>{theme}</span>
        <button onClick={Add}>+</button>
        
        </div>
    );


};

export default App;