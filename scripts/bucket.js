// On clicking remove button the item should be removed from DOM as well as localstorage.
let bucketItems = JSON.parse(localStorage.getItem("coffee"));

console.log(bucketItems.price);

let total = bucketItems.reduce(function(sum,{price}){

    return sum + Number(price);
},0);

let total_value = document.querySelector("#total_amount");
total_value.innerText =total;

bucketItems.map(function(ele,index){

    var div = document.createElement("div")
    div.className ="contents";

    let itemimage=document.createElement("img");
    itemimage.src=ele.image;

    let itemName=document.createElement("h2");
    itemName.innerText=ele.title;

    let itemprice=document.createElement("h2");
    itemprice.innerText="RS"+" "+ele.price;

    let bukbutton = document.createElement("button")
    bukbutton.innerText="Remove";
    bukbutton.id ="remove_coffee";
    bukbutton.addEventListener("click",()=>{
        remove_coffee(ele,index);
    })

 div.append(itemimage,itemName, itemprice, bukbutton);
 document.querySelector("#bucket").append(div);

    })

    function remove_coffee(ele,index){
        bucketItems.splice(index,1)
        localStorage.setItem("coffee" ,JSON.stringify(bucketItems));
        window.location.reload();
    }

