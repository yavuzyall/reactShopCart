import Product from "./Product";
import productData from "../productData";


function ProductList({cartItems, setCartItems}) {


    const handleAddToCart = (productId) => {
        const selectedProduct = productData.find((product) => product.id === productId);

        if (selectedProduct) {
            setCartItems((prevCartItems) => [...cartItems, selectedProduct]);
        }
        
    };

    return (
        <div>
            <div className="border-solid border-2 border-indigo-100 rounded-lg mt-12 grid grid-cols-3 gap-10 mb-8">
                {productData.map((product) => (
                    <Product key={product.id} product={product} onAddToCart={handleAddToCart} cart={cartItems}/>
                ))}

            </div>
        </div>
    );
}

export default ProductList;