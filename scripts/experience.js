document.addEventListener('DOMContentLoaded', () => {
    const urlData = "https://marcosismayle.github.io/challenge-one-portfolio-br-master/projects.json";
  
    async function getProjectData(urlData) {
      const response = await fetch(urlData);
      const data = await response.json();
      return data.projects;
    }
  
    const displayProjects = (projects) => {
      const grid = document.querySelector('div.experience__grid');
  
      projects.forEach((project) => {
        let screenshot = document.createElement('img');
        let name = document.createElement('h2');
        let description = document.createElement('p');
        let repoBtn = document.createElement('button');        
        let demoBtn = document.createElement('button');
        let card = document.createElement('section');
        let buttonContainer = document.createElement('div');
  
        screenshot.setAttribute('src', project.imageurl);
        screenshot.setAttribute('alt', `screenshot of ${project.name}`);
        screenshot.setAttribute('loading', 'lazy');
  
        name.innerHTML = `${project.name}`;
        description.innerHTML = `${project.description}`;
        buttonContainer.classList.add('button-container');
        repoBtn.innerHTML = `Repositório`;
        repoBtn.classList.add('repoBtn');
        demoBtn.innerHTML = `Ver demo`;
        demoBtn.classList.add('demoBtn');
        card.classList.add('item');

        
        buttonContainer.appendChild(repoBtn);
        buttonContainer.appendChild(demoBtn);

        repoBtn.addEventListener('click', () => {
            window.open(project.repo, '_blank');
          });
          
        demoBtn.addEventListener('click', () => {
        window.open(project.demourl, '_blank');
        });
  
        card.appendChild(screenshot);
        card.appendChild(name);
        card.appendChild(description);
        card.appendChild(buttonContainer);
  
        grid.appendChild(card);
      });

      $(document).ready(function() {
        $(".owl-carousel").owlCarousel({
          // Configurações do Owl Carousel
    
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
        });
      });
    }
  
    getProjectData(urlData)
      .then((projects) => {
        displayProjects(projects);
      });
  });
  