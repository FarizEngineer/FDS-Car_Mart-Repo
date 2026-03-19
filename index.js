let cards=[
{
    id:1,
    img:"pics/Gordon murray 01.jpg",
    name:"Gordon Murray T.33",
    des:"3.0L V12 naturally aspirated, 607 hp, 0-60 in 2.8s"
},
{
   id:2,
    img:"pics/Ferrari 296 GTB 01.jpg",
    name:"Ferrari 296 GTB",
    des:"Hybrid V6 twin-turbo, 819 hp, 0-60 in 2.4s" 
},
{
   id:3,
    img:"pics/Mclaren 01.jpg",
    name:"McLaren 750S",
    des:"4.0L V8 twin-turbo, 740 hp, 0-60 in 2.7s" 
},
{
   id:4,
    img:"pics/porche 01.jpg",
    name:"Porsche 911 GT3 RS",
    des:"4.0L flat-6 NA, 518 hp, 0-60 in 3.0s" 
},
{
   id:5,
    img:"pics/lamborghini 01.jpg",
    name:"Lamborghini Huracán Successor (Temerario)",
    des:"Hybrid V8 twin-turbo, ~900 hp expected" 
},
{
   id:6,
    img:"pics/Aston martin 01.jpg",
    name:"Aston Martin DB12 AMR",
    des:"5.2L V12 twin-turbo, 760 hp, 0-60 in 3.5s" 
},
{
   id:7,
    img:"pics/chevrolet 01.jpg",
    name:"Chevrolet Corvette ZR1",
    des:"6.2L V8 supercharged, 1,064 hp, 0-60 in 2.3s" 
},
{
   id:8,
    img:"pics/mercedes 01.jpg",
    name:"Mercedes-AMG GT 63 S E Performance",
    des:"4.0L V8 hybrid, 831 hp, 0-60 in 2.8s" 
},
{
   id:9,
    img:"pics/mc20 01.jpg",
    name:"Maserati MC20",
    des:`3.0L V6 twin-turbo "Nettuno", 621 hp, 0-60 in 2.9s` 
}
]


document.write(`  
<div class="container-fluid">
    <div class="row mt-4 mb-5">`)
for(i=0; i<cards.length; i++ ){
    document.write(`
        <div class="col-md-4">
        <div class="card">
        <img src="${cards[i].img}" class="card-img-top crdimg" alt="...">
  <div class="card-body">
    <h5 class="card-title">${cards[i].name}</h5>
    <p class="card-text">${cards[i].des}</p>
    <a href="det.html?id=${cards[i].id}" class="btn btn-primary">Go somewhere</a>
  </div>
  </div>
  </div>
  `)

}

document.write(`     
    </div>
</div>`)

// Account Work
let username=localStorage.getItem("username")
let usermail=localStorage.getItem("usermail")

document.getElementById(`uname`).innerHTML=username
document.getElementById(`umail`).innerHTML=usermail

