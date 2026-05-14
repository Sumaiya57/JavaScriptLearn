class mobile{
    constructor(brand ,price){
        this.brand=brand;
        this.price =price;
    }
    showInfo(){
        console.log(`brand:${this.brand} price:${this.price}`);
    }
}
const mobile1 = new mobile("Apple", 1000);
mobile1.showInfo();

class smatphone{
    constructor(brand,owner){
        this.brand=brand;
        this.owner=owner;
    }
    showData(){
    console.log(`Brand:${this.brand} Owner:${this.owner}`);
}
}
const smartphone1 = new smatphone("Samsung", "Rahim");
smartphone1.showData();