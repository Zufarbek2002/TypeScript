type Product = {
    id: number;
    name: string;
    price: number;
    category: string
}

let product: Product[] = [
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

]

let cart: Product[] | null = [];

const addToCart = (id:number) => {
    product.map(data => data.id == id ? cart.push(data) : data)
    return cart
}

const deleteToCart = (id:number) => {
    if (cart.length>0) {
        return cart = cart.filter(data=>data.id !== id)
    }
}

// terminalda natijalarni oldim

addToCart(4)
console.log("add product: ", cart)

addToCart(3)
console.log("add new product: ", cart)

deleteToCart(3)
console.log("delete product: ", cart) // id=3 bolgan product ochirildi