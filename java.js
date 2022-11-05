// function changeImage(){
//    let displayImage = document.getElementById("image1");

//    if (displayImage.src.match('fotot/insta-photo1.jpg')) {
//       displayImage.src = "fotot/insta-photo2.jpg";
//    } else {
//       displayImage.src = "fotot/insta-photo1.jpg";
//    }
// }


function changeImage(){
   let displayImage = document.getElementById("i");

   if (displayImage.src.match('heart3.svg')) {
      displayImage.src = "photo/heartAfter.svg";
      displayImage.style.width = "22px";
      displayImage.style.height = "22px";
   } else {
      displayImage.src = "photo/heart3.svg";
      displayImage.style.width = "20px";
      displayImage.style.height = "20px";
   }

   
}






