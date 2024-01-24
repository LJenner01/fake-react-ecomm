import ProductListItem from "./ProductListItem";
function ProductList(props) {
    const productItems = props.products.map(product => (
        <ProductListItem title={product.title} description={product.description} price={product.price}></ProductListItem>
    ))

    return (<>
        <ul>{productItems}</ul>
    </>);

}

export default ProductList