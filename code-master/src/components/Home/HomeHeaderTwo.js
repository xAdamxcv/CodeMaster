import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import Start from "./Start"

let HomeHeader_Two = () =>{
    return(
        <div className="HomeHeader-Two">
        <Start />
        <Link className="button" to="HomeThreeColumns">o co chodzi</Link>
        <Link className="button" to="AboutUs">o nas</Link>
        <Link to="WhoWeHelp" className="HomeHeader-Two_button button">Fundacja i organizacje</Link>
        <Link className="button" to="Contact">Kontakt</Link>
    </div>
    )
}
export default HomeHeader_Two