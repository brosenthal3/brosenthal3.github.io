//function that sets the height of the into element
function setHeight(){
  const intro = document.getElementById('intro');
  //the height of the navbar
  const navbarHeight = document.getElementById('navbar').offsetHeight;
  //the viewheight
  const pageHeight = window.innerHeight;
  //set the height to the pageheight - navbar height
  if(pageHeight > 350){
    intro.style.height = pageHeight - navbarHeight + "px";
  }
}

//when the user scrolls, document the scrolling position
window.addEventListener('scroll', () => {
  //the back to top (btt) button
  let btt = document.getElementById('btt');
  //the position of the about section
  let aboutPos = document.getElementById('about').offsetTop;
  //the current scrolling position for safari&chrome&other browsers.
  let scrollPos = document.documentElement.scrollTop;
  let safariScrollPos = document.body.scrollTop;
  //if you scrolled past the about section
  if(scrollPos >= aboutPos || safariScrollPos >= aboutPos){
      //display the btt button
      btt.style.display="block";
  }else{
      //hide the btt button
      btt.style.display="none";
  }
});

//window.addEventListener('load', setHeight());

//the function that gets activated when the back to top buttn is pressed.
function toTop() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0;
}

