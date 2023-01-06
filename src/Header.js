import { useContext } from "react";
import { Context } from "./context/UserContext";
import { SwitchCount } from "./SwitchCount";

export const Header=()=>{
const {user,setUser}=useContext(Context)

const login=()=>{
    setUser({
        name:"Hasan",
        id:1
    })
}

const logout=()=>{
    setUser(false)
}


    return(
        <header>
            {(user && <button onClick={logout}>Logout</button>) || (<button onClick={login}>Login</button>)}
            Header <br/>

            <SwitchCount />
        </header>
    );
}