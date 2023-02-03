const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content')

function PageTransitions(){
    //button click active class
    for (let i = 0; i < sectBtn.length; i++) {
        sectBtn[i].addEventListener('click', (e) => {
          const currentBtn = document.querySelector('.active-btn');
          if (currentBtn) {
            currentBtn.classList.remove('active-btn');
          }
          e.target.classList.add('active-btn');
        });
      }
    
    //sections Active Class
    allSections.addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        if (id) {
              //remove selected from the other btns
          sectBtn.forEach((btn) => {
            btn.classList.remove('active');
          });
          e.target.classList.add('active');
            //hide other sections
          sections.forEach((section) => {
            section.classList.remove('active');
          });
          const element = document.getElementById(id);
          element.classList.add('active');
        }
      });
    }
PageTransitions();    
