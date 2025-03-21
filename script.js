
let main = document.querySelector("main")
class item{
    constructor(img,price,name,nrbought = 0){
        this.img = img;
        this.price = price;
        this.name = name;
        this.nrbought = nrbought;
    }
    createitem(main){
        let div = document.createElement("article")
        let img = new Image();
        img.src = this.img;
        img.alt = "picture of " + this.name
        div.appendChild(img)
        let name = document.createElement("p")
        name.textContent = this.name
        let price = document.createElement("p")
        price.classList.add('red')
        price.textContent = "$" + this.price
        div.appendChild(name)
        let textdiv = document.createElement("div")
        textdiv.classList.add("displayrow")
        textdiv.appendChild(price)
        let button = document.createElement("button")
        button.textContent = "add to cart"
        button.classList.add("add-to-cart-button")
        button.onclick = () => this.additem()
        textdiv.appendChild(button)
        div.appendChild(textdiv)
        this.div = div
        main.appendChild(div)
        if(this.nrbought != 0){
            let nrboughtpopup = document.createElement("div")
            nrboughtpopup.classList.add("nr-bought")
            this.div.appendChild(nrboughtpopup)
            this.nrboughtbutton = document.createElement("p")
            nrboughtpopup.appendChild(this.nrboughtbutton)
            this.nrboughtbutton.textContent = this.nrbought.toString()
        }
        
    }
    additem(){
        this.nrbought++;
        if(this.nrbought == 1){
            let nrboughtpopup = document.createElement("div")
            nrboughtpopup.classList.add("nr-bought")
            this.div.appendChild(nrboughtpopup)
            this.nrboughtbutton = document.createElement("p")
            nrboughtpopup.appendChild(this.nrboughtbutton)
        }
        this.nrboughtbutton.textContent = this.nrbought.toString()
        localStorage.setItem("Items",JSON.stringify(items))
    }
}
let storeddata = JSON.parse(localStorage.getItem("Items"));
let items = []
if(!storeddata){
    items = [new item("img/LebronBall.webp", 30, "Lebron BasketBall"), 
        new item("img/LebronPlushie.webp", 50, "Lebron Plushie"), 
        new item("img/LebronPoster.webp", 40, "Lebron Poster"), 
        new item("img/LebronSheet.webp", 64, "Lebron BedSheet"), 
        new item("img/LebronShirt.webp", 25, "Lebron Shirt"),
        new item("img/LebronPillow.webp",20,"Lebron Pillow")]
}
else{
    items = storeddata.map(obj => new item(obj.img, obj.price, obj.name, obj.nrbought))
}
for(let i = 0; i< items.length;i++){
    items[i].createitem(main);
}
function gotocart(){
    localStorage.setItem("Items",JSON.stringify(items))
    window.location.href ="shoppingcart.html"
}
let cart = document.querySelector(".cart-icon");
cart.onclick = gotocart
