import React from "react";


function OptionCarType({type, value}){
    
        return(
            <>
                <option 
                value={value}>{type}</option>
            </>
        )
    }

export default OptionCarType