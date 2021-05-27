import HomeHeader from "./homeHeader"
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';


let HomeCenter = () => {
    return(
        <div className="xx">
        <HomeHeader />
        <section className="HomeCenter">
            <div className="HomeCenter-One">
                <p className="HomeCenter_Text">Zacznij pomagać</p>
                <p className="HomeCenter_Text">Oddaj niechciane rzeczy w zaufane ręce</p>
                <p className="HomeCenter_BC"></p>
            </div>
            <div className="HomeCenter-Two">
                <Link className="button" to="/Log/Log.js">ODDAJ<br/> RZECZY</Link>
                <a className="button">ZORGANIZUJ<br/> ZBIÓRKE</a>
            </div>
        </section>
        </div>
    )
}

export default HomeCenter