import React, {useState} from "react";

function MyComponent() {

    const [name, setName] = useState("Guest");
    const [quantity, setQuantity] = useState(1);
    const [comment, setComment] = useState("")
    const [payment, setPayment] = useState("");

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    function handleQuantityChange(event) {
        setQuantity(event.target.value);
    }

    const handleCommentChange = (event) => {
        setComment(event.target.value);
    }

    const handlePaymentChange = (e) => {
        setPayment(e.target.value);
    }

    return(
        <div>
            <input value={name} onChange={handleNameChange}/>
            <p>Name: {name}</p>

            <input value={quantity} onChange={handleQuantityChange} type="number"/>
            <p>Quantity: {quantity}</p>

            <textarea value={comment} onChange={handleCommentChange} placeholder="Enter delivery instructions"/>
            <p>User's comment: {comment}</p>

            <select value={payment} onChange={handlePaymentChange}>
                <option value="">select an option</option>
                <option value="Visa">Visa</option>
                <option value="Mastercard">Mastercard</option>
                <option value="Giftcard">Giftcard</option>
            </select>
            <p>Payment method: {payment}</p>
        </div>
    );
   
}

export default MyComponent;