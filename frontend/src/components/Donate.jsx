import React, { useState } from "react";
import Payment from "./Payment";
import { toast } from 'react-hot-toast';

const Donate = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [amount, setAmount] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!amount || amount <= 0) {
      toast.error("Please enter a valid amount");
      return;
    }
    if (!name || !email) {
      toast.error("Please fill in all required fields");
      return;
    }
    setIsProcessing(true);
  };

  const handlePaymentSuccess = (response) => {
    toast.success("Thank you for your donation!");
    // Here you can send the donation details to your backend
    console.log("Payment successful:", response);
    // Reset form
    setName("");
    setEmail("");
    setMessage("");
    setAmount("");
    setIsProcessing(false);
  };

  const handlePaymentFailure = (error) => {
    toast.error("Payment failed. Please try again.");
    setIsProcessing(false);
  };

  return (
    <section className="donate">
      <form onSubmit={handleSubmit}>
        <div>
          <img src="/logo.png" alt="logo" />
        </div>
        <div>
          <label>Show your love for Poors</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter Donation Amount (INR)"
            min="1"
            required
          />
        </div>
        <input 
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your Name"
          required
        />
        <input 
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email Address"
          required
        />
        <input 
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Message (Optional)"
        />
        {isProcessing ? (
          <Payment
            amount={Number(amount)}
            onSuccess={handlePaymentSuccess}
            onFailure={handlePaymentFailure}
            buttonText={`Donate ₹${amount}`}
            buttonClassName="btn"
          />
        ) : (
          <button type="submit" className="btn">
            Proceed to Donate {amount ? `₹${amount}` : "₹0"}
          </button>
        )}
      </form>
    </section>
  );
};

export default Donate;
