const product = {
    fakeDB: [{
        name: "Boiled shrimp + cassava foufou",
        image: "/images/products/3x3_ruberic.jpg",
        price: "12.99",
        
        
    },
    {

        name: "Ndole leaf + fried plantain",
        image: "/images/products/brown_dressing_table.jpg",
        price: "25.99",
        
        
    },
    { 
        name: "",
        image: "/images/products/white_tee.jpg",
        price: "12.99",
        
        

        name: "Meat shawarma wrap",
        image: "/images/products/baz_liter.jpg",
        price: "15.99",
        
        
    },
    { 
        name: "Fried snail",
        image: "/images/products/minion_toy.jpg",
        price: "19.99",
        
        

    },
    {
        name: "Cassava leaf + corn foufou",
        image: "/images/products/teddy_bear_soft_toy.jpg",
        price: "12.99",
        
        
    },
    {

        name: "Goat meat suya",
        image: "/images/products/camera_set.jpg",
        price: "19.99",
        
        
    },
    {
        name: "",
        image: "/images/products/white_lamp_hanging.jpg",
        price: "39.99",
        

        name: "Sautéed beef pot",
        image: "/images/products/robot.jpg",
        price: "24.99",
        
        
    },
    {
        name: "Triangle cake",
        image: "/images/products/vintage_black.jpg",
        price: "6.99",
        

        
    },
],

    getAllProducts() {
        return this.fakeDB;
    }
} 

module.exports = product;