
import React from 'react';
import { RouteComponentProps } from "react-router-dom";

const CheckoutButton: React.FC<RouteComponentProps> = ({ history }) => {
    const handleClick = () => {
        history.push('/checkout');
    };

    return (
        <button onClick={handleClick}>Checkout</button>
    );
};

export default CheckoutButton;
