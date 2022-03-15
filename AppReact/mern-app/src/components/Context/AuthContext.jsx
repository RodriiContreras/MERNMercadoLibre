import { createContext,useState } from "react";

export const AuthContext = createContext()//estados, acciones GLOBALES
const AuthContextProvider = ({children}) =>{
    //Used to set name on navbar
     const [dataAuth, setDataAuth] = useState([])

   //use to show products history of the user
     const [productsHistory, setProductsHistory] = useState([])

   //use to set an id when user create a product
     const [logData, setLogData] = useState([])

    return ( 
        <AuthContext.Provider value={{dataAuth,setDataAuth,productsHistory,setProductsHistory,logData,setLogData}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider