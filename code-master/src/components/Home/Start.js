import React from "react"
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';
import App from "../../App" 

let Start = () => {

    return <Link className="button"  to="/" render={App} >start</Link>
}
export default Start