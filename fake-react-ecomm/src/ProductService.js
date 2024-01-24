
function GetProducts() {
    // Later, we can call the FakeStoreAPI

    const products = [
        { id: 1, title: 'Good Pants', description: 'Best pants ever if you want to do stuff', price: '44.99' },
        { id: 2, title: 'Great Tyres', description: 'Good for driving in wet weather', price: '85.38' },
        { id: 3, title: 'Ok Chair', description: 'Its ok, not that great though', price: '1385.74' },
    ];

    return products;
}
export default GetProducts