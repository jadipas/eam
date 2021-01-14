import React from 'react';

import {Link} from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

class Contact extends React.Component {
  constructor(props) {
    super(props)

    this.onChange = this.onChange.bind(this)

    this.props.navbarUpdate(this.props.path)
  }

  onChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value,
    });
  }

  render(){    
    return (
        <div>
          <div className="wrapper row3">
            <main className="hoc container clear"> 
                <div className="content one_third first">
                  <h1><u>Επικοινωνία</u></h1>
                  <ul>
                    <li>
                      <h2>Τηλεφωνικά</h2>
                      <p>Επικοινωνήστε μαζί μας στα τηλέφωνα <br/> <u>2131516649</u> και <u>2131516651</u> <br/>κάθε <u>Δευτέρα-Παρασκευή, <br/>απο τις 8 πμ μέχρι τις 2 μμ</u></p>
                    </li>
                    <li>
                      <h2>Email</h2>
                      <p>Επικοινωνήστε μαζί μας στο email <br/> <u>support@ypakp.gov</u> <br/>και θα σας απαντήσουμε εντός 2 εργάσιμων ημερών</p>
                    </li>
                  </ul>
                </div>
                <div className="content one_third">
                  <h2>Επίσκεψη</h2>
                  <p><u>Λόγω του COVID-19 οι επισκέψεις θα γίνονται μόνο με ραντεβού</u></p>
                  <Link className="btn" to="/Contact/Appointment">Κλείστε ραντεβού ηλεκτρονικά</Link>
                  <p style={{padding: "10px 0 0 40%", margin: "0px"}}>ή</p><br/><p style={{padding: "0 0 0 30%", margin: "0px"}}>Καλέστε μας</p>

                </div>
                <div className="content one_third">
                  <MapContainer
                    className="markercluster-map"
                    center={[37.9804, 23.73095]}
                    zoom={16}
                    maxZoom={18}
                    id="mapid"
                  >
                    <TileLayer
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <Marker position={[37.9804, 23.73095]}>
                      <Popup>
                        Σταδίου 29,<br /> Αθήνα
                      </Popup>
                    </Marker>
                  </MapContainer>
                </div>
            </main>
          </div>
        </div>
    );
  }
}

export default Contact;


