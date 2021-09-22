const addToDb = id => {
    let shoppingCart = {};
    const exists = getDb();
    if (!exists) {
        shoppingCart[id] = 1;
    }
    else {
        shoppingCart = JSON.parse(exists);
        if (shoppingCart[id]) {
            shoppingCart[id] = shoppingCart[id] + 1;
        }
        else {
            shoppingCart[id] = 1;
        }
    }
    updateCart(shoppingCart);
}

const deleteFromDb = id=>{
    const exists = getDb();
    if (!exists) {
        
    }
    else{
        const shoppingCart = JSON.parse(exists);
        delete shoppingCart[id];
        updateCart(shoppingCart);
    }
}

const getDb = () => localStorage.getItem('shopping_cart');
const updateCart = (cart) => localStorage.setItem('shopping_cart', JSON.stringify(cart));

export { addToDb , deleteFromDb}