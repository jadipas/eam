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
                                <div className="block clear"><a href="#"><i className="fas fa-phone"></i></a> <span><strong>Καλέστε μας:</strong> +30 2131516649<br/><br/>+30 2131516651</span></div>
                            </li>
                            <li className="one_quarter">
                                <div className="block clear"><a href="#"><i className="fas fa-envelope"></i></a> <span><strong>Στείλτε μας email:</strong> support@ypakp.gov</span></div>
                            </li>
                            <li className="one_quarter">
                                <div className="block clear"><a href="#"><i className="fas fa-clock"></i></a> <span><strong> Δευτέρα - Παρασκευή:</strong> 08.00πμ - 02.00μμ <br/>(<Link to="/Contact">Μόνο μετα απο ραντεβού</Link>)</span></div>
                            </li>
                            <li className="one_quarter">
                                <div className="block clear"><a href="#"><i className="fas fa-map-marker-alt"></i></a> <span><strong>Επισκεφθείτε μας:</strong> Directions to <a href="#">our location</a></span></div>
                            </li>
                            </ul>
                        </div>
                        </footer>
                    </div>
    );
  }
}

export default Footer;


