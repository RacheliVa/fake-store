const BASE_URL = "https://fakestoreapi.com/products";

export const getJewelry = async () => {
    const response = await fetch(`${BASE_URL}/category/jewelery`);
    const data = await response.json();
    return data;
};

export const getElectronics = async () => {
    const response = await fetch(`${BASE_URL}/category/electronics`);
    const data = await response.json();
    return data;
};