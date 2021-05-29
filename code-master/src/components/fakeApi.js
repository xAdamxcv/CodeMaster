import { useState } from "react";

export default {

  
    login: data => {
      const {username, email, password} = data;
      return new Promise((resolve, reject) => {
        if (email === "coderslab" && password === "qwerty") {
          resolve({
            username,
            name: "Adam",
            surname: "Durasiewicz"
          });
        } else {
          reject("Hasło lub login są nieprawidłowe!");
        }
      });
    }
  };