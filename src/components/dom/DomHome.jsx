import React from "react";
import Sidebar from "../Sidebar";
import { domData } from "./domdata.jsx";


const DomHome = ()=>{
    return(
        <div>
            <Sidebar data={domData} />
        </div>
    )
}

export default DomHome;