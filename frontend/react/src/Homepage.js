import React from 'react';

import {Link} from "react-router-dom";

class Homepage extends React.Component {
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
                    <section id="introblocks">
                    <ul className="nospace group">
                        <li className="one_quarter first">
                        <article><h6 className="heading">Εργοδότες</h6>     
                            <p>Όλες οι πληροφορίες που αφορούν τους Εργοδότες.</p>
                            <footer><Link className="btn" to="/Employers">Περισσoτερα</Link></footer>
                        </article>
                        </li>
                        <li className="one_quarter">
                        <article><h6 className="heading">Εργαζόμενοι</h6>
                            <p>Όλες οι πληροφορίες που αφορούν τους Εργαζόμενους.</p>
                            <footer><Link className="btn" to="/Employees">Περισσoτερα</Link></footer>
                        </article>
                        </li>
                        <li className="one_quarter">
                        <article><h6 className="heading">Άνεργοι</h6>
                            <p>Όλες οι πληροφορίες που αφορούν τους Ανέργους.</p>
                            <footer><Link className="btn" to="/Jobless">Περισσoτερα</Link></footer>
                        </article>
                        </li>
                        <li className="one_quarter">
                        <article><h6 className="heading">COVID-19</h6>
                            <p>Όλες οι τελευταίες πληροφορίες για την αντιμετώπιση της πανδημίας.</p>
                            <footer><Link className="btn" to="/COVID">Περισσoτερα</Link></footer>
                        </article>
                        </li>
                    </ul>
                    </section>
                    <div className="clear"></div>
                </main>
            </div>
            <div className="wrapper row3">
                <main className="hoc container clear"> 
                    <section id="introblocks">
                    <ul className="nospace group">
                        <li className="one_quarter first">
                        <Link to="/Employees/EmployeesCOVID/Instructions"><article><h6 className="heading">Διαχείριση Κρούσματος στην Εργασία</h6>        
                        </article></Link>
                        </li>
                        <li className="one_quarter">
                        <Link to="/Employees/EmployeesCOVID/EmployeesCOVIDAdeies/EmployeesEidikouSkopou/"><article><h6 className="heading">Άδεια Ειδικού σκοπού</h6>
                        </article></Link>
                        </li>
                        <li className="one_quarter">
                        <Link to="/UnderConstruction"><article><h6 className="heading">Δηλώσεις Εργαζομένων</h6>
                        </article></Link>
                        </li>
                        <li className="one_quarter">
                        <Link to="/Contact"><article><h6 className="heading">Αλλαγές Λειτουργίας λόγω COVID</h6>
                        </article></Link>
                        </li>
                    </ul>
                    </section>
                    <div className="clear"></div>
                </main>
            </div>
        </div>
    );
  }
}

export default Homepage;


