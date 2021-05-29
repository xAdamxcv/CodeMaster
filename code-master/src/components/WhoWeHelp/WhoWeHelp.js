import React, { useEffect, useState } from "react"
import arr from "./obj"

const { default: WhoWeHelp_Fundactions } = require("./WhoWeHelp_Fundations");
const { default: WhoWeHelp_Text } = require("./WhoWeHelp_Text");
const { default: WhoWeHelp_Pagination } = require("./WhoWeHelp_Pagination");
const { default: WhoWeHelp_Title } = require("./WhoWeHelp_Title");


let WhoWeHelp = () =>{
    
   
 
    return(
        <section className="WhoWeHelp">
            <WhoWeHelp_Title />
            <p className="WhoWeHelp_A"></p>
            <WhoWeHelp_Fundactions />            
        </section>
    )
}

export default WhoWeHelp