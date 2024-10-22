import React, { createContext, useState } from 'react';

export const CartContext = createContext();


export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [notification, setNotification] = useState('');

    const addToCart = (product) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find(item => item.title === product.title);
            if (existingItem) {
                const updatedCart = prevCart.map(item =>
                    item.title === product.title ? { ...item, quantity: item.quantity + 1 } : item
                );
                setNotification(`Increased quantity of ${product.title} in cart!`);
                return updatedCart;
            } else {
                setNotification(`Added ${product.title} to cart!`);
                return [...prevCart, { ...product, quantity: 1 }];
            }
        });
        setTimeout(() => setNotification(''), 3000); 
    };

    const removeFromCart = (productId) => {
        setCart((prevCart) => prevCart.filter(item => item.title !== productId));
        setNotification(`Removed ${productId} from cart!`);
        setTimeout(() => setNotification(''), 3000);
    };

    const incrementQuantity = (productId) => {
        setCart((prevCart) => {
            const updatedCart = prevCart.map(item =>
                item.title === productId ? { ...item, quantity: item.quantity + 1 } : item
            );
            setNotification(`Increased quantity of ${productId}!`);
            return updatedCart;
        });
        setTimeout(() => setNotification(''), 3000);
    };

    const decrementQuantity = (productId) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find(item => item.title === productId);
            if (existingItem.quantity > 1) {
                const updatedCart = prevCart.map(item =>
                    item.title === productId ? { ...item, quantity: item.quantity - 1 } : item
                );
                setNotification(`Decreased quantity of ${productId}!`);
                return updatedCart;
            } else {
                return prevCart.filter(item => item.title !== productId);
            }
        });
        setTimeout(() => setNotification(''), 3000);
    };

    const getTotalQuantity = () => {
        return cart.reduce((total, item) => total + item.quantity, 0);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, incrementQuantity, decrementQuantity, notification, getTotalQuantity }}>
            {children}
            {notification && <div style={{ color: 'green', textAlign: 'center', margin: '10px 0' }}>{notification}</div>}
        </CartContext.Provider>
    );
};
