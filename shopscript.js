class item{
    constructor(img,price,name,nrbought){
        this.img = img
        this.nrbought = nrbought;
        this.price = price*nrbought;
        this.name = name
        
    }
    display(ol){
        
        if(this.nrbought <= 0){
            console.log("bought 0")
            return;
        }
        let div = document.createElement("div");
        let img = document.createElement("img")
        img.src = this.img;
        let text = document.createElement("p");
        text.textContent = this.name;
        let nrbought = document.createElement("p");
        let price = document.createElement("p")
        price.textContent = "$" + this.price.toString();
        nrbought.textContent = "x" + this.nrbought.toString();
        div.classList.add("item")
        div.appendChild(img)
        div.appendChild(text);
        div.appendChild(nrbought);
        div.append(price)
        ol.appendChild(div)
    }
}
let ol = document.querySelector("#itemslist");
let main = document.querySelector("main")
let price = document.querySelector("#price");
let storeddata = JSON.parse(localStorage.getItem("Items")) || []
let items = storeddata.map(obj => new item(obj.img,obj.price,obj.name,obj.nrbought));
let totalcost = 0;
for(let i = 0; i< items.length;i++){
    items[i].display(ol);
    totalcost += items[i].price;
}
price.textContent = "Total: $" + totalcost.toString();
