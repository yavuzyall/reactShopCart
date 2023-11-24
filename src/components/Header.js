import Cart from "./Cart";


function Header({cartItems}) {
    return (
        <div className='flex justify-between mt-2 items-center'>
            <h1 className='text-2xl text-green-900 flex justify-start'>Shopping Cart - Sepet</h1>
            <Cart cartItems={cartItems}></Cart>
        </div>
    );
}

export default Header;