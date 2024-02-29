import "./Product.css";

function Product({ title, price = 2 }) {

    return (
        <div className="Product">
            <h3>Title : {title}</h3>
            <h5>Price : {price}</h5>
        </div>
    );
}

export default Product;