''''const prices= {
  apple: 1.2,
  banana: 0.8,
  orange: 1.5
};

const priceArray = Object.entries(prices);
console.log(priceArray);


const exp = priceArray.filter((item) => { 
       console.log(item);
       return item 
});

console.log(exp);


const menu = [
       {dish : 'Pasta', price: 12},
       {dish : 'Pizza', price: 15},
       {dish : 'Salad', price: 10}
]
const shopping_list = menu.flatMap((item) => item.ingredients);
console.log(shopping_list);



