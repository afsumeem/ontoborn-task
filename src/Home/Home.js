import React, { useState } from 'react'
import "./Home.css"

const Home = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = () => {
        const postURL = "http://localhost:5000/information";

        fetch(postURL, {
            method: "POST",
            headers: {
                'Accept': 'Application/json',
                'Content-Type': 'Application/json',
            },
            body: JSON.stringify({

                name: name,
                email: email,
                phone: phone,
                message: message
            })
        })
            .then(() => {
                alert("form submitted sussessfully")
            })
    }


    return (

        <div className="form">

            <h1 className='header'>Tell us about your project</h1>
            <form onSubmit={handleSubmit}>
                <div className="input-fields">

                    <div className="input-field">
                        <label for="name" className="input-label">
                            Name*
                        </label>

                        <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required />

                    </div>

                    <div className="input-field">
                        <label for="email" className="input-label">
                            Email*
                        </label>

                        <input type="text" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

                    </div>

                    <div className="input-field">
                        <label for="phone" className="input-label">
                            Phone
                        </label>

                        <input type="text" id="phone" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />

                    </div>
                    </div>
                    <div className="input-field">
                        <label for="message" className="input-label">
                            Message(Project details, timeline and budget)*
                        </label>

                        <textarea type="text" id="message" name="message" value={message} onChange={(e) => setMessage(e.target.value)} required /> <br/><br/>
                    </div>
                

<button type="submit" className="hire-us">Hire Us</button>
            </form>
        </div>
    );

};

export default Home;
