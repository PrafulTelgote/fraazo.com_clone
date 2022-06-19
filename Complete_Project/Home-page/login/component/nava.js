let userData = JSON.parse(localStorage.getItem("userData"));
console.log(userData);

function nava() {
  return `  <div >
    <img src="images/download.png" alt="">
</div>
<div id="location">
   <img src="images/location.png" alt="" onclick="getLOcation()"> <span>Powai</span>
</div>
<div id="search">
 <input type="text" name="" id="" placeholder="Find fresh  vegetables,fruits and dairy">
</div>
<div class='cartDiv'>
<div class="cart">
    <img src="images/icons8-shopping-cart-with-money-24.png" alt=""><span>Cart</span>
</div>
<div class="cart" id="walet">
    <img src="images/icons8-wallet-50.png" alt=""><span>Credit</span>
</div>
<div class="cart" >
    <img src="images/icons8-person-32.png" alt=""><span>${userData.firstname}</span>
</div>
</div>

`;
}
export default nava;
