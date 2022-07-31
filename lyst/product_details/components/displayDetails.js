
// function for display product details 
let display = (data, ProductImages, productMainImage, productDetails) => {

    document.title = `${data.product_card.designer_name} ${data.product_card.short_description} | Lyst`
    // const ProductImages = document.querySelector('#ProductImages');

    const smallImage = document.createElement('img');
    smallImage.id = "smallImage"
    smallImage.src = data.product_card.image_url;

    ProductImages.append(smallImage)

    // const productMainImage = document.querySelector('#productMainImage');
    const mainImage = document.createElement('img');
    mainImage.id = "mainImage"
    mainImage.src = data.product_card.image_url;

    productMainImage.append(mainImage)

    // const productDetails = document.querySelector('#productDetails');
    const brand = document.createElement('h2');
    brand.id = "brand"
    brand.innerText = data.product_card.designer_name;

    const detail = document.createElement('p');
    detail.id = "detail"
    detail.innerText = data.product_card.short_description

    const priceAndFrom = document.createElement('div');
    priceAndFrom.id = "priceAndFrom"

    const priceDiv = document.createElement('div');
    priceDiv.id = "priceDiv"

    const price = document.createElement('h3');
    price.id = "price"
    price.innerText = data.product_card.sale_price_with_currency_symbol

    const oldPrice = document.createElement('h4');
    oldPrice.id = "oldPrice"
    oldPrice.innerText = data.product_card.full_price_with_currency_symbol

    priceDiv.append(price, oldPrice)

    const fromDiv = document.createElement('div');
    fromDiv.id = "fromDiv"

    const fromSpan = document.createElement('span');
    fromSpan.id = "fromSpan"
    fromSpan.innerText = data.product_card.retailer_name

    const from = document.createElement('p');
    from.id = "from"
    from.innerText = "From "
    from.append(fromSpan)

    fromDiv.append(from)

    priceAndFrom.append(priceDiv, fromDiv)

    const shopNowDiv = document.createElement('div');
    shopNowDiv.id = "shopNowDiv"

    const shopNow = document.createElement('div');
    shopNow.id = "shopNow"
    shopNow.innerText = "Shop Now"

    const shopNow1 = document.createElement('div');
    shopNow1.id = "shopNow1"
    shopNow1.innerText = "Shop Now"

    const shopNow2 = document.createElement('div');
    shopNow2.id = "shopNow2"
    shopNow2.innerText = "Shop Now"

    shopNowDiv.append(shopNow, shopNow1, shopNow2)
    shopNowDiv.addEventListener("click", shopNowFunc)

    // function for do shopping 
    function shopNowFunc() {
        let a = data.product_card.link_id
        window.location.href = `https://www.lyst.com/track/lead/${a}`
    }

    const trackDiv = document.createElement('div');
    trackDiv.id = "trackDiv"

    trackDiv.addEventListener("click", trackFunc)

    let saved = `<p class="heartIcon"><i class='fas fa-heart' style='font-size:28px; color:red;'></i></p>
    <p id="trackDeals">Saved</p>`

    let track = `<p class="heartIcon"><i class='far fa-heart' style='font-size:28px'></i></p>
    <p id="trackDeals">Track Deals</p>`

    trackDiv.innerHTML = track
    let i = 0
    let wishArr = JSON.parse(localStorage.getItem("wishdata")) || []
    // function for adding data of wishlist in local storage
    function trackFunc() {

        if (i == 0) {
            trackDiv.innerHTML = saved
            wishArr.push(data)
            localStorage.setItem("wishdata", JSON.stringify(wishArr))
            i++
        } else if (i == 1) {
            trackDiv.innerHTML = track
            wishArr.splice(data, 1)
            // window.localStorage.removeItem("wishdata")
            localStorage.setItem('wishdata', JSON.stringify(wishArr));
            i = 0
        }  
    }

    productDetails.append(brand, detail, priceAndFrom, shopNowDiv, trackDiv)
}

export default display

