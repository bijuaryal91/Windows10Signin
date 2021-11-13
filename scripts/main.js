const elem=document.querySelector('body'),
password=document.querySelector('.password input'),
toggleBar=document.querySelector('.password'),
wrongPass=document.querySelector('.container .passwordWrong'),
okButton=document.querySelector('.passwordWrong button'),
submit=document.querySelector('.button button');
elem.ondblclick=()=>{
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.webkitRequestFullscreen) { /* Safari */
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) { /* IE11 */
        elem.msRequestFullscreen();
      }
}
// var status=0;
// document.addEventListener("fullscreenchange", function() {
//   if(status==0)
//   {
//     status=1;
//   }
//   else
//   {
//     status=0;
//   }
// }); 
submit.onclick=()=>{
    if(password.value=="bijubiju")
    {
      // window.location.href="desktop.html?status="+status;
      
    }
    else
    {
      toggleBar.classList.add('active');
      wrongPass.classList.remove('active');

    }
}
okButton.onclick=()=>{
  toggleBar.classList.remove('active');
  wrongPass.classList.add('active');
  password.value="";
}