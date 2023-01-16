const upgradefile =[
    
    {
        "id": "0",
        "name": "click worth",
        "upgradeType": "click",
        "upgrade": 1.8,
        "icon": "./images/level up.png",
        "level": 1,
        "cost": 75,
        "costMultiplier": 2
    },
    {
        "id": "1",
        "name": "click boost",
        "upgradeType": "chance",
        "chance": 0,
        "chanceUpgrade": 25,
        "upgrade": 1.8,
        "icon": "./images/level up.png",
        "level": 0,
        "cost": 100,
        "costMultiplier": 2
    },
    {
        "id": "2",
        "name": "triple click",
        "upgradeType": "chance",
        "chance": 0,
        "chanceUpgrade": 25,
        "upgrade": 2,
        "icon": "./images/level up.png",
        "level": 0,
        "cost": 500,
        "costMultiplier": 2
    },

    {
      "id": "3",
      "name": "Small Cps",
      "type": "cps",
      "cps":10,
      "cost": "150",
      "icon": "./images/click.webp",
      "level": 0
    },
  
    {
      "id": "4",
      "name": "Medium Cps",
      "type": "cps",
      "cps":100,
      "cost": "2500",
      "icon": "./images/click.webp",
      "level": 0
    },
  
    {
      "id": "5",
      "name": "Big Cps",
      "type": "cps",
      "cps":1000,
      "cost": "30000",
      "level": 0,
      "icon": "./images/click.webp"
    }
  ]

  let shopitems = [
    {
        "id": "6",
        "itemName": "1 key",
        "itemType": "Key",
        "img": "./images/box.png",
        "cost": "100",
        "omschrijving": "Je krijgt 1 Sleutel",
        "time": "",
        "uses": 1
    },
    {
        "id": "7",
        "itemName": "3 keys",
        "itemType": "Key",
        "img": "./images/box.png",
        "cost": "250",
        "omschrijving": "Je krijgt 3 Sleutesl",
        "time": "",
        "uses": 3
    },
    {
        "id": "8",
        "itemName": "5 keys",
        "itemType": "Key",
        "img": "./images/box.png",
        "cost": "400",
        "omschrijving": "Je krijgt 5 Sleutels",
        "time": "",
        "uses": 5
    },

    {
        "id": "9",
        "itemName": "15 minute Warp",
        "itemType": "Warp",
        "img": "./images/coin.png",
        "cost": "10000",
        "omschrijving": "Je krijgt 15 minuten aan Clicks per seconde in 1 keer",
        "time": "",
        "uses": "1"
    },

    {
        "id": "10",
        "itemName": "5% click boost",
        "itemType": "Boost",
        "boostAmount": 1.05,
        "img": "./images/click.webp",
        "cost": "10000",
        "omschrijving": "een permanente 5% boost naar clicks ",
        "time": "",
        "uses": ""
    },

    {
        "id": "11",
        "itemName": "+50%",
        "itemType": "+",
        "img": "./images/coin.png",
        "cost": "10000",
        "omschrijving": "+50% money",
        "time": "",
        "uses": ""
    }
    

]

let cpsupgrades = [
  
]

window.addEventListener("load",() => {
 shopRotatie();
});


  var cps = 0
  var mpc  = 1
  money = 0;
  var score = document.querySelector(".score")
  score.innerText = money

  document.querySelector(".click-button").addEventListener("mousedown", () =>{
    document.querySelector(".click-button").src = "./images/button.png"
  })

  document.querySelector(".click-button").addEventListener("mouseup", () =>{
    document.querySelector(".click-button").src = "./images/press button.png"
  })

  document.querySelector(".click-button").addEventListener("click", () =>{
    
    var clickworth = clickCalculation(mpc)
    money += clickworth;
    updatescore();

  })

  function clickCalculation(mpc){
    var random = Math.random()* 100;
    random = Math.floor(random)
    if (random < upgradefile[1].chance) {
      mpc = mpc *2
    }
    if(random < upgradefile[2].chance){
      mpc = mpc * 3
    }
    Math.floor(mpc)
    return mpc
  }


for (var i=0;i<upgradefile.length;i++){
  const shop = document.querySelector(".sidenav")
  const shopitem = shop.appendChild(document.createElement('div'));
  shopitem.classList.add('shopitem')
  const kader = shopitem.appendChild(document.createElement('img'));
  kader.classList.add('kader');
  kader.src = "./images/shopkader.png"
  const level = shopitem.appendChild(document.createElement('p'));
  level.classList.add("upgrade-level");
  level.innerText = upgradefile[i].level
  level.id = "L" +[i]
  const icon = shopitem.appendChild(document.createElement('img'));
  icon.classList.add("icon-size");
  icon.src = upgradefile[i].icon
  const name = shopitem.appendChild(document.createElement('p'));
  name.classList.add('upgrade-name')
  name.innerText = upgradefile[i].name
  const cost = shopitem.appendChild(document.createElement('p'));
  cost.classList.add('cost');
  cost.innerText = upgradefile[i].cost
  cost.id = "C" +[i]
  const buy = shopitem.appendChild(document.createElement('img'));
  buy.classList.add('buy');
  buy.src = "./images/buy.png"
  buy.id = upgradefile[i].id

}

let delay= 120000
setInterval(shopRotatie, delay)

function shopRotatie(){
  const itemShop = document.querySelector(".sidenav-right")
    itemShop.innerHTML = ""

let shoparray = [];
shoparray = shopitems

let items = []
items = itemGenerator(items)


const close = itemShop.appendChild(document.createElement('img'))
close.src = "./images/exit.png"
close.classList.add("close")
close.id = "close-right"
items.forEach(element => {
const shopitem = itemShop.appendChild(document.createElement('div'));
shopitem.classList.add('shopitem')
const kader = shopitem.appendChild(document.createElement('img'));
kader.classList.add('kader');
kader.src = "./images/shopkader.png"
const icon = shopitem.appendChild(document.createElement('img'));
icon.classList.add("icon-size");
icon.src = shopitems[element].img
const name = shopitem.appendChild(document.createElement('p'));
name.classList.add('upgrade-name')
name.innerText = shopitems[element].itemName
const cost = shopitem.appendChild(document.createElement('p'));
cost.classList.add('cost');
cost.innerText = shopitems[element].cost
cost.id = "i" +[element]
const buy = shopitem.appendChild(document.createElement('img'));
buy.classList.add('buyRandom');
buy.src = "./images/buy.png"
buy.id = shopitems[element].id

buy.addEventListener("click", ()=> {
  itemShop.removeChild(shopitem)
})
});

function itemGenerator(items){
    for(var i = 0; i <=2; i++ ){
    items.push((Math.floor(Math.random() * shoparray.length)))
    }
    return items
}

const shop = document.querySelectorAll('.buyRandom')

shop.forEach( div =>
    div.addEventListener("click", (e) => {
        var targetitem = e.target.id
        console.log(targetitem)
        buyitem(targetitem)


    })
    )

    
}

  //upgrade bar
document.querySelector(".upgrade-button").addEventListener("click", openNav)
function openNav() {
  document.querySelector(".sidenav").style.width = "25%";
}

document.querySelector("#close-left").addEventListener("click",closeNav)
function closeNav() {
  document.querySelector(".sidenav").style.width = "0";
  
}

document.querySelector(".store-button").addEventListener("click", openNavRight)
function openNavRight() {
  document.querySelector(".sidenav-right").style.width = "25%";
}

document.querySelector(".sidenav-right").addEventListener("click", closeNavRight)
// document.querySelector("#close-right").addEventListener("click",closeNavRight)
function closeNavRight() {
  document.querySelector(".sidenav-right").style.width = "0";
}

const shop = document.querySelectorAll('.buy')

shop.forEach( div =>
    div.addEventListener("click", (e) => {
        var purchase = e.target.id
          buy(purchase)
    })
    )


    function buy(x){
        if(money >= upgradefile[x].cost){
          money -= upgradefile[x].cost
          updatescore()            
                    if (upgradefile[x].type == "cps"){
                      cps += upgradefile[x].cps;
                      levelup(x)
                    }
                    if (upgradefile[x].upgradeType == "chance"){

                      chancePercentage(x)
                      chanceup(x)
                      costup(x)
                    }
                    else if (upgradefile[x].upgradeType == "click"){
                      levelup(x)
                      clickupgrade(x)
                      costup(x)
                    }
        }   // if(0 == x){
                //   tripleclickupgrade(x)
                //   updatescore()
                // }
                // else if( 1 == x){
                //   tripleclickupgrade(x)
                //   updatescore()
                // }
                // else if( 2==x ){
                //     tripleclickupgrade(x)
                //     updatescore()
                // }
                // else if(x === 3){

                // }
    }

    function chanceup(x){
      chancetext = document.getElementById("L"+[x])
      level = upgradefile[x].level
      chancetext.innerText = upgradefile[x].chance + "%"
    }

    function buyitem(target){
      target = target-3
      if(money >= shopitems[target].cost){
        money -= shopitems[target].cost
        updatescore()

        for (var i=0;i<shopitems.length;i++){
          if (i == target){
            if (shopitems[target].itemType == "Boost"){
              boost(target)
            }
            else if (shopitems[target].itemType == "Warp"){
              warp()
            }
            else if (shopitems[target].itemType == "Key"){
              key(target)
            }
            else if (shopitems[target].itemType == "+"){
              plus()
            }
            
          }
        }
      
      }
    }
    let keyAmount = 3
    function warp(){
      money += cps * 900000
      updatescore()
    }

    function plus(){
      money = money += money *0.5
      updatescore()
    }

    function key(target){
      keyAmount += shopitems[target].uses
      keycounterText()

    }

    function boost(target){
      mpc += mpc * shopitems[target].boostAmount
    }


    function levelup(x){
      leveltext = document.getElementById("L"+[x])
      level = upgradefile[x].level
        level += 1
        leveltext.innerText = level
        upgradefile[x].level = level
    }

    function updatescore(){
      Math.floor(money)
      score.innerText = money
    }

    function costup(x){
      costtext = document.getElementById("C"+[x])
      cost = upgradefile[x].cost
      cost = cost * upgradefile[x].costMultiplier
      costtext.innerText = cost
      upgradefile[x].cost = cost
    
    }

    function chancePercentage(x){
      var chance = upgradefile[x].chance
      chance += upgradefile[x].chanceUpgrade
      upgradefile[x].chance = chance
    }

    function clickupgrade(x){
      mpc += mpc * upgradefile[x].upgrade
      mpc = Math.floor(mpc)
    }



    

function clicksPerSecond() {
  money += cps;
  updatescore()
}
setInterval(clicksPerSecond, 1000)


document.querySelector(".tiny-box").addEventListener('click', () => {
  if(keyAmount > 0){
      keyAmount -= 1
      keycounterText()
     let win=  Math.floor(Math.random() * money/4)
     document.querySelector(".recent-win").innerText = "Recent Win: " + win 
  money += win
  }

})

  function keycounterText(){
    let keystext = document.querySelector(".KeysText")
      keystext.innerText = "Keys: " + keyAmount
  }
  let keystext = document.querySelector(".KeysText")
  keystext.innerText = "Keys: " + keyAmount

  


