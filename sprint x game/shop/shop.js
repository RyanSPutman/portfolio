let shopitems = [
    {
        "id": "0",
        "itemName": "1 key",
        "itemType": "Key",
        "img": "rose.jpg",
        "cost": "100",
        "omschrijving": "Je krijgt 1 Sleutel",
        "time": "",
        "uses": "1"
    },
    {
        "id": "1",
        "itemName": "3 keys",
        "itemType": "Key",
        "img": "rose.jpg",
        "cost": "250",
        "omschrijving": "Je krijgt 3 Sleutesl",
        "time": "",
        "uses": "3"
    },
    {
        "id": "2",
        "itemName": "5 keys",
        "itemType": "Key",
        "img": "rose.jpg",
        "cost": "400",
        "omschrijving": "Je krijgt 5 Sleutels",
        "time": "",
        "uses": "5"
    },

    {
        "id": "2",
        "itemName": "15 minute Warp",
        "itemType": "Warp",
        "img": "rose.jpg",
        "cost": "10000",
        "omschrijving": "Je krijgt 15 minuten aan Clicks per seconde in 1 keer",
        "time": "",
        "uses": "1"
    },

    {
        "id": "3",
        "itemName": "5% click boost",
        "itemType": "Boost",
        "img": "rose.jpg",
        "cost": "5000",
        "omschrijving": "een permanente 5% boost naar clicks ",
        "time": "",
        "uses": ""
    },

    {
        "id": "5%",
        "itemName": "5% boost naar C/PS",
        "itemType": "Boost",
        "img": "rose.jpg",
        "cost": "2000",
        "omschrijving": "een permanente 5% boost naar clicks per seconde ",
        "time": "",
        "uses": ""
    },
    {
        "id": "5",
        "itemName": "+50%",
        "itemType": "",
        "img": "rose.jpg",
        "cost": "15000",
        "omschrijving": "+50% money",
        "time": "",
        "uses": ""
    }

]

window.onload(shopRotatie())

let delay= 12000
setInterval(shopRotatie, delay)



function shopRotatie(){
    let sheep = document.querySelector(".shop-items")
    sheep.innerHTML = ""

let shoparray = [];
shoparray = shopitems

let items = []
items = booger(items)
console.log(items)


items.forEach(element => {
    //background
let balls  = sheep.appendChild(document.createElement('div'));
balls.classList.add("item")


let shopItemName = balls.appendChild(document.createElement('p'))
shopItemName.innerText = shopitems[element].itemName

let shopimage = balls.appendChild(document.createElement("img"))
shopimage.src = shopitems[element].img
shopimage.classList.add('item-image')

let shopdescription = balls.appendChild(document.createElement('p'))
shopdescription.innerText = shopitems[element].omschrijving

let middlediv = balls.appendChild(document.createElement('div'))
middlediv.classList.add('middlediv')

let coinimage =  middlediv.appendChild(document.createElement('img'))
coinimage.src = "coin.png"
coinimage.classList.add('coin-image')

let shopPrice = middlediv.appendChild(document.createElement('p'))
shopPrice.innerText = shopitems[element].cost
shopPrice.classList.add('shop-item-price')

let purchaseShopItem =balls.appendChild(document.createElement("div"))
purchaseShopItem.classList.add('shop-purchase')

let buybotton = purchaseShopItem.appendChild(document.createElement("img"))
buybotton.src = "buy.png"
buybotton.classList.add('shop-item-purchase')
buybotton.id = shopitems[element].id


});

function booger(items){
    for(var i = 0; i <=2; i++ ){
    items.push((Math.floor(Math.random() * shoparray.length)))
    }
    return items
}

}

document.addEventListener("click", (e) =>{
    let vord = e.target.id
    purchaseItem(vord)
})

function purchaseItem(x){

        
    
}







