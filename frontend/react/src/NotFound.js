import React from 'react';

import {Link} from "react-router-dom";

import err_img from './images/404err.png'

class NotFound extends React.Component {
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
                        <h1><b>Η σελίδα δεν βρέθηκε</b></h1>
                        <img src={err_img} alt="404_worker"></img>
                        <p>Η σελίδα που ψάχνετε δεν υπάρχει.</p>
                    </div>
                    <div class="sidebar one_quarter"> 
                        <h6>Άλλες Σελίδες</h6>
                        <nav class="sdb_holder">
                        <ul>
                            <li><Link to="/Employees/EmployeesCOVID/Instructions" >Οδηγίες Για Εργαζόμενους Περι COVID-19 </Link></li>
                            <li><Link to="/" >Άδεια Ειδικού Σκοπού</Link>
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

export default NotFound;


