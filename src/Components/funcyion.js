export default function calculateTotal(price) {

    
    if (price >= 100) {
        let dicountedPrice = price * 0.8;
        return dicountedPrice 
    } else {
       return price 
    }
    
}

;
function calculateTotasl(price) {
  if (price >= 100) {
    let discountPrice = price * 0.8;
    return "Discount applied! Your total is: $" + discountPrice;
  } 
  return "No discount. Total: $" + price;
}
alert (calculateTotasl(200));