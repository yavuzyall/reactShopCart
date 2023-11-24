function CartItem({ cartItems, setCartItems }) {

    let showCart = false;

    if (cartItems.length === 0) {
        showCart = false;
    } else {
        showCart = true;
    }

    const calculateTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.price, 0);
    };

    const handleEmptyCart = () => {
        setCartItems([]);
    }


    return (
        <div>
            {showCart ? (<div className="border w-72 ml-auto p-4 mt-4 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-4">Sepet</h2>
                <ul>
                    {cartItems.map((item) => (
                        <li key={item.id} className="mt-2 flex justify-between">
                            <span>{item.name}</span>
                            <span>{item.price} TL</span>
                        </li>
                    ))}
                </ul>
                <hr className="my-4" />
                <p className="font-semibold text-xl">Toplam: {calculateTotalPrice()} TL</p>
                <button className="bg-red-500 text-white px-4 mt-4 rounded py-2 hover:bg-red-600 transition-all" onClick={handleEmptyCart}>Sepeti Boşalt</button>
            </div>) : null}

        </div>

    );
}

export default CartItem;