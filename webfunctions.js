let lastScrollY = window.scrollY;
let circle_animation = true

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    if (lastScrollY + 20 < window.scrollY || lastScrollY - 20 > window.scrollY) {
      if (window.scrollY > lastScrollY) {
        // Scrolling down
        document.getElementById('navbar').classList.add('nav_disappear');
        document.getElementById('navbar').classList.remove('nav_appear');
      } else {
        // Scrolling up
        document.getElementById('navbar').classList.remove('nav_disappear');
        document.getElementById('navbar').classList.add('nav_appear');
      }
      lastScrollY = window.scrollY;
    }
  }

    if (circle_animation){
      if(document.getElementById("circle_id")){
        if(document.getElementById("circle_id").getBoundingClientRect().y - (window.innerHeight / 2 ) < 0 ){
            document.getElementById("circle_id").classList.add("animate_circle");
            circle_animation = false;
        }
      } else circle_animation = false; // if circle_id is not present, disable animation
    }
});

   function toggleMenu() {
            let menu = document.getElementById("dropdownID");
            if (menu.style.display === "block") {
                menu.style.display = "none";
            } else {
                menu.style.display = "block";
            }
        }

        //makes the dropdown menu disappear when screen resizes
        window.addEventListener('resize', () => {
          if(document.getElementById("dropdownID")){
            if (document.getElementById("dropdownID").style.display === 'block')
                document.getElementById("dropdownID").style.display = 'none';
          }
        });

        window.addEventListener('scroll', () => {
          if(document.getElementById("dropdownID")){
            if (document.getElementById("dropdownID").style.display === 'block')
                document.getElementById("dropdownID").style.display = 'none';
          }
        });

