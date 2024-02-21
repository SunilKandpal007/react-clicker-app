import React, {useState} from "react";

export default function Clicker(){
    
    //declaring a state variable 'clickerValue' and a function 'updateClickerValue' to update it. The initial value of clickerValue is set to 0.

    const[clickerValue, updateClickerValue] = useState(0);

    return(
        <div className="container">
            <div className="clickerParent border border-primary mt-4">
                {/* setting 0 as default value of clicker app */}
                <div className="clickerDisplay d-flex align-items-center justify-content-center bg-light display-2">
                    {clickerValue}
                </div>

                <div className="clickerButtonContainer d-flex flex-row">
            {/* click-button to increase clicker-value */}
                    <button className="btn btn-success w-100" onClick={()=> updateClickerValue(clickerValue+1)}>
                        <i className="fa fa-plus fa-2x"></i>
                    </button>
            {/* click-button to reset clicker-value */}
                    <button className="btn btn-warning w-100" onClick={()=> updateClickerValue(0)}>
                        <i className="fa fa-refresh fa-2x"></i>
                    </button>
    
            {/* click-button to decrease clicker-value. Using Math.max method to ensure clickerVlaue does not go below 0. */}
                    <button className="btn btn-danger w-100" onClick={()=> updateClickerValue(Math.max(0,clickerValue-1))}>
                        <i className="fa fa-minus fa-2x"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}