import { useEffect, useState, React } from 'react';
import './main-page.css'

function Header(props) {
    const [resourceType, setResourceType] = useState('Post')

    function post(){
        setResourceType("Hello world");
    }
    function users(){
        setResourceType("users");
    }
    function comments(){
        setResourceType("comments");
    }
    return(
        <>
        <div>
            <button onClick={post}>Post </button>
            <button onClick={users}>Users </button>
            <button onClick={comments}>Comments</button>
        </div>
        <h1>{resourceType}</h1>
        </>
    )
}

export default Header;