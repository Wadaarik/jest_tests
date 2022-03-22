function fetchData(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("peanut butter");
        }, 100);
    });
}

module.exports=fetchData;