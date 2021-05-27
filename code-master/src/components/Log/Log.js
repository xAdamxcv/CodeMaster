const { default: HomeHeader } = require("../Home/homeHeader")




let Log = () =>{


    return(
        <section className="Log">
            <HomeHeader />
            <div className="Log_Center">
                <h3>Zaloguj sie</h3>
                <p></p>
                <div className="Log_One">
                   <label>Email
                     <input></input> 
                    </label>
                    <label>Hasło
                     <input></input> 
                    </label>
                </div>
                <div className="Log_two">
                    <button>Załóż konto</button>
                    <button>Zaloguj się</button>
                </div>
            </div>
        </section>
    )
}
export default Log