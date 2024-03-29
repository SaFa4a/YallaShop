document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener('scroll', function() {
        if (window.scrollY > 3) {
          document.getElementById('nav-top').classList.add('fixed-top');
          navbar_height = document.querySelector('.navbar').offsetHeight;
          document.body.style.paddingTop = navbar_height + 'px';
        } else {
          document.getElementById('nav-top').classList.remove('fixed-top');
          document.body.style.paddingTop = '0';
        } 
    });
  }); 




  

 
 
   
  var addBtn1=document.getElementById("click1");
  var addBtn2=document.getElementById("click2");
  var addBtn3=document.getElementById("click3");
  var addBtn4=document.getElementById("click4");
  var addBtn5=document.getElementById("click5");
  var addBtn6=document.getElementById("click6");
  var addBtn7=document.getElementById("click7");
  var addBtn8=document.getElementById("click8");
  var addBtn9=document.getElementById("click9");
  var addBtn10=document.getElementById("click10");
  var addBtn11=document.getElementById("click11");
  var addBtn12=document.getElementById("click12");
  var addBtn13=document.getElementById("click13");
  var addBtn14=document.getElementById("click14");
  var addBtn15=document.getElementById("click15");

  



  let data =[
    {
      "id" : 1,
      "title":"Jordan",
      "price": "112.73 USD",
      "image1" : "image/20.png",
      "category":"boots",
      "description": "comfortable",
  
  
    },
    {
      "id" : 2,
      "title":"Eucerin",
      "price": "60.44 USD",
      "image1" : "image/12.png",
      "category":"perfum",
      "description": "perfect",
  
  
    },
    {
      "id" : 3,
      "title":"Indya",
      "price": "123.9 USD",
      "image1" : "image/13.fpg.webp",
      "category":"womwn",
      "description": "Your perfect  dress",
  
  
    },
    {
      "id" : 4,
      "title":"ANASTASIA BEVERLY",
      "price": "47.9 USD",
      "image1" : "image/18.png",
  
      "category":"womwn",
      "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  
  
    },
  
    {
      "id" : 5,
      "title":"ANASTASIA BEVERLY",
      "price": "130.5 USD",
      "image1" : "image/14.png",
  
      "category":"womwn",
      "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  
  
    },
  
    {
      "id" : 6,
      "title":"ANASTASIA BEVERLY",
      "price": "63.7 USD",
      "image1" : "image/15.png",
  
      "category":"womwn",
      "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  
  
    },
  
    {
      "id" : 7,
      "title":"ANASTASIA BEVERLY",
      "price": "32.7 USD",
      "image1" : "image/16.png",
  
      "category":"womwn",
      "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  
  
    },
  
    {
      "id" : 8,
      "title":"ANASTASIA BEVERLY",
      "price": "33.7 USD",
      "image1" : "image/17.png",
  
      "category":"womwn",
      "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  
  
    },
  
    {
      "id" : 9,
      "title":"ANASTASIA BEVERLY",
      "price": "116 USD",
      "image1" : "image/19.png",
  
      "category":"womwn",
      "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  
  
    },
  
    {
      "id" : 10,
      "title":"ANASTASIA BEVERLY",
      "price": "97.5 USD",
      "image1" : "image/21.png",
  
      "category":"womwn",
      "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  
  
    },
  
    {
      "id" : 11,
      "title":"ANASTASIA BEVERLY",
      "price": "7.19 USD",
      "image1" : "image/22.png",
  
      "category":"womwn",
      "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  
  
    },
  
    {
      "id" : 12,
      "title":"ANASTASIA BEVERLY",
      "price": "45.7 USD",
      "image1" : "image/23.png",
  
      "category":"womwn",
      "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  
  
    },
  
    {
      "id" :13,
      "title":"ANASTASIA BEVERLY",
      "price": "55.9 USD",
      "image1" : "image/11.png",
  
      "category":"womwn",
      "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  
  
    },
  
    {
      "id" : 14,
      "title":"ANASTASIA BEVERLY",
      "price": "97.9 USD",
      "image1" : "image/24.png",
  
      "category":"womwn",
  
  
    },
  
    {
      "id" : 15,
      "title":"trendyol",
      "price": "27.9 USD",
      "image1" : "image/25.png",
  
  
  
    },
    
  
  ]
console.log(data);






let pca=[];

addBtn1.onclick=function(){
  pca.push(data[0]);

}
addBtn2.onclick=function(){
  pca.push(data[1]);

}
addBtn3.onclick=function(){
  pca.push(data[2]);

}
addBtn4.onclick=function(){
  pca.push(data[3]);

}
addBtn5.onclick=function(){
  pca.push(data[4]);

}
addBtn6.onclick=function(){
  pca.push(data[5]);

}
addBtn7.onclick=function(){
  pca.push(data[6]);

}
addBtn8.onclick=function(){
  pca.push(data[7]);

}
addBtn9.onclick=function(){
  pca.push(data[8]);

}
addBtn10.onclick=function(){
  pca.push(data[9]);

}
addBtn11.onclick=function(){
  pca.push(data[10]);

}
addBtn12.onclick=function(){
  pca.push(data[11]);

}
addBtn13.onclick=function(){
  pca.push(data[12]);

}
addBtn14.onclick=function(){
  pca.push(data[13]);

}
addBtn15.onclick=function(){
  pca.push(data[14]);

}






let j=data.id;




  $(".table").hide();  $(".car").hide(); 
  $(".my-cart-btn").click(function(){
    $(".table").show();
    $(".car").show(); 
    $(".div1").hide(); 
   
    // addtocart();
    getcartitem();

  });


 

// function addtocart(j){
 
//   for (var c=0;c<data.length;c++)
// if (value == data[c].title){


// }


// }







 function getcartitem (){
  
   var r ="";

   for ( var i = 0; i< pca.length  ; i++){
      r += 
`<tr>
   <td> ${pca[i].id}</td>
   <td>  <img src="${pca[i].image1}"  class="imgcart" width="50px">  </td>
   
   <td>${pca[i].price}</td>
   <td>
          <select>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
          </select>
        </td>
         
   <td>
  
     
     <button class="btn btn-danger dell ps-4" onclick="deletep(${pca[i].id})" type="button">Delete</button>
   
 </td>
    
 </tr>`;   
   }
xx.innerHTML = r;



}




function deletep(id) {

  // getcartitem();
  let index=0;
for (var f=0;f<pca.length;f++){
if (pca[f].id==id )
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
      pca.splice(index,1);

  getcartitem();
      Swal.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      )
    }
  })
  
}







 

//   Swal.fire({
//     title: 'Are you sure?',
//     text: "You won't be able to revert this!",
//     icon: 'warning',
//     showCancelButton: true,
//     confirmButtonColor: '#3085d6',
//     cancelButtonColor: '#d33',
//     confirmButtonText: 'Yes, delete it!'
//   }).then((result) => {
//     if (result.isConfirmed) {
//           pca.splice(index,1);
//   getcartitem();
//       Swal.fire(
//         'Deleted!',
//         'Your file has been deleted.',
//         'success'
//       )
//     }
//   })



 




























