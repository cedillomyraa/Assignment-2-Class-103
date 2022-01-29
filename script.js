let productName;
let quantity;
let price;


let taxrate = (8/100)

let SubTotal;//this does not need to be prompt because its not for the user to calculate. 
let taxAmount;
let totalDue;

productName = prompt("Please enter product name");
quantity = prompt(" Enter quantity");
price = prompt("Enter price");

SubTotal= (price*quantity)
taxAmount=(SubTotal*taxrate)
totalDue=(SubTotal+taxAmount)

console.log("Product Name", productName, "Total Quantity", quantity, "Price", price,);
console.log("SubTotal: ", (price*quantity)); //a calculation is a function needs brackets
console.log("Tax Amount",taxAmount );
console.log("Total Due $", totalDue);


document.write('<h2 class="product-price"> Product Name: ' , productName , '</h2>');
document.write('<h2 class="product-price"> Quantity: ' , quantity, '</h2>');
document.write('<h2 class="product-price"> Price: ' , '$', price, '</h2>');
document.write('<h2 class="product-price"> Subtotal: ', '$' , (SubTotal ).toFixed(2), '</h2>');
document.write('<h2 class="product-price"> Taxes: ' , '$', (taxAmount ).toFixed(2), '</h2>');
document.write('<h2 class="product-price"> Total Due: ', '$', (totalDue).toFixed(2), '</h2>');



//document.write('<img src="https://www.pikpng.com/pngl/m/129-1299692_shopping-cart-png-icon-shop-cart-icon-png.png" width="20" height="20">' + 'Quantity:' + quantity);

//document.write('<h1> Total Due: ' , '$', (totalDue).toFixed(2) , '</h1>');

