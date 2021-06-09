import { useState } from 'react';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';
import * as Scroll from 'react-scroll';
import { Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import Contact from '../Contact/Contact';
import HomeHeader_Two from './HomeHeaderTwo';

  


let HomeHeader = () => {

    let [startLink, setStartLink] = useState("")
    let [link, setLink] = useState("/Log/Log.js")
    // function LinkTo() {
    //     setStartLink(el => !el)
    //     if(startLink === true) {
    //         setLink("/#")
    //     }
    // }

    // console.log(props.value)

    return(
        <section className="HomeHeader">
            <div className="HomeHeader-One">
                
                <Link className="button" to="/Log/Log.js">Zaloguj</Link>
                <Link className="button" to="/#">Zaloguj</Link>
                <Link className="button" to="/rejestracja">Załóż konto</Link>
                
            </div>
            <HomeHeader_Two />
        </section>
    )
}

export default HomeHeader