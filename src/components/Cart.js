import { FiShoppingCart } from 'react-icons/fi'

function Cart({cartItems}) {
    return (
        <div>
            <div className='relative'>
                <FiShoppingCart className='text-2xl' />
                <span className='bg-red-500 text-white rounded-full w-5 h-5 flex justify-center items-center absolute -top-2 -right-3 text-xs'>{cartItems.length}</span>
            </div>
        </div>
    );
}

export default Cart;