let navItem= document.querySelectorAll(".nav-item");
let navShow=document.querySelector(".content");
for(let i=0;i<navItem.length;i++){
navItem[i].addEventListener('mouseover',function(e){
  disPlayListData(e.target.text);
});
}
function disPlayListData(itemText){
console.log(itemText);
};
/*
here goes the code of hovering on an item on navbar
*/
/* new arrival slider*/
const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})
/* new arrival slider*/


   
