import { useState } from "react";
import "./contact.scss";
import { db } from "../../firebaseConfig";
import { addDoc, collection } from "firebase/firestore";

export default function Contact() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  const userCollectionRef = collection(db,"contactData")

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);

    addDoc(userCollectionRef,{
      name: name,
      email: email,
      message: message
    }).then(() => {
      if(!alert("Thanks, I'll reply ASAP :)"))document.location = "#intro"
    }).catch((error) => alert(error.message))

  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" required onChange={(e) => setName(e.target.value)} />
          <input type="email" placeholder="Email" required onChange={(e) => setEmail(e.target.value) }/>
          <textarea placeholder="Message" required onChange={(e) => setMessage(e.target.value)}></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}