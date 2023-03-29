import { useState } from "react"
import { SidebarMen } from "./SlidebarMen"
import { SidebarWomen } from "./SlidebarWomen"


export const Sidebar = () =>{
const [select,setSelected] = useState('WOMEN')

const handleClick = (e) =>{
    setSelected(e)
}

console.log(select)

return (
    <div style={{width:'100%'}}>
    <div style={{width:'100%',display:'flex',justifyContent:'space-evenly'}}>
    <button style={{width:'45%',padding:'15px',borderBottom:select=='MEN'?null:'2px solid black'}} onClick={(e)=>handleClick('WOMEN')}>WOMEN</button>
    <button style={{width:'45%',padding:'15px',borderBottom:select=='WOMEN'?null:'2px solid black'}} onClick={(e)=>handleClick('MEN')}>MEN</button>
    </div>
    {select=='MEN'?<SidebarMen/> : <SidebarWomen/>}

    </div>
)
}