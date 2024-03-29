
var product = document.getElementById('product');
let data =[
  {
    "id" : 1,
    "title":"FJN",
    "price": 109.95,
    "image1" : "img/m11.webp",
    "image2" : "img/m12.webp",
    "image3" : "img/m13.webp",
    "pagename": "shop/indexM1.html",

    "category":"womwn",
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",


  },
  {
    "id" : 2,
    "title":"FVHG",
    "price": 130,
    "image1" : "img/m2m1.webp",
    "image2" : "img/m22.webp",
    "image3" : "img/m23.webp",
    "pagename": "shop/indexM2.html",

    "category":"womwn",
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",


  },
  {
    "id" : 3,
    "title":"Nsw Air Boyfriend ",
    "price": 230,
    "image1" : "img/m31.webp",
    "image2" : "img/m32.webp",
    "image3" : "img/m33.webp",
    "pagename": "shop/indexM3.html",

    "category":"womwn",
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",


  },
  {
    "id" : 4,
    "title":"Nike Air Boyfriend T-Shirt",
    "price": 130,
    "image1" : "img/m41.webp",
    "image2" : "img/m42.webp",
    "image3" : "img/m43.webp",
    "pagename": "shop/indexM4.html",

    "category":"womwn",
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",


  },
  {
    "id" : 5,
    "title":"Fds Air Boyfriend T-Shirt",
    "price": 130,
    "image1" : "img/m51.webp",
    "image2" : "img/m52.webp",
    "image3" : "img/m53.webp",
    "pagename": "shop/indexM5.html",

    "category":"womwn",
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",


  },

  {
    "id" : 6,
    "title":"Solid Wide Legged Pants Set",
    "price": 530,
    "image1" : "img/m61.webp",
    "image2" : "img/m62.webp",
    "image3" : "img/m63.webp",
    "pagename": "shop/indexM6.html",

    "category":"womwn",
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",


  },
  {
    "id" : 7,
    "title":"T-shirt",
    "price": 109.95,
    "image1" : "img/m71.webp",
    "image2" : "img/m72.webp",
    "image3" : "img/m73.webp",
    "pagename": "shop/indexM7.html",

    "category":"womwn",
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",


  },
  {
    "id" : 8,
    "title":"T-shirt",
    "price": 130,
    "image1" : "img/m81.webp",
    "image2" : "img/m82.webp",
    "image3" : "img/m83.webp",
    "pagename": "shop/indexM8.html",

    "category":"womwn",
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",


  },
  {
    "id" : 9,
    "title":"Nsw Air Boyfriend T-Shirt",
    "price": 230,
    "image1" : "img/m91.webp",
    "image2" : "img/m92.webp",
    "image3" : "img/m93.webp",
    "pagename": "shop/indexM9.html",

    "category":"womwn",
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",


  },
  {
    "id" : 10,
    "title":"Nike Air Boyfriend T-Shirt",
    "price": 130,
    "image1" : "img/m101.webp",
    "image2" : "img/m102.webp",
    "image3" : "img/m103.webp",
    "pagename": "shop/indexM10.html",

    "category":"shoes",
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",


  },
  {
    "id" : 11,
    "title":"Fds Air Boyfriend T-Shirt",
    "price": 130,
    "image1" : "img/m111.webp",
    "image2" : "img/m112.webp",
    "image3" : "img/m113.webp",
    "pagename": "shop/indexM11.html",

    "category":"shoes",
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",


  },

  {
    "id" : 12,
    "title":"Solid Wide Legged Pants Set",
    "price": 530,
    "image1" : "img/m121.webp",
    "image2" : "img/m122.webp",
    "image3" : "img/m123.webp",
    "pagename": "shop/indexM12.html",

    "category":"shoes",
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",


  },
  {
    "id" : 13,
    "title":"Puma",
    "price": 150.95,
    "image1" : "img/m131.webp",
    "image2" : "img/m132.webp",
    "image3" : "img/m133.webp",
    "pagename": "shop/indexM13.html",

    "category":"shoes",
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",


  },
  {
    "id" : 14,
    "title":"Ginger",
    "price": 250.95,
    "image1" : "img/m141.webp",
    "image2" : "img/m142.webp",
    "image3" : "img/m143.webp",
    "pagename": "shop/indexM14.html",

    "category":"shoes",
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",


  },
  {
    "id" : 15,
    "title":"Ginger",
    "price": 250.95,
    "image1" : "img/m151.webp",
    "image2" : "img/m152.webp",
    "image3" : "img/m153.webp",
    "pagename": "shop/indexM15.html",

    "category":"shoes",
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",


  },
  {
    "id" : 16,
    "title":"Ella",
    "price": 350.95,
    "image1" : "img/m161.webp",
    "image2" : "img/m162.webp",
    "image3" : "img/m163.webp",
    "pagename": "shop/indexM16.html",

    "category":"bag",
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",


  },
  {
    "id" : 17,
    "title":"Ella Limited Edition",
    "price": 120.95,
    "image1" : "img/m171.webp",
    "image2" : "img/m172.webp",
    "image3" : "img/m173.webp",
    "pagename": "shop/indexM17.html",

    "category":"bag",
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",


  },
  {
    "id" : 18,
    "title":"Khizana",
    "price": 350.95,
    "image1" : "img/m181.webp",
    "image2" : "img/m182.webp",
    "image3" : "img/m183.webp",
    "pagename": "shop/indexM18.html",

    "category":"bag",
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",


  },

  {
    "id" : 19,
    "title":"AJFUM",
    "price": 350.95,
    "image1" : "img/m191.webp",
    "image2" : "img/m192.webp",
    "image3" : "img/m193.webp",
    "pagename": "shop/indexM19.html",

    "category":"acc",
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",


  },

  {
    "id" : 20,
    "title":"QKSI",
    "price": 350.95,
    "image1" : "img/m201.webp",
    "image2" : "img/m202.webp",
    "image3" : "img/m203.webp",
    "pagename": "shop/indexM20.html",

    "category":"acc",
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",


  },

  {
    "id" : 21,
    "title":"Khizana",
    "price": 350.95,
    "image1" : "img/m211.webp",
    "image2" : "img/m212.webp",
    "image3" : "img/m213.webp",
    "pagename": "shop/indexM21.html",

    "category":"acc",
    "pagename": "shop/index1.html",
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",


  },
  
  




  

]
 let colars =["blue" ,"green","yallow","black","white","orange","brown","pink","parple","gray","gold","slvier","orange","brown","pink","parple","gray","gold","slvier"];
 console.log(data);
 display(data);
// var http = new XMLHttpRequest ;



// http.open('GET','https://fakestoreapi.com/products' );
// http.send ();
// var data;

// http.addEventListener('readystatechange', function(){
//     if ( http.readyState==4 && http.status==200 )
//     {
//         data = JSON.parse(http.response);
//        // console.log(data) ;  
//     }

//         display();

// } )
var co=document.getElementById('co');
function colarfun (){ 
   var l="";
  for(var j= 0; j< colars.length;j++)
  {
l+=`
<li><div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
              ${colars[j]}
            </label>
          </div></li>
`
  }

co.innerHTML = l;

}

let pca=[];

 function display (ol){
    var res=" ";
    
    for (var i =0;i< ol.length;i++)
    {

res +=`
<div class = "col-md-4 col-sm-6 mt-2 item ">
<div class="card " >

<div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="2000">
    <img src="${ol[i].image1}" class="d-block w-100 hi " alt="..." ></img>
    </div>
    <div class="carousel-item "  data-bs-interval="2000">
    <img src="${ol[i].image2}" class="d-block w-100 hi " alt="..." ></img>
    </div>
    <div class="carousel-item data-bs-interval="2000"">
    <img src="${ol[i].image3}" class="d-block w-100 hi " alt="..." ></img>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

 
  
 
 <button class="btn  btn-success cat position-absolute fs-6"  onclicK = "addtocart(${ol[i].id})" >ADD TO CART  <i class="fa-solid fa-cart-shopping"></i></button>
  <a href="#" class="btn view  "> 
  <div>
      <p>SELECT A SIZE TO  ADD TO CART</p>
      <ul class="d-flex  p-0 " >
        <li class="btn btn-light  ">SM</li>
        <li class="btn btn-light  ">M</li>
        <li class="btn btn-light ">L</li>
        <li class="btn btn-light ">XL</li>
        <li class="btn btn-light ">XXL</li>

      </ul>
    
     </div>
  
  </a>

  </div>
<div class="des">
<div class="d-flex justify-content-between align-items-center">  
<a class="text-decoration-none" href="${ol[i].pagename}"><h6 class="text-dark fs-5" >${ol[i].title}</h6></a>
<span><i class="fa-regular fa-heart"></i></span> 
</div>
<span class="text-success fw-bold" >${ol[i].price} $  </span>
<span class="d-block" style="font-size:200%;color:yellow;">&starf;&starf;&starf;</span>

</div>
 </div>
`

    }
product.innerHTML = res ;

 }

 var shoes= document.getElementById('shoes');
 shoes.addEventListener('click',function(){
  var ress=``;
    
 var st=[];
 st = data.filter(data => data.category == 'shoes');
 console.log(st);
 
 display(st);

 })

 var clothes= document.getElementById('clothes');
 clothes.addEventListener('click',function(){
  var ress=``;
    
 var w=[];
w = data.filter(data => data.category == 'womwn');
 console.log(w);
 
 display(w);

 })

 var bag= document.getElementById('bag');
 bag.addEventListener('click',function(){
  var ress=``;
    
 var w=[];
w = data.filter(data => data.category == 'bag');
 console.log(w);
 
 display(w);

 })
 
 var acc= document.getElementById('acc');
 acc.addEventListener('click',function(){
  var ress=``;
    
 var x=[];
x= data.filter(data => data.category == 'acc');
 
 
 display(x);

 })
 





// function addtocart (id){

//   if ( localStorage.getItem("usercart") == null ){
  
    
    
// for (var c=0;c<data.length;c++)
// if (id == data[c].id){
// pca.push(data[c]);

// }

// localStorage.setItem('usercart',JSON.stringify(pca));
  
// }
 
// else {
//   var vv = JSON.parse(localStorage.getItem("usercart"));
//   pca = vv;
//   localStorage.setItem('usercart',JSON.stringify(pca));
//   getcartitem();
//   for (var c=0;c<data.length;c++)
// if (id == data[c].id){
// pca.push(data[c]);

// }

// localStorage.setItem('usercart',JSON.stringify(pca));

// }



 

// }




function addtocart(id){
  for (var c=0;c<data.length;c++)
if (id == data[c].id){
pca.push(data[c]);

}

localStorage.setItem('usercart',JSON.stringify(pca));
}

function deletep (id){

  let d=[];
  d=JSON.parse(localStorage.getItem('usercart')) ;
  let index=0;
for (var f=0;f<d.length;f++){
if (d[f].id==id )
index=f;
}
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
          d.splice(index,1);
  localStorage.setItem('usercart',JSON.stringify(d));
  getcartitem();
      Swal.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      )
    }
  })



 
 }


  function getcartitem (){
    let  itemss =JSON.parse(localStorage.getItem('usercart'));
     var r ="";
 
     for ( var i = 0; i< itemss.length  ; i++){
        r += 
`<tr>
     <td> ${itemss[i].id}</td>
     <td>  <img src="${itemss[i].image1}"  class="imgcart" >  </td>
     
     <td>${itemss[i].price}</td>
     <td>
            <select>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
            </select>
          </td>
           
     <td>
    
       
       <button class="btn btn-danger dell" onclick="deletep(${itemss[i].id})" type="button">Delete</button>
     
   </td>
      
   </tr>`;   
     }
  xx.innerHTML = r;



}
    

  