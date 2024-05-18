import React, {useState} from "react";

function MyComponent() {

    const [name, setName] = useState("Guest");
    const [quantity, setQuantity] = useState(1);

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    function handleQuantityChange(event) {
        setQuantity(event.target.value);
    }

    return(
        <div>
            <input value={name} onChange={handleNameChange}/>
            <p>Name: {name}</p>

            <input value={quantity} onChange={handleQuantityChange} type="number"/>
            <p>Quantity: {quantity}</p>
        </div>
    );
   
}

export default MyComponent;