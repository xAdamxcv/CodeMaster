const { default: HomeCenter } = require("./HomeCenter");
//const { default: HomeHeader } = require("./homeHeader");
const { default: HomeThreeColumns } = require("./HomeThreeColumns");



let Home = () => {
    return(
        <>
            
            <HomeCenter />
            <div>
                <HomeThreeColumns />
            </div>
        </>
    )
}

export default Home