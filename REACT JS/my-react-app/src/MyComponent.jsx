import React, {useState} from "react";

function MyComponent() {

    const [name, setName] = useState("Guest");
    const [quantity, setQuantity] = useState(1);
    const [comment, setComment] = useState("")

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    function handleQuantityChange(event) {
        setQuantity(event.target.value);
    }

    const handleCommentChange = (event) => {
        setComment(event.target.value);
    }

    return(
        <div>
            <input value={name} onChange={handleNameChange}/>
            <p>Name: {name}</p>

            <input value={quantity} onChange={handleQuantityChange} type="number"/>
            <p>Quantity: {quantity}</p>

            <textarea value={comment} onChange={handleCommentChange} placeholder="Enter delivery instructions"/>
            <p>User's comment: {comment}</p>
        </div>
    );
   
}

export default MyComponent;