const bestSeller = {
    fakeDB: [
        {
            name: "Braised fish",
//<<<<<<< HEAD
//=======
            price: 12.99,
//>>>>>>> develop
            image: "./images/best_sellers/sony.jpg",
            tag: "fish"
        },
        {
            name: "Fried riz",
//<<<<<<< HEAD
//=======
            price: 10.99,
//>>>>>>> develop
            image: "./images/best_sellers/bear_costume.jpg",
            tag: "riz"
        },
        {
            name: "Vegetable leaf + cassava foufou",
//<<<<<<< HEAD
//=======
            price: 24.99,
//>>>>>>> develop
            image: "./images/best_sellers/blue_turtleneck.jpg",
            tag: "vegetable"
        },
        {
            name: "Braised goat meat + foufou",

            price: 15.99,

            image: "./images/best_sellers/pillows.jpg",
            tag: "meat"
        }
    ],

    getAllItems() {
        return this.fakeDB;
    }
};

module.exports = bestSeller;