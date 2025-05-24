import productsData from "../data"
import { getCurrentUser } from "./auth";

export const getUsers = ()=>{
    const users = localStorage.getItem("Users")
    return users ? JSON.parse(users) : [];
};

export const saveUser=(user)=>{
    const users = getUsers();
    console.log(users);
    users.push(user);
    
    localStorage.setItem("Users",JSON
        .stringify(users)
    );
    console.log(users)
};

const getProductId = ()=>{
    let id = localStorage.getItem("productId")
    if(!id){
        localStorage.setItem("productId" , "1")
        return 1;
    }
    let nextId = parseInt(id) + 1;
    localStorage.setItem("productId" , nextId.toString())
    return nextId;
}

export const seedProducts = ()=>{
    if(!localStorage.getItem("products")){
        localStorage.setItem("products" , JSON.stringify(productsData))
    }
}
export const getProducts = ()=>{
    
    return JSON.parse(localStorage.getItem("products")) || []
}
export const addProducts = (product)=>{
    const products = getProducts();
    const id = getProductId();
    const newProduct = {
        ...product,
        id 
    }
    products.push(newProduct);
    localStorage.setItem("products" , JSON.stringify(products))
}

export const myListings = (firstName)=>{
    const products = getProducts();
    return products.filter((product) => product.seller === firstName);
}

export const deleteProduct = (id) =>{
    let products = getProducts();
    products = products.filter((product) => product.id !== id);
    localStorage.setItem("products" , JSON.stringify(products))
}
