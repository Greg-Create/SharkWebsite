//An Array for shoppingcart items
let  shoppingCart = []


//The addcart function which is called when someone clicks add to card button on the sharks, it takes the parameters of the request
//(name of the shark and its price) and pushes it to the shopping cart array.
function addcard(name,price,id,img){
    shoppingCart.push({'name':name,'price':price, 'id':id})
    sessionStorage.setItem('array', JSON.stringify(shoppingCart))
   var message=  document.getElementsByClassName("notifi")[id]
   console.log(message)
   message.classList.add("notficiation")
  // message.classList.remove("notifi")
    
setTimeout(hide,5000)

    function hide(){
        message.classList.add("notifi")
        message.classList.remove("notficiation")
    }
}


var audio = document.querySelector("#sound2")
var leopard = document.getElementById("sharks")
var audio1 = document.querySelector("#sound3")
var greatwhite = document.getElementById("greatwhite")


greatwhite.addEventListener("mouseover", () => {audio1.play()});
greatwhite.addEventListener("mouseout", () => {audio1.pause()});
leopard.addEventListener("mouseover", () => {audio.play()});
leopard.addEventListener("mouseout", () => {audio.pause()});











//varaible to hold the value of the selected class in which the shopping cart items will be displayed
const listE = document.querySelector(".items")

//Variable that holds the total price of the sharks
let total = 0


//Render list function, renders all the shoppingcart items when it is called by placing them in the innerhtml of the listE
function renderList(){


    var list = sessionStorage.getItem('array')
    shoppingCart = JSON.parse(list)
    
    shoppingCart.forEach((product, key) => {
        if(product.id==0){
    listE.innerHTML+=`
       <div class="shp" id=${product.id}><img class="shopimg" src="https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/tnc_54897705.jpg?crop=0,83,4000,2500&wid=1640&hei=1025&scl=2.4390243902439024"} /> <h5 >Title: ${product.name} Price: $${product.price} </h5><button  onclick="removeItem(${product.id})" class="remove" )">Remove</button> </div>
       
        
    ` 
   
           
  }
    if(product.id==1){
        listE.innerHTML += `
           <div class="shp" id=${product.id}><img class="shopimg" src="https://i.natgeofe.com/k/dda017fb-7293-4c15-ba05-d1c3af2280f6/hammerhead-shark-underwater_3x2.jpg"} /> <h5 >Title: ${product.name} Price: $${product.price} </h5><button class="remove" onclick="removeItem(${product.id})">Remove</button> </div>
           
            
        `  }
        if(product.id==2){
            listE.innerHTML += `
               <div class="shp" id=${product.id}><img class="shopimg" src="https://th.bing.com/th/id/OIP.9VjJdYOL8ZIDYvsmw0ssQwHaFn?pid=ImgDet&rs=1"} /> <h5 >Title: ${product.name} Price: $${product.price} </h5><button class="remove" onclick="removeItem(${product.id})">Remove</button> </div>
               
                
            `  }
            if(product.id==3){
                listE.innerHTML += `
                   <div class="shp" id=${product.id}><img class="shopimg" src="https://th.bing.com/th/id/R.68ddae24c0d012bb1b5dcfbd3fc12393?rik=dLZz8hooFIhftQ&riu=http%3a%2f%2f4.bp.blogspot.com%2f-p5TJYYU8nfM%2fTqoufYE0n7I%2fAAAAAAAACNM%2fKLrvBbaG0V0%2fs1600%2fGreat-White-Shark-07.jpg&ehk=cGaz1N0ZaMapgahC2aKj2RZZ%2bzrkr1vvcTQE638qdcE%3d&risl=&pid=ImgRaw&r=0"} /> <h5 >Title: ${product.name} Price: $${product.price} </h5><button class="remove" onclick="removeItem(${product.id})">Remove</button> </div>
                   
                    
                `  }
                if(product.id==4){
                    listE.innerHTML += `
                       <div class="shp" id=${product.id}><img class="shopimg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCmecai2Ks67A2s9Yf54KgYhkDpkymU7kKGA&usqp=CAU"} /> <h5 >Title: ${product.name} Price: $${product.price} </h5><button class="remove" onclick="removeItem(${product.id})">Remove</button> </div>
                       
                        
                    `  }
                    if(product.id==5){
                        listE.innerHTML += `
                           <div class="shp" id=${product.id}><img class="shopimg" src="https://th.bing.com/th/id/R.981ed469a199c3abb94f60ad91a41b3b?rik=YxCz%2bvPwIz4lAA&pid=ImgRaw&r=0"} /> <h5 >Title: ${product.name} Price: $${product.price} </h5><button class="remove" onclick="removeItem(${product.id})">Remove</button> </div>
                           
                            
                        `  }

                    if(product.id==6){
                        listE.innerHTML += `
                           <div class="shp" id=${product.id}><img class="shopimg" src="https://i.pinimg.com/originals/b3/5d/2d/b35d2d6bb6ad0da3d2177f015cf5cf00.jpg"} /> <h5 >Title: ${product.name} Price: $${product.price} </h5><button class="remove" onclick="removeItem(${product.id})">Remove</button> </div>
                           
                            
                        `  }

                    if(product.id==7){
                        listE.innerHTML += `
                           <div class="shp" id=${key}><img class="shopimg" src="https://th.bing.com/th/id/OIP.bd-X91R4jNDJk_v_C4pBDwHaFq?pid=ImgDet&rs=1"} /> <h5 >Title: ${product.name} Price: $${product.price} </h5><button class="remove" onclick="removeItem(${key})">Remove</button> </div>
                           
                            
                        `  }

                    if(product.id==8){
                        listE.innerHTML += `
                           <div class="shp" id=${product.id}><img class="shopimg" src="https://th.bing.com/th/id/R.3dd976a4e718e61182cbc5d488da6f54?rik=yhRXGh31Yh6a0Q&riu=http%3a%2f%2fwww.trbimg.com%2fimg-5968f54b%2fturbine%2fla-1500050760-jlt6i1mduj-snap-image&ehk=Rzd592ktjxS05xvzfryGmtcFKCADjf0CfBXdAc83odA%3d&risl=&pid=ImgRaw&r=0"} /> <h5 >Title: ${product.name} Price: $${product.price} </h5><button class="remove" onclick="removeItem(${product.id})">Remove</button> </div>
                           
                            
                        `  }

                    if(product.id==9){
                        listE.innerHTML += `
                           <div class="shp" id=${product.id}><img class="shopimg" src="https://static.standard.co.uk/s3fs-public/thumbnails/image/2019/01/25/14/angelshark2501.jpg"} /> <h5 >Title: ${product.name} Price: $${product.price} </h5><button class="remove" onclick="removeItem(${product.id})">Remove</button> </div>
                           
                            
                        `  }

                     if(product.id==10){
                        listE.innerHTML += `
                           <div class="shp" id=${product.id}><img class="shopimg" src="https://th.bing.com/th/id/R.8361219dbaa9749fcf914fa7fcc5211e?rik=XEMeWplyP%2bCkog&riu=http%3a%2f%2fnhptv.org%2fwild%2fimages%2fCarcharhinusplumbeus.jpg&ehk=JfmTyYqqY4DoIFzOEhFrLFq0ABriHg6zIk1%2bIlipjyA%3d&risl=&pid=ImgRaw&r=0"} /> <h5 >Title: ${product.name} Price: $${product.price} </h5><button class="remove" onclick="removeItem(${product.id})">Remove</button> </div>
                           
                            
                        `  }

                      if(product.id==11){
                        listE.innerHTML += `
                           <div class="shp" id=${product.id}><img class="shopimg" src="https://townsquare.media/site/701/files/2020/11/123592614_1687114418135656_8813531584773229028_o.jpg?w=1200&h=0&zc=1&s=0&a=t&q=89"} /> <h5 >Title: ${product.name} Price: $${product.price} </h5><button class="remove" onclick="removeItem(${product.id})">Remove</button> </div>
                           
                            
                        `  }
}) 


}

 function removeItem(itemId){
  console.log("close")
  shoppingCart.forEach(function(item){
    if(item.id==itemId){
       var x = shoppingCart.indexOf(item)
      shoppingCart.splice(x,1)
    }
  })
 
 console.log(shoppingCart)
 var removed = document.getElementById(itemId)
 removed.remove()
 sessionStorage.setItem('array', JSON.stringify(shoppingCart))
 totalprice()

 
}

//Hides the shopping cart item when called

function removeList(){
    shoppingCart.forEach((product) => {
    listE.innerHTML = `
        
       
    ` 

  
  
}) 
}

//Function which calculates the total price by itterating over the shopping cart array and adding up the price of each shark,
//It then selects the div, in the index.html file whose id is totalprice and places the price there as an h3 tag

function totalprice(){

      total = 0;
      shoppingCart.forEach((product) => {
          total = total + product.price
      
  }) 
  
      x = document.getElementById('totalprice');
      
  
      x.innerHTML = `<h3 class="total">Total: $${total}</h3>`
  
  }




//Function is called when the shoppingcart icon is clicked, checks whether the shopping cart is closed
//if it is, it opens the shoppingCart, calls the renderList() function and the totalPrice() function
//If it's open than it closes the shopping cart by setting its display to none
function openCart(){
    x = document.getElementById('content');
    if (x.style.display === "none") {
        x.style.display = "block";
        console.log(shoppingCart)
        renderList()
        totalprice()




      } 
    
    else {
        total = 0;
        removeList()
        x.style.display = "none";
      }
}

