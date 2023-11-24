function Product({ product, onAddToCart, cart  }) {

    const findProduct = cart.find((item) => item.id === product.id)

    const handleClick = (event) => {
        onAddToCart(product.id)
    }

    return (
        <div className="border p-4 m-2 rounded-lg shadow-lg">
            <img src="https://via.placeholder.com/250" alt="" className="w-full h-48 object-cover rounded-t-lg" />
            <div>
                <h2 className="text-xl font-semibold my-2">{product.name}</h2>
                <p className="text-gray-500 my-2">{product.price} TL</p>
                <button className={`bg-blue-500 text-white px-4 rounded hover:bg-blue-600 w-full h-10 ${findProduct && "opacity-50 cursor-no-drop"}`} onClick={handleClick} disabled={findProduct}>Sepete Ekle</button>
            </div>
        </div>
    );
}

export default Product;