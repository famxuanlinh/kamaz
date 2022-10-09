const productsData = require('./products.json');
const fetch = require('node-fetch');
//Nodejs dùng es5

console.log(productsData);

// API

const createProduct = (payload) => {
    fetch('http://localhost:1337/content-manager/collection-types/api::product.product', {
        method: 'POST',
        headers: {
            'Accept-Language': 'en-US,en;q=0.9',
            Authorization:
                'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjY1MzAzMzQwLCJleHAiOjE2Njc4OTUzNDB9._o5Kv8PpJ5K_MoLoqc4K9XXmalb20mIZWhZ-kyXGiyg',
            Connection: 'keep-alive',
            'Content-Type': 'application/json',
            DNT: '1',
            Origin: 'http://localhost:1337',
            'Sec-Fetch-Dest': 'empty',
            'Sec-Fetch-Mode': 'cors',
            'Sec-Fetch-Site': 'same-origin',
            'User-Agent':
                'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36 Edg/106.0.1370.37',
            accept: 'application/json',
            'sec-ch-ua': '"Chromium";v="106", "Microsoft Edge";v="106", "Not;A=Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
        },
        // body: '{\n  "data": {\n    "name": "string",\n    "description": "string",\n    "categories": [\n      "string or id",\n      "string or id"\n    ],\n    "stock": 0,\n    "sku": "string",\n    "images": [\n      "string or id",\n      "string or id"\n    ],\n    "price": 0,\n    "performance": "string",\n    "products": [\n      "string or id",\n      "string or id"\n    ],\n    "content": "string",\n    "slug": "string",\n    "weight": 0,\n    "height": 0,\n    "width": 0,\n    "length": 0,\n    "tag": "string",\n    "madeIn": "string",\n    "brand": "string",\n    "discount": 0,\n    "sold": 0,\n    "locale": "string"\n  }\n}',
        body: JSON.stringify({
            name: payload.name,
            description: payload.name,
            stock: payload.stock,
            sku: payload.sku,
            price: payload.price,
        }),
    })
        .then((res) => res.json())
        .then((res) => {
            console.log(res);
        });
};

// Insert Product
const insertProducts = async () => {
    for await (const product of productsData) {
        // console.log(productsData);
        await createProduct(product);
    }
};

insertProducts();
