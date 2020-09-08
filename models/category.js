const category = {
    fakeDB: [{
        name: "Pick",
        tag: "Pick",
        image: "/images/categories/clothing.jpg"
    },
    { 
        name: "Heat",   
        tag: "Heat",
        image: "/images/categories/baby.jpg"
    },
    { 
        name: "Eat",
        tag: "Eat",
        image: "/images/categories/electronics.jpg"
    },
    {
        name: "Repeat",
        tag: "Repeat",
        image: "/images/categories/home-decor.jpg"
    }],

    getAllCategories() {
        return this.fakeDB;
    }
} 

module.exports = category;