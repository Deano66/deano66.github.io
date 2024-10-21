class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <!-- Header Start -->

        <div class="offcanvas offcanvas-end" id="rightMenu">
                <div class="offcanvas-header">
                    <div class="menuText headlineFont">iSDA</div>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas"></button>
                </div>
                <div class="offcanvas-body">
                    <div class="rightMenuItem" data-bs-dismiss="offcanvas"><a class="nav-link" href="#">Home</a></div>
                    <div class="rightMenuItem" data-bs-dismiss="offcanvas"><a class="nav-link" href="#weeklyclasses">Weekly Classes</a></div>
                    <div class="rightMenuItem" data-bs-dismiss="offcanvas"><a class="nav-link" href="#HolidayCampsAndWorkshops">Holiday Camps and Workshops</a></div>
                    <div class="rightMenuItem" data-bs-dismiss="offcanvas"><a class="nav-link" href="#AfterSchoolClubs">After school clubs</a></div>
                    <div class="rightMenuItem" data-bs-dismiss="offcanvas"><a class="nav-link" href="#Parties">Parties</a></div>
                    <div class="rightMenuItem" data-bs-dismiss="offcanvas"><a class="nav-link" href="#PrivateSingingLessons">Private singing lessons</a></div>
                    <div class="rightMenuItem" data-bs-dismiss="offcanvas"><a class="nav-link" href="https://app.classmanager.com/classes/ising-idance-iact-theatre-school">Bookings</a></div>
                    <div class="rightMenuItem" data-bs-dismiss="offcanvas"><a class="nav-link" href="#staff">Staff</a></div>

                </div>
        </div>
          
        <div class="header">

            <div class="headerImageDiv">
              <img class="headerImage" src="./images/iSDA_Logo_Dancer.png">
            </div>
          
          
            <div class="menuButton show-menu ">
              <button type="button" class="btn btn-outline-light" data-bs-toggle="offcanvas" data-bs-target="#rightMenu">
          
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                  </svg>
          
              </button>
            </div>
          
            <div class="mobile-hide">
                <nav class="navbar navbar-expand navbar-light justify-content-center">
                  <!--<nav class="navbar navbar-expand-lg navbar-light bg-light nav-fill">  -->
                    <div class="container-fluid ">
                      <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul class="navbar-nav ">
              
                          <li class="nav-item">
                            <a class="nav-link" href="#">Home</a>
                          </li>
              
                          <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Classes</a>
                            <div class="dropdown-menu" >
                              <a class="dropdown-item" href="#weeklyclasses">Weekly Classes</a>
                              <a class="dropdown-item" href="#HolidayCampsAndWorkshops">Holiday Camps and Workshops</a>
                              <a class="dropdown-item" href="#AfterSchoolClubs">After school clubs</a>
                              <a class="dropdown-item" href="#Parties">Parties</a>
                              <a class="dropdown-item" href="#PrivateSingingLessons">Private singing lessons</a>
                            </div>
                          </li>
              
                          <li class="nav-item">
                            <a class="nav-link" href="https://app.classmanager.com/classes/ising-idance-iact-theatre-school">Bookings</a>
                          </li>
              
                          <li class="nav-item">
                            <a class="nav-link" href="#staff">Staff</a>
                          </li>
              
                        </ul>
              
                      </div>
                    </div>
                  </nav>
            </div>

        </div>
        <!-- Header End -->
      `;
    }
  }
  
  customElements.define('header-component', Header);