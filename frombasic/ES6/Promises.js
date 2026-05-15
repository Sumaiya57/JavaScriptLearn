const orderFood = new Promise((resolve, reject) => {

    let restaurantOpen = true;

    if (restaurantOpen) {
        resolve("Burger delivered");
    } else {
        reject("Restaurant closed");
    }

});

orderFood
    .then((food) => {
        console.log(food);
    })
    .catch((error) => {
        console.log(error);
    });
// Simulating an asynchronous operation with a timeout
const downloadData = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve("Data downloaded");
    }, 3000);

});

downloadData.then((data) => {
    console.log(data);
});

//ex-3
const loginUser = new Promise((resolve,reject) => {
    let success =true;
    setTimeout(() => {
        if (success) {
            resolve("User logged in");
        } else {
            reject("Invalid password");
        }
    }, 2000);
});
loginUser.then((login) => {
    console.log(login);
});
loginUser.catch((error) => {
    console.log(error);
});

//ex-4 -Promise Chaining
function promise(){ 
    return new Promise((resolve, reject) => {
     resolve(5);
});
}
promise()
      .then((num) => {
    console.log(num);
        return num* 2;
}).then((num1)=>{
    console.log(num1);
    return num1 * 3;

}).then((num2) => {
    console.log(num2);
    return num2 *4 ;
}).then((finalNum) => {

        console.log(finalNum);

    });
