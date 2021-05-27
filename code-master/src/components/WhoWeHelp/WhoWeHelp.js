
const { default: WhoWeHelp_Fundactions } = require("./WhoWeHelp_Fundations");
const { default: WhoWeHelp_Text } = require("./WhoWeHelp_Text");
const { default: WhoWeHelp_ThreeColumns } = require("./WhoWeHelp_ThreeColumns");
const { default: WhoWeHelp_Title } = require("./WhoWeHelp_Title");


let WhoWeHelp = () =>{
    return(
        <section className="WhoWeHelp">
            <WhoWeHelp_Title />
            <p className="WhoWeHelp_A"></p>
            <WhoWeHelp_ThreeColumns />
            <WhoWeHelp_Text />
            <WhoWeHelp_Fundactions />
            
        </section>
    )
}

export default WhoWeHelp