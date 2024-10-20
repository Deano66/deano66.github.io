class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <header>
            <nav class="navbar">
                <div class="logo">
                iSDA
                </div>
                <ul class="nav-links">
                    <li><a href="#">Home</a></li>
                    
                    <li class="dropdown">
                        <a href="#">Classes</a>

                      <ul class="dropdown-menu">
                            <li>&nbsp;</li>
                            <li><a href="#weeklyclasses">Weekly Classes</a></li>
                            <li><a href="#HolidayCampsAndWorkshops">Holiday Camps and Workshops</a></li>
                            <li><a href="#AfterSchoolClubs">After school clubs</a></li>
                            <li><a href="#Parties">Parties</a></li>
                            <li><a href="#PrivateSingingLessons">Private singing lessons</a></li>
                        </ul> 
                    </li>

                    <li><a href="https://app.classmanager.com/classes/ising-idance-iact-theatre-school">Bookings</a></li>
                    <li><a href="#staff">Staff</a></li>
                </ul>
                <div class="hamburger">
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
                </div>
            </nav>
        </header>
      `;
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const dropdown = document.querySelector('.dropdown');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    dropdown.addEventListener('click', () => {
        dropdown.classList.toggle('active');
    });

    navLinks.addEventListener('click', () => {
         navLinks.classList.toggle('active');
    });


});

    
  customElements.define('header-component', Header);