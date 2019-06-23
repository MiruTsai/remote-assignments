/*assignment3*/
function avg(data) {

    var total = 0;

    for (var i = 0; i < data.size; i += 1) {
        total += data.products[i].price;
    }
    var avgPrice = total / data.size;
    return avgPrice ;
};

console.log(avg({
    size: 3,
    products: [
        { name: "Product 1", price: 100 },
        { name: "Product 2", price: 700 },
        { name: "Product 3", price: 250 }]
}));

