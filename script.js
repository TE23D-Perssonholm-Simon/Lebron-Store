
let main = document.querySelector("main")
class item{
    constructor(img,price,name){
        this.img = img;
        this.price = price;
        this.name = name;
        this.nrbought = 0;
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
    }
    additem(){
        this.nrbought++;
        if(this.nrbought == 1){
            this.nrboughtbutton = document.createElement("p")
            this.nrboughtbutton.classList.add("nr-bought")
            this.div.appendChild(this.nrboughtbutton)
        }
        this.nrboughtbutton.textContent = this.nrbought.toString()
    }
}

let items = []
items.push(new item("img/LebronBall.png",30,"Lebron BasketBall"));
items.push(new item("img/LebronPillow.png",20,"Lebron Pillow"))
items.push(new item("img/LebronPlushie.png",50,"Lebron Plushie"))
items.push(new item("img/LebronPoster.png",40,"Lebron Poster"))
items.push(new item("img/LebronSheet.png",64,"Lebron BedSheet"))
items.push(new item("img/LebronShirt.png",25,"Lebron Shirt"))
for(let i = 0; i< items.length;i++){
    items[i].createitem(main);
}
function gotocart(){
    localStorage.setItem("Items",JSON.stringify(items))
    window.location.href ="shoppingcart.html"
}
let cart = document.querySelector(".cart-icon");
cart.onclick = gotocart
