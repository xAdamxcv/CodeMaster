import React, {useState} from "react"
const { default: Contact_Form } = require("./Contact_Form");
const { default: Contact_Picture } = require("./Contact_Picture");
const { default: Contact_Footer } = require("./Contac_Footer");



let Contact = ({ addP }) => {
    const [state, setState] = useState([]);
    const handleAdd = addP => {
        setState(prev => [
            ...prev,
            addP
        ]);
      }
      console.log(state)
    return(
        <section className="Contact"id="Contact" href="Contact">
            <div className="Contact-div" >
                <Contact_Picture />
                <Contact_Form addP={handleAdd}/>
            </div>
            <Contact_Footer />
        </section>
    )
}


export default Contact