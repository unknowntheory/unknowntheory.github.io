const card1 = document.querySelector('.card1')
const card2 = document.querySelector('.card2')
const card3 = document.querySelector('.card3')
let count = 0;
function handleImageClick(e){
 let target = e.target.className
 // console.log(e)
 const images = image()
 // console.log(target);
 if(target==='card1'){
   const cardOne = images.card1
  if(count >= cardOne.length){
    count = 0
  }
  card1.src = cardOne[count]
  count++
}
if(target==='card2'){
  const cardTwo = images.card2
 if(count >= cardTwo.length){
   count = 0
 }
 card2.src = cardTwo[count]
 count++
}
if(target==='card3'){
  const cardThree = images.card3
 if(count >= cardThree.length){
   count = 0
 }
 card3.src = cardThree[count]
 count++
}


}
function image(){
  return{
    card1:['blackbook-1-copy2.png','https://imgur.com/n1I3Hbj.png','https://imgur.com/zWrZFZH.png'],
    card2:['incentive-1.PNG','https://imgur.com/n9NAyBp.png','https://imgur.com/55E5WMA.png'],
    card3:['https://imgur.com/e5YJxfZ.png','https://imgur.com/Fc4lgqK.png','https://imgur.com/GcJ0UuV.png'],
  }
}
card1.addEventListener('click',handleImageClick);
card2.addEventListener('click',handleImageClick);
card3.addEventListener('click',handleImageClick);
