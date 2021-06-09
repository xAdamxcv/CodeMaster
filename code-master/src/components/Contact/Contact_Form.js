import React, {useEffect, useState} from "react"

let Contact_Form = ({ addP }) => {
    let [name, setName] = useState({name: ""});
    let [email, setEmail] = useState({email: ""});
    let [message, setMessage] = useState({message: ""});
    let [succesSend, setSuccessSend] = useState(false)
    let [errorSend, setErrorSend] = useState(false)
    let [borderBottomColor, setBorderBottomColor] = useState("")
   
    const handleChangeName = (e) => {
        setName(e.target.value);
    };
    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    };
    const handleChangeMessage = (e) => {
        setMessage(e.target.value);
    };

    

    const handleSubmit = (e) => {

        e.preventDefault();
        addP({name,email,message})
        // console.log({name,email,message})
        fetch("https://fer-api.coderslab.pl/v1/portfolio/contact",{
            method:'POST',
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({name,email,message})
        })
        .then(data=>data.json())
        .then(data=>{
            if(data.status === "success"){
                console.log("suces")
                setSuccessSend(true)
                setErrorSend(false)
                setBorderBottomColor("#737373")

            }else{
                setErrorSend(true)
                setSuccessSend(false)
                setBorderBottomColor("#DC143C")
            }
        })
        
        
       
    };

    function SendClear(){
        setTimeout(() => {
            setSuccessSend(false)
            setErrorSend(false)
            setBorderBottomColor("#000000")
        },8000)
    }
        
    
    return(
        <div className="Contact_Form">
            <h2>Skontaktuj sie z nami</h2>
            {succesSend && <h3 classSend="succesSend" style={{color: "green", marginRight: 30}}>wysłano pomyślnie</h3>}
            
            <p className="Contact_Form_A"></p>
            <div className="Form">
                <form onSubmit={handleSubmit} >
                <div className="Form-A">
                   
                    <label > Wpisz swoje imie <br/>
                
                    <input style={{borderBottomColor: borderBottomColor}} type="text" id="name" onChange={handleChangeName}></input>
                    {errorSend && <h3 className="errorSend"  style={{color: "red"}}>Podane imię jest nieprawidłowe</h3>}
                    </label><br/>
                        
                    <label >Wpisz swoj email<br/>
                    <input style={{borderBottomColor: borderBottomColor}} type="text" id="email" onChange={handleChangeEmail}></input>
                    {errorSend && <h3 className="errorSend" style={{color: "red"}}>Podane e-mail jest nieprawidłowe</h3>}

                    </label><br/>
                </div>
                <div className="Form-B">
                    <label >Wpisz swoją wiadomość<br/>
                    <textarea style={{borderBottomColor: borderBottomColor}} type="text" className="input" onChange={handleChangeMessage}></textarea>
                    {errorSend && <h3 className="errorSend"  style={{color: "red"}}>Wiadomość musi mieć conajmniej 120 znaków</h3>}

                    </label><br/>
                    <input className="input_Send" type="submit" value="wyślij" onClick={SendClear}/>
                </div>
                
                </form>
            </div>
        </div>
    )
}
export default Contact_Form