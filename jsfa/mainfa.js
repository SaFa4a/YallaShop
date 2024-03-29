
var product = document.getElementById('product');
let data =[
  {
    "id" : 1,
    "title":"T-shirt",
    "price": 109.95,
    "image1" : "img/item1m1.webp",
    "image2" : "img/item1m2.webp",
    "image3" : "img/item1m3.webp",
    "pagename":"shop/index10.html",
    "category":"womwn",
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",


  },
  {
    "id" : 2,
    "title":"T-shirt",
    "price": 130,
    "image1" : "img/item2m1.webp",
    "image2" : "img/item2m2.webp",
    "image3" : "img/item2m3.webp",
    "category":"womwn",
    "pagename":"shop/index11.html",

    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",


  },
  {
    "id" : 3,
    "title":"Nsw Air Boyfriend T-Shirt",
    "price": 230,
    "image1" : "img/item3m1.webp",
    "image2" : "img/item3m2.webp",
    "image3" : "img/item3m3.webp",
    "category":"womwn",
    "pagename":"shop/index12.html",

    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",


  },
  {
    "id" : 4,
    "title":"Nike Air Boyfriend T-Shirt",
    "price": 130,
    "image1" : "img/item4m1.webp",
    "image2" : "img/item4m2.webp",
    "image3" : "img/item4m3.webp",
    "pagename":"shop/index13.html",

    "category":"womwn",
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",


  },
  {
    "id" : 5,
    "title":"Fds Air Boyfriend T-Shirt",
    "price": 130,
    "image1" : "img/item5m1.webp",
    "image2" : "img/item5m2.webp",
    "image3" : "img/item5m3.webp",
    "category":"womwn",
    "pagename":"shop/index14.html",

    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",


  },

  {
    "id" : 6,
    "title":"Solid Wide Legged Pants Set",
    "price": 530,
    "image1" : "img/item6m1.webp",
    "image2" : "img/item6m2.webp",
    "image3" : "img/item6m3.webp",
    "pagename":"shop/index15.html",

    "category":"womwn",
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",


  },
  {
    "id" : 7,
    "title":"T-shirt",
    "price": 109.95,
    "image1" : "img/item1m1.webp",
    "image2" : "img/item1m2.webp",
    "image3" : "img/item1m3.webp",
    "pagename":"shop/index10.html",

    "category":"womwn",
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",


  },
  {
    "id" : 8,
    "title":"T-shirt",
    "price": 130,
    "image1" : "img/item2m1.webp",
    "image2" : "img/item2m2.webp",
    "image3" : "img/item2m3.webp",
    "pagename":"shop/index11.html",

    "category":"womwn",
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",


  },
  {
    "id" : 9,
    "title":"Nsw Air Boyfriend T-Shirt",
    "price": 230,
    "image1" : "img/item3m1.webp",
    "image2" : "img/item3m2.webp",
    "image3" : "img/item3m3.webp",
    "pagename":"shop/index12.html",

    "category":"womwn",
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",


  },
  {
    "id" : 10,
    "title":"Nike Air Boyfriend T-Shirt",
    "price": 130,
    "image1" : "img/item4m1.webp",
    "image2" : "img/item4m2.webp",
    "image3" : "img/item4m3.webp",
    "pagename":"shop/index13.html",

    "category":"womwn",
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",


  },
  {
    "id" : 11,
    "title":"Fds Air Boyfriend T-Shirt",
    "price": 130,
    "image1" : "img/item5m1.webp",
    "image2" : "img/item5m2.webp",
    "image3" : "img/item5m3.webp",
    "pagename":"shop/index14.html",

    "category":"womwn",
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",


  },

  {
    "id" : 12,
    "title":"Solid Wide Legged Pants Set",
    "price": 530,
    "image1" : "img/item6m1.webp",
    "image2" : "img/item6m2.webp",
    "image3" : "img/item6m3.webp",
    "pagename":"shop/index15.html",

    "category":"womwn",
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",


  },
  {
    "id" : 13,
    "title":"Puma",
    "price": 150.95,
    "image1" : "img/i1m1.webp",
    "image2" : "img/i1m2.webp",
    "image3" : "img/i1m3.webp",
    "pagename":"shop/index5.html",

    "category":"shoes",
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",


  },
  {
    "id" : 14,
    "title":"Ginger",
    "price": 250.95,
    "image1" : "img/i2m1.webp",
    "image2" : "img/i2m2.webp",
    "image3" : "img/i2m3.webp",
    "pagename":"shop/index4.html",

    "category":"shoes",
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",


  },
  {
    "id" : 15,
    "title":"Ginger",
    "price": 250.95,
    "image1" : "img/i3m1.webp",
    "image2" : "img/i3m2.webp",
    "image3" : "img/i3m3.webp",
    "pagename":"shop/index6.html",

    "category":"shoes",
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",


  },
  {
    "id" : 16,
    "title":"Ella",
    "price": 350.95,
    "image1" : "img/i4m1.webp",
    "image2" : "img/i4m2.webp",
    "image3" : "img/i4m3.webp",
    "pagename":"shop/index7.html",

    "category":"shoes",
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",


  },
  {
    "id" : 17,
    "title":"Ella Limited Edition",
    "price": 120.95,
    "image1" : "img/i5m1.webp",
    "image2" : "img/i5m2.webp",
    "image3" : "img/i5m3.webp",
    "pagename":"shop/index8.html",

    "category":"shoes",
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",


  },
  {
    "id" : 18,
    "title":"Khizana",
    "price": 350.95,
    "image1" : "img/i6m1.webp",
    "image2" : "img/i6m2.webp",
    "image3" : "img/i6m3.webp",
    "pagename":"shop/index9.html",

    "category":"shoes",
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",


  },

  {
    "id" : 19,
    "title":"Khizana",
    "price": 350.95,
    "image1" : "img/b1m1.webp",
    "image2" : "img/b1m2.webp",
    "image3" : "img/b1m3.webp",
    "pagename":"shop/index1.html",

    "category":"bag",
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",


  },

  {
    "id" : 20,
    "title":"Khizana",
    "price": 350.95,
    "image1" : "img/b2m1.webp",
    "image2" : "img/b2m2.webp",
    "image3" : "img/b2m3.webp",
    "pagename":"shop/index2.html",

    "category":"bag",
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",


  },

  {
    "id" : 21,
    "title":"Khizana",
    "price": 350.95,
    "image1" : "img/b3m1.webp",
    "image2" : "img/b3m2.webp",
    "image3" : "img/b3m3.webp",
    "pagename":"shop/index3.html",

    "category":"bag",
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
<a class="text-decoration-none" href="${ol[i].pagename}"> <h6 class="text-dark fs-5" >${ol[i].title}</h6> </a>
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
    

  