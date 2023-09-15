import React from "react";

const Languageoption = (props) => {
    return(
        <div style={{marginTop:'50px'}}>
            <select style={{color:'blue'}}  onChange={props.onChange}>
                <option>Select Language</option>
                <option style={{color:"green"}} value={'en'}>English</option>
                <option style={{color:"green"}} value={'hin'}>Hindi</option>
                <option style={{color:"green"}} value={'fra'}>French</option>
            </select>
            
        </div>
    )
}
export default Languageoption;