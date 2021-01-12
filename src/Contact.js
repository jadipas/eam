import React from 'react';

import {Link} from "react-router-dom";

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
            </main>
          </div>
        </div>
    );
  }
}

export default Contact;


