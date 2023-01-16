let cheap = document.getElementById("cheap")
let mid = document.getElementById("mid")
let expensive = document.getElementById("expensive")

cheap.addEventListener("click", (e) =>{
    let shalom = e.target.id
    console.log(shalom)
    newpage()
})

mid.addEventListener("click", (e) => {
    let shalom = e.target.id
    console.log(shalom)
    newpage()
})

expensive.addEventListener("click", (e) => {
    let shalom = e.target.id
    console.log(shalom)
    newpage(shalom)
})

function newpage(x){


    document.querySelector(".lootbox-buy").innerHTML = `
            <ul class="lootbox-buy">
        <li>
            <button type="button" class="lootbox-Closed" ><img class="box" src="download.png"></button>
        </li>
        <li>
            <button type="button" class="lootbox-Closed" ><img class="box" src="download.png"></button>
        </li>
        <li>
            <button type="button" class="lootbox-Closed" ><img class="box"  src="download.png"></button>
        </li>

        <li>
            <button type="button" class="lootbox-Closed" ><img class="box" src="download.png"></button>
        </li>
    </ul>
    `

    let steve = document.querySelectorAll(".box")
    steve.forEach( li =>
        li.addEventListener("click", (e) =>{
            console.log(Math.floor(Math.random() * 10))
            e.target.src = "coins.png"
        })

    )
}

