//Array Methods (Map, ForEach, Filter And Find )

const products = [
    {name : 'laptop' , brand: 'hp',  price: 35000, color : 'silver'},
    {name : 'mobile' , brand: 'iphone',  price: 5000, color : 'black'},
    {name : 'sunglass' , brand: 'gucci',  price: 15000, color : 'green'},
    {name : 'watch' , brand: 'titan',  price: 12000, color : 'silver'}
]
//this is called array of object
//map used for get specific object value in array, it is auto loop function

const brand = products.map(product => product.brand);
//console.log(brand);
const price = products.map(product => product.price);
//console.log(price)

//to print array of object we can use foreach loop

products.forEach(product => console.log(product));

//products.forEach(product <======== here we get product for using foreach));

//what is different foreach and map
    // map can return
    // foreach did not return anything

    //===============================================================================================================
    // Filter in array used to get value with specific condition

    const cheap = products.filter(product => product.price < 15000);
    console.log(cheap);
    const specificItem = products.filter(p => p.name.includes('l'));
    console.log(specificItem);

    //find in array
    const special = products.find(p => p.name.includes('l'))
    console.log(special)

    //different between find and filter is , filter return multiple vale but find return only one value
