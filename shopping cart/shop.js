var product = [
    {
        id: 1,
        name: "Iphone 15",
        price: 2500,
        category: "phone"
    },
    {
        id: 2,
        name: "Redmi 12",
        price: 300,
        category: "phone"
    },
    {
        id: 3,
        name: "Samsung",
        price: 1500,
        category: "phone"
    },
    {
        id: 4,
        name: "HP",
        price: 500,
        category: "computer"
    },
];
var cart = [];
var addToCart = function (id) {
    product.map(function (data) { return data.id == id ? cart.push(data) : data; });
    return cart;
};
var deleteToCart = function (id) {
    if (cart.length > 0) {
        return cart = cart.filter(function (data) { return data.id !== id; });
    }
};
// terminalda natijalarni oldim
addToCart(4);
console.log("add product: ", cart);
addToCart(3);
console.log("add new product: ", cart);
deleteToCart(3);
console.log("delete product: ", cart); // id=3 bolgan product ochirildi
