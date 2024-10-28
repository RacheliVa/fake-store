const BASE_URL = "https://fakestoreapi.com/products";
const MY_BASE_URL = 'http://localhost:3000'; 

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


export const getBooks = async () => {
    try {
        const response = await fetch(`${MY_BASE_URL}/books`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Failed to fetch:", error);
    }
};
