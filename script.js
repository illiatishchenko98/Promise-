'use strict';









console.log('data request');

const req = new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log('prepearing data');
        const product = {
    
            name: 'TV',
            price: 2000
        };
        resolve(product);
    },2000);
});




    
req.then((product) => {

    const req2 = new Promise((resolve, reject) => {
        setTimeout(() => {

            product.status = 'ordered';
            resolve(product);
        }, 2000);
    });
    req2.then(data => {
        console.log(data);
    })
});