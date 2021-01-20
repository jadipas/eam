import React from 'react';

import {Link} from "react-router-dom";

class EmployeesCOVIDAdeies extends React.Component {
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
                        <li className="one_third first">
                        <article><h6 className="heading">Τηλεργασία</h6>     
                            <p>Με τη δήλωση για Τηλεργασία μπορείτε πλέον να εργάζεστε εξ αποστάσεως για την περίοδο της πανδημίας</p>
                            <footer><Link className="btn" to="EmployeeRemote/">Κάντε Δήλωση</Link></footer>
                        </article>
                        </li>
                        <li className="one_third">
                        <article><h6 className="heading">Αναστολή Εργασίας</h6>
                            <p>Σας δίνεται η δυνατότη να σταματήσετε να εργάζεστε εφόσον δεν είναι δυνατή η Τηλεργασία στο επάγγελμά σας</p>
                            <footer><Link className="btn" to="EmployeeBreak/">Κάντε Δήλωση</Link></footer>
                        </article>
                        </li>
                        <li className="one_third">
                        <article><h6 className="heading">Άδεια Ειδικού Σκοπού</h6>
                            <p>Διάφορες άδειες Ειδικού Χαρακτήρα για διευκόλυνση στην περίοδο της πανδημίας</p>
                            <footer><Link className="btn" to="EmployeesEidikouSkopou/">Περισσoτερα</Link></footer>
                        </article>
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

export default EmployeesCOVIDAdeies;


