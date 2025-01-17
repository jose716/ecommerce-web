import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:8080/api/",
});

// const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
const targetUrl = 'https://testsecureacceptance.cybersource.com/silent/pay';

export const UserSignUp = async (data) => await API.post("/user/signup", data);
export const UserSignIn = async (data) => await API.post("/user/signin", data);

//Products
export const getAllProducts = async (filter) =>
    await API.get(`/products?${ filter }`);

export const getProductDetails = async (id) => await API.get(`/products/${ id }`);

//Cart
export const getCart = async (token) =>
    await API.get("/user/cart", {
        headers: { Authorization: `Bearer ${ token }` },
    });

export const addToCart = async (token, data) =>
    await API.post(`/user/cart/`, data, {
        headers: { Authorization: `Bearer ${ token }` },
    });

export const deleteFromCart = async (token, data) =>
    await API.patch(`/user/cart/`, data, {
        headers: { Authorization: `Bearer ${ token }` },
    });

//Favourites
export const getFavorite = async (token) =>
    await API.get(`/user/favorite`, {
        headers: { Authorization: `Bearer ${ token }` },
    });

export const addToFavorite = async (token, data) =>
    await API.post(`/user/favorite/`, data, {
        headers: { Authorization: `Bearer ${ token }` },
    });

export const deleteFromFavorite = async (token, data) =>
    await API.patch(`/user/favorite/`, data, {
        headers: { Authorization: `Bearer ${ token }` },
    });

//Orders
export const placeOrder = async (token, data) =>
    await API.post(`/user/order/`, data, {
        headers: { Authorization: `Bearer ${ token }` },
    });

export const getOrders = async (token) =>
    await API.get(`/user/order/`, {
        headers: { Authorization: `Bearer ${ token }` },
    });

// CyberSourceProcess
export const checkoutOrder = async (data) =>
    // await axios.post(proxyUrl + targetUrl, data, {
    await axios.post(targetUrl, data, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });