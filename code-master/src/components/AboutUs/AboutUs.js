const { default: AbouteUs_Picture } = require("./AboutUs_Picture");
const { default: AbouteUs_Text } = require("./AboutUs_Text");


let AboutUs = () =>{
    return(
        <section className="AboutUs">
            <AbouteUs_Text />
            <AbouteUs_Picture />
        </section>
    )
}
export default AboutUs