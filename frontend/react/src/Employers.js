import React from 'react';

import {Link} from "react-router-dom";


class Employers extends React.Component {
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
                    <h6 className="heading">Εργοδότες</h6>
                    <p>Όλες οι απαραίτητες πληροφορίες για τους εργοδότες</p>
                    </div>
                    <ul className="nospace group ref-img">
                      <li className="one_third first"><Link className="" to="/UnderConstruction"><p className='in_div'>Δηλώσεις</p></Link></li>
                      <li className="one_third"><Link className="" to="/UnderConstruction"><p className='in_div' >Νομοθεσία</p></Link></li>
                      <li className="one_third"><Link className="" to="/UnderConstruction"><p className='in_div'>Προγράμματα</p></Link></li>
                      <li className="one_half first"><Link className="" to="/UnderConstruction"><p className='in_div' >Φορολογία</p></Link></li>
                      <li className="one_half"><Link className="" to="/Employers/EmployersCOVID"><p className='in_div' >COVID-19</p></Link></li>
                    </ul>
                </section>
            </div>
        </div>
    );
  }
}

export default Employers;


