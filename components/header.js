class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <header>
            <nav class="navbar">
                <div class="logo">Logo</div>
                <ul class="nav-links">
                    <li><a href="#">Home</a></li>
                    
                    <li class="dropdown">
                        <a href="#">Classes</a>
                        <ul class="dropdown-menu">
                            <li>&nbsp;</li>
                            <li><a href="#classes">Classes</a></li>
                            <li><a href="#workshops">Workshops</a></li>
                        </ul>
                    </li>
                    <li><a href="#">Bookings</a></li>
                    <li><a href="#about">About Us</a></li>
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
    });
    
  customElements.define('header-component', Header);