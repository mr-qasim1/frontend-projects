export function Navbar() {
    return (
      <nav id="navbar">
        <div className="logo">
          <img src="logo.jpg" width="135"></img>
        </div>
        <div className="buttons">
          <div id="services-menu" className="menu">
            Services
            <div className="drop-down">
              <ul>
                <li>Web & App development</li>
                <li>Digital Marketing</li>
                <li>Branding & Design</li>
              </ul>
            </div>
          </div>
          <div id="solutions-menu" className="menu">
            Solutions
            <div className="drop-down">
              <ul>
                <li>Digital Transformation Solutions</li>
                <li>End-to-End It solutions</li>
                <li>Brand & Marketing Solutions</li>
              </ul>
            </div>
          </div>
          <div id="resources-menu" className="menu">
            Resources
            <div className="drop-down">
              <ul>
                <li>Skilled It Professionals</li>
                <li>Tech Tools & Infrastructure</li>
                <li>Training & Support Resources</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="rightcornerbutton">
          <a href="" className="rightcornerbutton1">
            Discuss the project
          </a>
        </div>
        </nav>
        );
}