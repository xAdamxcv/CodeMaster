import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

let HomeHeader_Two = () =>{
    return(
        <div className="HomeHeader-Two">
        <Link className="button-One" to="Home">start</Link>
        <Link className="button" to="SimpleStep">o co chodzi</Link>
        <Link className="button-One" to="AboutUs">o nas</Link>
        <Link to="WhoWeHelp" className="HomeHeader-Two_button button">Fundacja i organizacje</Link>
        <Link className="button-One" to="Contact">Kontakt</Link>
    </div>
    )
}
export default HomeHeader_Two