import Button from './Button';

const App = () => {
    const handleClick = () => {
        console.log('Button clicked!');
    };

    return (
        <div>
            <Button onClick={handleClick}>Checkout</Button>
        </div>
    );
};