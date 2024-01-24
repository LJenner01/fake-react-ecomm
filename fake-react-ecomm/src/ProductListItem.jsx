import './ProductListItem.css'
function ProductListItem(props) {
    const product = props;
    return (
        <li key={product.id}>
            <div>{product.title}</div>
            <div>{product.description}</div>
            <div>${product.price}</div>
        </li>
    )
}

export default ProductListItem