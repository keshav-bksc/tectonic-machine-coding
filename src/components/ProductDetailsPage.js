import ProductImage1 from '../assets/image1.jpeg';

const ProductDetailsPage = () => {
    return (
        <div>
            <div>
                <img src={ProductImage1} alt='product details' width='300px' height='460px'/>
            </div>
            <div>
                <h2>Product Name: Men's Stylish Denim Jacket</h2>
                <p>Price: $40</p>
                <p>Cloth type: Cotton</p>
                <p>Rating: 5/5</p>
            </div>
        </div>
    )
}

export default ProductDetailsPage;
