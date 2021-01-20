import React from 'react';

import {Link} from "react-router-dom";

class COVID extends React.Component {
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
              <div className="content three_quarter first"> 
                <div className="one_third first" id="emplrscov">
                    <Link to="/Employers/EmployersCOVID"><h2><u>Εργοδότες</u></h2></Link>
                    <p>Όλες οι πληροφορίες που θα χρειαστούν οι Εργοδότες την εποχή της πανδημίας</p>
                </div>
                <div className="one_third" id="emplescov">
                    <Link to="/Employees/EmployeesCOVID"><h2><u>Εργαζόμενοι</u></h2></Link>
                    <p>Όλες οι πληροφορίες που θα χρειαστούν οι Εργαζόμενοι την εποχή της πανδημίας</p>
                </div>
                <div className="one_third" id="gencov">
                    <Link to="/Employees/EmployeesCOVID/Instructions"><h2><u>Διαχείριση Κρούσματος</u></h2></Link>
                    <p>Οδηγίες για την αντιμετώπιση κρούσματος COVID στον εργασιακό χώρο</p>
                </div>
              </div>
              <div className="sidebar one_quarter"> 
                <h6>Χρήσιμα Λινκ</h6>
                <nav className="sdb_holder">
                  <ul>
                    <li><Link activeClass="active" to="/Employees/EmployeesCOVID/EmployeesCOVIDAdeies/EmployeesEidikouSkopou" spy={true} smooth={true} duration={500}>Άδεια Ειδικού Σκοπού Εργαζομένων</Link></li>
                    <li><Link activeClass="active" to="/UnderConstruction" spy={true} smooth={true} duration={500}>Επιστροφή Φόρων Εργοδοτών</Link></li>
                    <li><Link activeClass="active" to="/UnderConstruction" spy={true} smooth={true} duration={500}>Επίδομα Αδυναμίας Εργασίας λόγω COVID-19</Link></li>
                    <li><Link activeClass="active" to="/Employees/EmployeesCOVID/Instructions" spy={true} smooth={true} duration={500}>Ιατρικές Οδηγίες για την Αντιμετώπιση Κρούσματος στο Χώρο Εργασίας</Link></li>
                  </ul>
                </nav>
              </div>
              <div className="clear"></div>
            </main>
          </div>
        </div>
    );
  }
}

export default COVID;


