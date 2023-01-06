
import {   useCount } from "./context/CountContext";



export const SwitchCount=()=>{

const {count,setCount}=useCount()
    return(
        <>
        <br/>
        change count={count}
        <button onClick={()=>setCount(count=>count+1)}>Increase</button>
        </>
    );
}