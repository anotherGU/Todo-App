import React from "react";
import "./Check.css"

const Check = ({...props}) =>{
    return(
        <div class="checkbox-container">
            <input {...props} type="checkbox" id="myCheckbox" class="checkbox-input" />
            
        </div>
    );
}

export default Check