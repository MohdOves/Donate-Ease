import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';

const Payment = ({ amount, onSuccess, onFailure, buttonText = "Pay Now", buttonClassName = "" }) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Configure axios defaults
    axios.defaults.withCredentials = true;

    // Load Razorpay script
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    const handlePayment = async () => {
        try {
            setLoading(true);
            setError(null);
            
            // Create order with proper headers
            const orderResponse = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/v1/payment/create-order`, 
                {
                    amount: amount
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    withCredentials: true
                }
            );

            if (!orderResponse.data || !orderResponse.data.id) {
                throw new Error('Failed to create order');
            }

            const options = {
                key: import.meta.env.VITE_RAZORPAY_KEY_ID,
                amount: orderResponse.data.amount,
                currency: "INR",
                name: "Donate-Ease",
                description: "Donation Payment",
                order_id: orderResponse.data.id,
                handler: async (response) => {
                    try {
                        // Verify payment with proper headers
                        const verifyResponse = await axios.post(
                            `${import.meta.env.VITE_BACKEND_URL}/api/v1/payment/verify-payment`,
                            {
                                razorpay_order_id: response.razorpay_order_id,
                                razorpay_payment_id: response.razorpay_payment_id,
                                razorpay_signature: response.razorpay_signature
                            },
                            {
                                headers: {
                                    'Content-Type': 'application/json',
                                },
                                withCredentials: true
                            }
                        );

                        if (verifyResponse.data.message === "Payment verified successfully") {
                            toast.success('Payment successful!');
                            onSuccess && onSuccess(response);
                        } else {
                            throw new Error('Payment verification failed');
                        }
                    } catch (error) {
                        console.error('Payment verification failed:', error);
                        toast.error('Payment verification failed. Please contact support.');
                        onFailure && onFailure(error);
                    }
                },
                prefill: {
                    name: "Donor",
                    email: "donor@example.com",
                },
                theme: {
                    color: "#3399cc"
                },
                modal: {
                    ondismiss: function() {
                        toast.info('Payment cancelled');
                    }
                }
            };

            const razorpayInstance = new window.Razorpay(options);
            razorpayInstance.open();
        } catch (error) {
            console.error('Payment initiation failed:', error);
            setError(error.message || 'Failed to initiate payment');
            toast.error('Failed to initiate payment. Please try again.');
            onFailure && onFailure(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="payment-container">
            {error && (
                <div className="error-message text-red-500 mb-2">
                    {error}
                </div>
            )}
            <button 
                onClick={handlePayment} 
                disabled={loading}
                className={`${buttonClassName || 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'}`}
            >
                {loading ? (
                    <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                    </span>
                ) : buttonText}
            </button>
        </div>
    );
};

export default Payment; 