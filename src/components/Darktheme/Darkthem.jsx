import { createContext, useContext, useEffect, useState } from "react";
const ThemeContext = createContext('light');


 export const Darktheme = ({children}) => {
     const [Darkmode, setDarkmode] = useState(
        localStorage.getItem("theme")==="dark"
     );
     useEffect(()=>{
        if(Darkmode){
          document.documentElement.classList.add("dark")
          localStorage.setItem("theme","dark")
        }
        else{
 document.documentElement.classList.remove("dark")
          localStorage.setItem("theme","light")
        }
     },[Darkmode])
    return (
        <ThemeContext.Provider value={{Darkmode,setDarkmode}}>
           {children}
        </ThemeContext.Provider>
        
    );
};

 export const useDarkMode =()=>useContext(ThemeContext)