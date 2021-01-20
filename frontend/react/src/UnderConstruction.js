import React from 'react';

import {Link} from "react-router-dom";

import under_constr from './images/Page_Under_Construction.png'

class UnderConstruction extends React.Component {
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
            <div class="wrapper row3">
                <main class="hoc container clear"> 
                    <div class="content three_quarter first" id="general_info"> 
                        <h1><b>Σελίδα Υπο Κατασκευή</b></h1>
                        <img src={under_constr} alt="Construction_worker"></img>
                        <p>Η σελίδα είναι υπο κατασκευή. Παρακαλούμε ξαναελέγξτε μια άλλη μέρα</p>
                    </div>
                    <div class="sidebar one_quarter"> 
                        <h6>Άλλες Σελίδες</h6>
                        <nav class="sdb_holder">
                        <ul>
                            <li><Link to="/Employees/EmployeesCOVID/Instructions" >Οδηγίες Για Εργαζόμενους Περι COVID-19 </Link></li>
                            <li><Link to="/Employees/EmployeesCOVID/EmployeesCOVIDAdeies/EmployeesEidikouSkopou/" >Άδεια Ειδικού Σκοπού</Link>
                            </li>
                        </ul>
                        </nav>
                    </div>
                </main>
            </div>
        </div>
    );
  }
}

export default UnderConstruction;


