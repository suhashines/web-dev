import React, { useState } from 'react';
import './Form.css';

function Form() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [payment, setPayment] = useState("");
    const [delivery, setDelivery] = useState("");

    const handleSubmission = (e) => {
        e.preventDefault();
        console.log("Name: ", name);
        console.log("Email: ", email);
        console.log("Payment Method: ", payment);
        console.log("Delivery Method: ", delivery);
        setName("");
        setEmail("");

    }

    return (
        <div className='form-container'>
            <h1>Form</h1>
            <form onSubmit={(e) => handleSubmission(e)}>
                <input type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
                <p>{name}</p>
                <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} /> <br />

                <select onChange={(e) => setPayment(e.target.value)}>

                    <option value="">Select Payment Method</option>
                    <option value="visa">Visa</option>
                    <option value="bkash">Bkash</option>

                </select>

                <p>Payment: {payment}</p>
                <br />
                <label>
                    <input type="radio" value="pick-up"
                        checked={delivery === "pick-up"} onChange={(e) => setDelivery(e.target.value)} />
                    Pick Up
                </label><br />
                <label >
                    <input type="radio" value="delivery"
                        checked={delivery === "delivery"} onChange={(e) => setDelivery(e.target.value)} />
                    Delivery
                </label>
                <br />
                <p>Shipping: {delivery}</p>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Form;