import React, {useState} from "react";

const Address = function () {
    const [value, setValue] = useState('');

   return (
    <div>
        <input className="input" 
        type="text" 
        value={value}
        onChange={event => setValue(event.target.value)}/>

    </div>
   )
}

export default Address;