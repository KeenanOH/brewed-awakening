type ViewCartButtonProps = {
    label: string
    onClick: () => void
}
import React from 'react';

const ViewCartButton = () => {
    const goToCart = () => {
        window.location.href = '/cart';
    };

    return (
        <button onClick={goToCart}>View Cart</button>
    );
};

export default ViewCartButton;
