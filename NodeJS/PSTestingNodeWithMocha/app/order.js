

// module.exports = (cart, cb) => {
//     // Simulated code - DB call
//     setTimeout(() => {
//         cb(true)
//     }, 500)
// }


module.exports = (cart) => {
    let p = new Promise((resolve, reject) => {
        resolve(500);
    })
    return p;
}