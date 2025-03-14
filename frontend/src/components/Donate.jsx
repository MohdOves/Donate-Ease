import React, { use, useState } from "react";

const Donate = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [amount, setAmount] = useState("");
  const [disabebtn,setDisablebtn] = useState(false)

  return (
    <section className="donate">
      <form>
        <div>
          <img src="/logo.png" alt="logo" />
        </div>
        <div>
          <label>Show your love for Poors</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter Donation Amount (USD)"
          />
        </div>
        <input type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name" />
        <input type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address" />
        
        <input type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Message" />
            <button type="submit" className="btn" disabled={disabebtn}>Donate {amount ? `$${amount}` : "$0" }</button>
      </form>
    </section>
  );
};

export default Donate;
