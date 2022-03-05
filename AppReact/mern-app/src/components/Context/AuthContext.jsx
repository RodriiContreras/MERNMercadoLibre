import { createContext,useState } from "react";

export const AuthContext = createContext()//estados, acciones GLOBALES
const AuthContextProvider = ({children}) =>{
     const [dataAuth, setDataAuth] = useState([])

    return ( 
        <AuthContext.Provider value={{dataAuth,setDataAuth}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider