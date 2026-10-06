const prices= {
  apple: 1.2,
  banana: 0.8,
  orange: 1.5
};

const priceArray = Object.entries(prices);
console.log(priceArray);


const exp = priceArray.filter((item) => { 
       console.log(item);
       return item 
})
