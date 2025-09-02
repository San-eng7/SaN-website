let menuicon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () =>  {
    sections.forEach(sec => {
        let top =window.scrollY;
        let offest = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        
        if( top >=offest && top < offest + height){
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        }
    })
}

menuicon.onclick = () => {
    menuicon.classList.toggle('bx-x');
    navbar.classList.toggle('active');

}

  if (!localStorage.getItem("preloaderShown")) {
    document.getElementById("preloader").style.display = "flex";

    setTimeout(() => {
      document.getElementById("preloader").style.display = "none";
      localStorage.setItem("preloaderShown", "true");
    }, 4000); 
  } else {
    document.getElementById("preloader").style.display = "none";
  }
