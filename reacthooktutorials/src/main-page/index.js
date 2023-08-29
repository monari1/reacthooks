import './main-page.css'
import React, {useState} from 'react';
function countInitial(){
    console.log('run function');
    return 5;
}
function App() {


    const [count, setCount] = useState(()=> countInitial());

    function Add(){
        setCount(prevCount => prevCount + 1);
    }

    function Substract(){
        setCount(prevCount => prevCount + 1);
    }



    return(
        <div>
        <button onClick={Substract}>-</button>
        <span>{count}</span>
        <button onClick={Add}>+</button>
        
        </div>
    );


};

export default App;