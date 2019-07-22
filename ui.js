function setHeight(){
    const intro = document.getElementById('intro');
    const navbarHeight = document.getElementById('navbar').offsetHeight;
    const pageHeight = window.innerHeight;
    intro.style.height = pageHeight - navbarHeight + "px";
  }
  setHeight();
  document.onclick = setHeight();

  window.onscroll = () => {
    let btt = document.getElementById('btt');
    let aboutPos = document.getElementById('about').offsetTop;
    let scrollPos = document.documentElement.scrollTop;

    if(scrollPos >= aboutPos){
      btt.style.display="block";
    }else{
      btt.style.display="none";
    }

  }