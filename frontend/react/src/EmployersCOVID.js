import React from 'react';

import {Link} from "react-router-dom";

class EmployersCOVID extends React.Component {
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
            <div className="wrapper row2">
                <section id="references" className="hoc container clear"> 
                    <div className="sectiontitle">
                    <h6 className="heading">Εργαζόμενοι</h6>
                    <p>Όλες οι απαραίτητες πληροφορίες για τους εργαζομένους σχετικά με τον COVID-19</p>
                    </div>
                    <ul className="nospace group ref-img">
                        <li className="one_third"><Link className="" to="/Employees/EmployeesCOVID/EmployeesCOVIDAdeies/"><p className='in_div' >Άδειες Εργαζομένων</p></Link></li>
                        <li className="one_third"><Link className="" to="/UnderConstruction"><p className='in_div' >Οδηγίες</p></Link></li>
                        <li className="one_third"><Link className="" to="/UnderConstruction"><p className='in_div' >Επιδόματα</p></Link></li>
                    </ul>
                </section>
            </div>
        </div>
    );
  }
}

export default EmployersCOVID;


