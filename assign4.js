const products =[
    {name:"laptop", price:120000},
    { name: "mobile", price: 70000 },
    { name: "laptop bag", price: 20000 },
    { name: "watch", price: 20000 },
    { name: "mobile charger", price: 1500 },
];

products.forEach((item)=> {
    if(item.price >=100000){
        console.log("The product with maximum amount is "+item.name +"is priced" +item.price );
    }else if(item.price <5000)
    {
        console.log("The product with minimum amount is " + item.name + "is priced" + item.price);
    }
})

