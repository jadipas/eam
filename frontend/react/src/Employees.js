import React from 'react';

import {Link} from "react-router-dom";


class Employees extends React.Component {
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
                <section className="hoc container clear"> 
                    <div className="sectiontitle">
                    <h6 className="heading">Εργαζόμενοι</h6>
                    <p>Όλες οι απαραίτητες πληροφορίες για τους εργαζομένους</p>
                    </div>
                    <ul className="nospace group ref-img">
                      <li className="one_quarter first"><Link className="" to="/"><p className='in_div'>Άδειες</p></Link></li>
                      <li className="one_quarter"><Link className="" to="/"><p className='in_div' >Νομοθεσία</p></Link></li>
                      <li className="one_quarter"><Link className="" to="/Employees/EmployeesCOVID"><p className='in_div'>COVID-19</p></Link></li>
                      <li className="one_quarter"><Link className="" to="/"><p className='in_div' >Δηλώσεις</p></Link></li>
                    </ul>
                </section>
            </div>
        </div>
    );
  }
}

export default Employees;


