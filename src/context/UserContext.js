import { createContext, useState } from "react";



export const Context=createContext();


const UserProvider=({children})=>{

    const [user,setUser]=useState(false)

    const data={
        user,setUser
    }

    return(
        <Context.Provider value={data}>{children}</Context.Provider>
    )
}

export default UserProvider