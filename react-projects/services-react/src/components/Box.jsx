export function Box({ logo, services, info ,color}){
    return (

      <div className="container">
            <div className="box" style={{backgroundColor:color}}>{logo}</div>
            <div className="services"><h3>{services}</h3></div>
            <div className="related_to_services"><p className="paragraph">{info}</p></div>
            <div className="inside-of-container">
            <div className="boxes"></div>
            <div className="boxes"></div>
            <div className="boxes"></div>
            </div>
            <div className="last-div">Learn more</div>
        </div>
    );
}