function navbar (){
    return ` <div id="sign-join">
    <p class="nav-p-tag">IN-US$</p>
    <p class="nav-p-tag">Help</p>
    <a href = "login.html"><p class="nav-p-tag">Sign in</p></a>
    <a href = "login.html"><button id="joinbtn">Join</button></a>
</div>
<div id="search-div">
    <a id="loNav" href = "index.html"><img id="loNav" src="assets/lyst-logo.png" alt=""></a>
    <h6 class="h6"><a href = "products.html" style="color: black">PRODUCTS</a></h6>
    <h6 class="h6" style="text-decoration: none;"></h6>
    <div id="search">
        <img src="assets/icons8-search-500.png" alt="" id="search-img">
        <input type="text" placeholder="SEARCH (E.G. \`VALENTINO DRESSES\`)" id="input">
    </div>
    <a> <img id="seNav" src="assets/Screenshot 2022-06-15 112642.png" alt="" class="shortcut" style="width: 105px;"> </a>
    <a href = "track.html"> <img id="wiNav" src="assets/Screenshot 2022-06-15 112656.png" alt="" class="shortcut" style="width: 105px;"></a>
   
    <a> <img id="alNav" src="assets/Screenshot 2022-06-15 112708.png" alt="" class="shortcut" style="width: 105px;"> </a>


</div>`
}

export {navbar}