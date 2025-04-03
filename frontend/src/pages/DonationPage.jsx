import React, { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import Payment from '../components/Payment';

const DonationPage = () => {
    const [amount, setAmount] = useState(100);
    const [donationType, setDonationType] = useState('one-time');

    const handlePaymentSuccess = (response) => {
        console.log('Payment successful:', response);
        // Here you can update your database or show a success message
    };

    const handlePaymentFailure = (error) => {
        console.error('Payment failed:', error);
        // Here you can handle the failure case
    };

    return (
        <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <Toaster position="top-right" />
            
            <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold text-center mb-6">Make a Donation</h2>
                
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Donation Type
                    </label>
                    <select
                        value={donationType}
                        onChange={(e) => setDonationType(e.target.value)}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="one-time">One-time Donation</option>
                        <option value="monthly">Monthly Donation</option>
                    </select>
                </div>

                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Amount (INR)
                    </label>
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(Number(e.target.value))}
                        min="1"
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="flex justify-center">
                    <Payment
                        amount={amount}
                        onSuccess={handlePaymentSuccess}
                        onFailure={handlePaymentFailure}
                        buttonText={`Donate ₹${amount}`}
                        buttonClassName="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-lg transition duration-300"
                    />
                </div>
            </div>
        </div>
    );
};

export default DonationPage; 