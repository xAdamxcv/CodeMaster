import React, { useState } from "react"
import fakeapi from '../fakeApi';
import HomeHeader from "../Home/homeHeader"





let Log = () =>{
    const [state, setState] = useState([])
    const addL = () => {
        setState(el => [
            ...el,
            el
        ])
    }
    const [password, setPassword] = useState ({password: " "});
    const [email, setEmail] = useState({email: " "});
    const [error, setError] = useState("");
    const [data, setData] = useState(false);
    let [errorType, setErrorType] = useState("")

    let [nameO, setName] = useState("")

   let  login = data => {
      const {username, email, password} = data;
      return new Promise((resolve, reject) => {
        if (email === "coderslab" && password === "qwerty") {
          resolve({
            username,
            name: "Adam",
            surname:"Durasiewicz"
          });
        } else {
          reject("Hasło lub login są nieprawidłowe!");
        }
      });
    }
    

    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    };
    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addL(email,password);
        console.log(email, password)

        if (email.length < 2) {
            setErrorType(true)
            return;
        }else{
            setErrorType(false);
            setError(" ")
        }

        if (password.length < 5) {
            setErrorType(true)
            return;
        }else{
            setErrorType(false);
            setError(" ")
        }


        fakeapi.login({
            email,
            password
        }).then(user => {
            console.log(user);
            setData(user);
        }).catch(err => {
            console.log("nie", err)
            setError(err);
        })

        setError("");
        
    }
    
   

    return(
        <section className="Log">
            <HomeHeader />
            <div className="Log_Center">
                <h3>Zaloguj sie</h3>
                <p className="p"></p>
                <form onSubmit={handleSubmit}>
                    <div className="Log_One">
                        {error}
                    <label>Email
                        <input onChange={handleChangeEmail}></input> 
                        </label>
                        <label>Hasło
                        {errorType && <p style={{color: "red"}}>Email minimum 2 znakow</p>}
                        <input onChange={handleChangePassword}></input> 
                        </label>
                        {errorType && <p style={{color: "red"}}>hasło minimum 5 znakow</p>}
                    </div>
                  
                    <div className="Log_two">
                        <button>Załóż konto</button>
                        <button type="submit">Zaloguj się</button>
                    </div>
               </form> 
            </div>
        </section>
    )
}
export default Log