const { default: AboutUs } = require("../AboutUs/AboutUs")
const { default: Contact } = require("../Contact/Contact")
const { default: Home } = require("../Home/home")
const { default: SimpleStep } = require("../SimpleSteps/SimpleStep")
const { default: WhoWeHelp } = require("../WhoWeHelp/WhoWeHelp")


let Main = () => {

    return (
        <>
            <Home />
            <SimpleStep />
            <AboutUs />
            <WhoWeHelp />
            <Contact />
        </>
    )
}

export default Main