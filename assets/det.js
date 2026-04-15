let cards=[
{
    id:1,
    img1:"../pics/Gordon murray 01.jpg",
    img2:"../pics/gordon murray 2.jpg",
    img3:"../pics/Gordon murray 3.jpg",
    img4:"../pics/Gordon murray 4.jpg",
    img5:"../pics/Gordon murray 5.jpg",
    name:"Gordon Murray T.33",
    des:`F1 legend Gordon Murray's street-legal track weapon. Cosworth-built V12 revs 
    to 11,000 RPM with a soundtrack like a symphony orchestra on steroids. Bare carbon tub + manual 
    gearbox = purest analog driving experience. Only 100 units—each a future museum piece. Limited weigh
    t (2,559 lbs) gives it McLaren F1-level agility.`,
    tag:`"100 units worldwide. Your kids' inheritance. Secure yours."`,
    price:`-- Pkr.502,900,000 --`,
    button:`---- $1,800,000 ----`
},
{
   id:2,
     img1:"../pics/Ferrari 296 GTB 01.jpg",
    img2:"../pics/ferrari 2.jpg",
    img3:"../pics/ferrari 3.jpg",
    img4:"../pics/ferrari 4.jpg",
    img5:"../pics/ferrari 5.jpg",
    name:"Ferrari 296 GTB",
    des:`Ferrari's mid-engine masterpiece combines F1-derived hybrid tech with razor-sharp handling. 
    The 2.9L V6 plus electric motor delivers supercar thrills in a compact,
     track-ready package—perfect balance of daily usability and Le Mans-winning DNA.`,
     tag:`"Status has a new address. Own the Ferrari flex."`,
     price:`-- Pkr.97,680,000 --`,
     tag:`"Status has a new address. Own the Ferrari flex."`,
     button:`---- $350,000 ----`
},
{
   id:3,
    img1:"../pics/Mclaren 01.jpg",
    img2:"../pics/mclaren 2.jpg",
    img3:"../pics/mclaren 3.jpg",
    img4:"../pics/mclaren 4.jpg",
    img5:"../pics/mclaren 5.jpg",
    name:"McLaren 750S",
    des:`McLaren's "most powerful series car" strips 100+ lbs off the 720S while boosting power. 
    Hydraulic suspension + active aero = glued-to-road grip. 
    It's the purest driver-focused supercar—feels like a giant go-kart with F1 refinement.`,
    price:`-- Pkr.108,000,000 --`,
    tag:`"740hp corner-carving weapon. Beat your rich neighbor."`,
    button:`---- $386,700 ----` 
},
{
   id:4,
     img1:"../pics/porche 01.jpg",
    img2:"../pics/porche 2.jpg",
    img3:"../pics/porche 3.jpg",
    img4:"../pics/porche 4.jpg",
    img5:"../pics/porche 5.jpg",
    name:"Porsche 911 GT3 RS",
    des:`Track weapon disguised as road car. Massive rear wing generates 860 lbs downforce at speed.
     No hybrid nonsense—just pure,
     screaming 9,000 RPM flat-six and motorsport engineering. Nürburgring record holder.`,
     price:`-- Pkr.80,000,000 --`,
     tag:`"Track king by day, gentleman by night. Nürburgring proven."`,
     button:`---- $286,650 ----`
},
{
   id:5,
     img1:"../pics/lamborghini 01.jpg",
    img2:"../pics/lamborghini 1.jpg",
    img3:"../pics/lamborghini 3.jpg",
    img4:"../pics/lamborghini 4.jpg",
    img5:"../pics/lamborghini 5.jpg",
    name:"Lamborghini Huracán Successor (Temerario)",
    des:`Lamborghini's V10 era ends with hybrid V8 fury.
     All-wheel drive + scissor doors + fighter-jet styling.
     Expect 2.0s 0-60 and Top Gun soundtrack from active exhaust.` ,
     price:`-- Pkr.167,600,000 --`,
     tag:`"Scissor doors. 900hp. Zero regrets. Be the spectacle."`,
     button:`---- 	$600,000 ----`
},
{
   id:6,
    img1:"../pics/Aston martin 01.jpg",
    img2:"../pics/aston martin 2.jpg",
    img3:"../pics/aston martin 3.jpg",
    img4:"../pics/aston martin 4.jpg",
    img5:"../pics/aston martin 5.jpg",
    name:"Aston Martin DB12 AMR",
    des:`James Bond's new weapon. Longest DB chassis ever + most powerful Aston V12. 
    GT elegance meets supercar savagery—luxury interior, brutal acceleration.` ,
    price:`-- Pkr.89,400,000 --`,
    tag:`"Bond's new weapon. V12 growl + British class = unstoppable."`,
    button:`---- $320,000 ----`
},
{
   id:7,
    img1:"../pics/chevrolet 01.jpg",
    img2:"../pics/chevrolet 2.jpg",
    img3:"../pics/chevrolet 3.jpg",
    img4:"../pics/chevrolet 4.jpg",
    img5:"../pics/chevrolet 5.jpg",
    name:"Chevrolet Corvette ZR1",
    des:`America's supercar king hits hypercar power levels. Massive supercharger whine + dragstrip dominance. 
    Sub-$200K price makes it the performance bargain of the decade—triple the power of a 
    base Corvette for half the Ferrari price.`,
    price:`-- Pkr.50,100,000 --`,
    tag:`"1064hp American monster. Supercar power, sedan price."`,
    button:`---- $180,000 ----`
},
{
   id:8,
    img1:"../pics/mercedes 01.jpg",
    img2:"../pics/mercedes 2.jpg",
    img3:"../pics/mercedes 3.jpg",
    img4:"../pics/mercedes 4.jpg",
    img5:"../pics/mercedes 5.jpg",
    name:"Mercedes-AMG GT 63 S E Performance",
    des:`Pinnacle of German engineering fury. Formula 1-derived hybrid tech + 4MATIC+ all-wheel grip. 
    GT3 race car DNA meets luxury grand tourer—can lap Nürburgring then do grocery run without breaking 
    sweat.`,
    price:`-- Pkr.111,300,000 --`,
    tag:`"F1 hybrid tech for streets. German precision owns corners."`,
    button:`---- $400,000 ----`
},
{
   id:9,
    img1:"../pics/mc20 01.jpg",
    img2:"../pics/mc20 2.jpg",
    img3:"../pics/mc20 3.jpg",
    img4:"../pics/mc20 4.jpg",
    img5:"../pics/mc20 5.jpg",
    name:"Maserati MC20",
    des:`Italian opera in carbon fiber form. F1-derived V6 with pre-chamber ignition 
    (race tech trickled down). Butterfly doors + perfect 50/50 weight distribution = surgical handling.
     Underrated gem that punches above Ferrari weight.`,
     price:`-- Pkr.66,800,000 --`,
     tag:`"Ferrari killer at half price. Italian soul, F1 V6 fury."`,
     button:`---- 	$240,000 ----` 
}
]

let params= new URLSearchParams(window.location.search)
let id=parseInt(params.get("id"))
let product=cards.find(item => item.id==id)

document.write(`<div class="container">
    <div class="row mt-3">`)

document.write(`
        <div class="col-md-6 mt-2"><div id="carouselExampleFade" class="carousel slide carousel-fade">
  <div class="carousel-inner carsel">
    <div class="carousel-item active">
      <img src="${product.img1}" class="d-block w-100 detimg" alt="...">
    </div>
    <div class="carousel-item">
      <img src="${product.img2}" class="d-block w-100 detimg" alt="...">
    </div>
    <div class="carousel-item">
      <img src="${product.img3}" class="d-block w-100 detimg" alt="...">
    </div>
    <div class="carousel-item">
      <img src="${product.img4}" class="d-block w-100 detimg" alt="...">
    </div>
    <div class="carousel-item">
      <img src="${product.img5}" class="d-block w-100 detimg" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>
        <div class="col-md-6 mt-3">
        <h1 class="name">${product.name}</h1>
        <h3 class="des">${product.des}</h3>
        </div>
        
        <div class="container">
    <div class="row mt-4">
        <div class="col-md-12 text-center">
            <button class="modbtn" data-bs-toggle="modal" data-bs-target="#carmodal">${product.button}</button>
        </div>
    </div>
</div>

    `)
    document.write(` </div>
</div>
`)

// Modal work
document.write(`
    <!-- Modal -->
<div class="modal fade" id="carmodal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">${product.name}</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <div class="row">
        <div class="col-md-6"><img src="${product.img1}" class="modimg"></div>
<div class="col-md-6">
<h6 class="modtag">${product.tag}</h6>
        ${product.price}
</div>
  
    </div>
       </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">--- BUY NOW ---</button>
      </div>
    </div>
  </div>
</div>
    `)