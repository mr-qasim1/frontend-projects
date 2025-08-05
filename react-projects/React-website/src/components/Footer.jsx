export function Footer() {
    return (
      <footer id="footer">
        <div className="parentdivoffooter">
          <div className="divinside1footer">
            <img src="logo.jpg" width="240"></img>
            <p className="pinsideoffooter">
              professional MVP development services.fixed-price
              <br />
              development starting at $25,000.launch your products in
              <br /> weeks.
            </p>

            <br />
            <div className="childdivofinsidefooter">
              <p className="pinsideofchilddiv">
                <i className="hgi hgi-stroke  hgi-checkmark-circle-04"></i>
                Fixed-price development
              </p>
              <p className="p1insideofchilddiv">
                <i className="hgi hgi-stroke  hgi-checkmark-circle-04"></i>30-day
                launch support
              </p>
              <p className="p2insideofchilddiv">
                <i className="hgi hgi-stroke  hgi-checkmark-circle-04"></i>Senior
                developers only
              </p>
              <p className="p3insideofchilddiv">
                <i className="hgi hgi-stroke  hgi-checkmark-circle-04"></i>Clean ,
                Scalable Code
              </p>
            </div>
          </div>

          <div className="divinsidefooter">
            <h5 className="h5insideofchilddiv">Services</h5>

            <ul>
              <li>Web app MVP</li>
              <li>Saas MVP</li>
              <li>Web3MVP</li>
              <li>AI MVP</li>
            </ul>
          </div>
          <div className="divinsidefooter">
            <h5 className="h5insideofchilddiv">Solutions</h5>
            <ul>
              <li>Startup MVP</li>
              <li>Agency MVP</li>
              <li>Enterprise MVP</li>
            </ul>
          </div>
          <div className="divinsidefooter">
            <h5 className="h5insideofchilddiv">Get Started</h5>

            <ul>
              <li>Ready to build your MVP?</li>
              <li>Schedule a consultation to</li>
              <li>discuss your project.</li>
              <a href="" className="footerbutton">
                Discuss the project<i className="fa-solid fa-arrow-right"></i>
              </a>
            </ul>
          </div>
        </div>
      </footer>
    );
}