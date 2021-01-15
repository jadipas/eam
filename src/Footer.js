import React from 'react';

import {Link} from "react-router-dom";


class Footer extends React.Component {
  
  render(){     
    return (
        <div className="wrapper row4">
                        <footer id="footer" className="hoc clear"> 
                        <div id="ctdetails" className="clear">
                            <ul className="nospace clear">
                            <li className="one_quarter first">
                                <div className="block clear"><Link to="Contact"><i className="fas fa-phone"></i></Link> <span><strong>Καλέστε μας:</strong> +30 2131516649<br/><br/>+30 2131516651</span></div>
                            </li>
                            <li className="one_quarter">
                                <div className="block clear"><Link to="Contact"><i className="fas fa-envelope"></i></Link> <span><strong>Στείλτε μας email:</strong> support@ypakp.gov</span></div>
                            </li>
                            <li className="one_quarter">
                                <div className="block clear"><Link to="Contact"><i className="fas fa-clock"></i></Link> <span><strong> Δευτέρα - Παρασκευή:</strong> 08.00πμ - 02.00μμ </span></div>
                            </li>
                            <li className="one_quarter">
                                <div className="block clear"><Link to="Contact"><i className="fas fa-map-marker-alt"></i></Link> <span><strong>Επισκεφθείτε μας:</strong> <br/>(<Link to="Contact/Appointment">Μόνο μετα απο ραντεβού</Link>)</span></div>
                            </li>
                            </ul>
                        </div>
                        </footer>
                    </div>
    );
  }
}

export default Footer;


