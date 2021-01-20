import React from 'react';

import {Link} from "react-router-dom";

class EmployersCOVIDAdeies extends React.Component {
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
                        <li className="one_half first">
                        <article><h6 className="heading">Τηλεργασία</h6>     
                            <p>Εδώ μπορείτε να δηλώσετε τους Εργαζόμενους που θέλετε να δουλέψουν εξ αποστάσεως. Είστε υποχρεωμένοι ως Εργοδότης να απασχολείτε το 80% του προσωπικού σας με Τηλεργασία</p>
                            <footer><Link className="btn" to="EmployerRemote">Κάντε Δήλωση</Link></footer>
                        </article>
                        </li>
                        <li className="one_half">
                        <article><h6 className="heading">Αναστολή Εργασίας</h6>
                            <p>Εδώ μπορείτε να κάνετε τη δήλωση Αναστολής Εργασίας φια κάποιον υπάλληλο σας. Αυτό σημαίνει πως ο/η υπάλληλος αυτός/αυτή δεν θα έχει επαγγελματικές υποχρεώσεις απέναντι στην εταιρία σας, αλλά ούτε η εταιρία απέναντί του/της.</p>
                            <footer><Link className="btn" to="EmployerBreak">Κάντε Δήλωση</Link></footer>
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

export default EmployersCOVIDAdeies;


