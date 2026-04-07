import React from 'react';

// Helper to create wrapper components
export const createComponent = (tag) => {
  return function WrapperComponent({ children, className = '', ...props }) {
    const Tag = tag;
    return <Tag className={className} {...props}>{children}</Tag>;
  };
};

export const scrollToWaitlist = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
}

export const scrollToEarlyAccess = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
}

export const handleEarlyAccessClick = async () => {
    try {
        const apiBase = import.meta.env.VITE_API_URL || 'http://localhost:5000';
        const response = await fetch(`${apiBase}/api/subscription/early-access`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: 'test@example.com', name: 'Test User' }) // In a real app, you'd collect this first
        });
        const data = await response.json();
        
        if (response.status === 400 || !data.orderId) {
            alert(data.error || 'Failed to initialize payment. Check backend logs.');
            return;
        }

        const options = {
            key: data.keyId,
            order_id: data.orderId,
            amount: data.amount,
            currency: 'INR',
            name: "ComplianceCalendar",
            description: "Early Access Subscription",
            handler: async function (response) {
                // Verify payment
                const apiBase = import.meta.env.VITE_API_URL || 'http://localhost:5000';
                const verifyRes = await fetch(`${apiBase}/api/subscription/verify-payment`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        razorpay_payment_id: response.razorpay_payment_id,
                        razorpay_order_id: response.razorpay_order_id,
                        razorpay_signature: response.razorpay_signature,
                        email: 'test@example.com',
                        name: 'Test User'
                    })
                });
                const verifyData = await verifyRes.json();
                if (verifyData.success) {
                    alert('Payment successful! Welcome to early access.');
                } else {
                    alert('Payment verification failed.');
                }
            },
            theme: {
                color: "#9333ea"
            }
        };
        const rzp1 = new window.Razorpay(options);
        rzp1.open();
    } catch (err) {
        console.error('Error opening Razorpay:', err);
        alert('Could not open payment gateway.');
    }
}
