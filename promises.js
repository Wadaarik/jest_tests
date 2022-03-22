function fetchData(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("error");
        }, 100);
    });
}
// function fetchDataPromiseWithErrorMessage() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject("error");
//         }, 100);
//     });
// }

module.exports=fetchData;
// module.exports=fetchDataPromiseWithErrorMessage;