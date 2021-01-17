import React from 'react';

import {Link} from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

class EmployeesEidikouSkopou extends React.Component {
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
                        <div className="content three_quarter first" id="monog"> 
                            <h1><u>Μονογονέας</u></h1>
                            <p>Θα πρέπει να δηλώσετε τον αριθμό των τέκνων σας. καθώς και τις ηλικίες τους και το δημόσιο ή ιδιωτικό ίδρυμα που φοιτούν </p>
                            <Link className="btn" to="/" >Κάντε Δήλωση</Link>
                        </div>
                        <div className="content three_quarter first" id="exgon"> 
                            <br/><br/>
                            <h1><u>Αποκλειστική επιμέλεια</u></h1>
                            <p>Θα πρέπει να δηλώσετε τον αριθμό των τέκνων σας. καθώς και τις ηλικίες τους και το δημόσιο ή ιδιωτικό ίδρυμα που φοιτούν.<br/><br/>Τέλος θα πρέπει να καταθέσετε τον αριθμό της Δικαστικής Απόφασης, βάση της οποίας έχετε την αποκλειστική επιμέλεια, καθώς και το διάστημα κατα το οποίο θα κάνετε αποκλειστικά εσείς χρήση της Άδειας Ειδικόυ Σκοπού</p>
                            <Link className="btn" to="DiloshEidikouSkopou/ApoklistikhEpimeleia" >Κάντε Δήλωση</Link>
                        </div>
                        <div className="content three_quarter first" id="dimboth"> 
                            <br/><br/>
                            <h1><u>Σύζυγος Δημόσιο - Και οι δύο Άδεια ειδικού σκοπού</u></h1>
                            <p>Θα πρέπει να δηλώσετε τον αριθμό των τέκνων σας. καθώς και τις ηλικίες τους και το δημόσιο ή ιδιωτικό ίδρυμα που φοιτούν.<br/><br/>Τέλος θα πρέπει να καταθέσετε το διάστημα κατα το οποίο θα κάνετε αποκλειστικά εσείς χρήση της Άδειας Ειδικόυ Σκοπού, καθώς και το διάστημα που θα κάνει χρήση της άδειας ο/η σύζυγος σας</p>
                            <Link className="btn" to="DiloshEidikouSkopou/Dhmosio" >Κάντε Δήλωση</Link>
                        </div>
                        <div className="content three_quarter first" id="dimsolo"> 
                            <br/><br/>
                            <h1><u>Σύζυγος Δημόσιο - Αποκλειστικά εγώ Άδεια ειδικού σκοπού</u></h1>
                            <p>Θα πρέπει να δηλώσετε τον αριθμό των τέκνων σας. καθώς και τις ηλικίες τους και το δημόσιο ή ιδιωτικό ίδρυμα που φοιτούν.<br/><br/>Τέλος θα πρέπει να καταθέσετε το διάστημα κατα το οποίο θα κάνετε αποκλειστικά εσείς χρήση της Άδειας Ειδικόυ Σκοπού, καθώς τον Αριθμό <Link to="/">Υπεύθυνης Δήλωσης</Link> βάση της οποίας ο/ σύζυγος σας δεν δύναται να φροντίζει τα τέκνα σας για το παραπάνω διάστημα</p>
                            <Link className="btn" to="DiloshEidikouSkopou/DhmosioApokleistikh" >Κάντε Δήλωση</Link>
                        </div>
                        <div className="content three_quarter first" id="oneandone"> 
                            <br/><br/>
                            <h1><u>Σύζυγος Δημόσιο - Εγώ Άδεια ειδικού σκοπού, ο/η σύζυγος απλή άδεια</u></h1>
                            <p>Θα πρέπει να δηλώσετε τον αριθμό των τέκνων σας. καθώς και τις ηλικίες τους και το δημόσιο ή ιδιωτικό ίδρυμα που φοιτούν. <br/><br/>Τέλος θα πρέπει να καταθέσετε το διάστημα κατα το οποίο θα κάνετε αποκλειστικά εσείς χρήση της Άδειας Ειδικόυ Σκοπού, καθώς το Είδος Άδειας του/της συζύγου <br/><b>(πχ αναρρωτική, μητρότητας, κυοφορίας)</b>, κατα τη διάρκεια της οποίας δεν δύναται να φροντίσει τα τέκνα</p>
                            <Link className="btn" to="/" >Κάντε Δήλωση</Link>
                        </div>
                        <div className="content three_quarter first" id="idsolo"> 
                            <br/><br/>
                            <h1><u>Σύζυγος Ιδιωτικός τομέας - Άδεια ειδικού σκοπού</u></h1>
                            <p>Θα πρέπει να δηλώσετε τον αριθμό των τέκνων σας. καθώς και τις ηλικίες τους και το δημόσιο ή ιδιωτικό ίδρυμα που φοιτούν  <br/><br/> Προσέξτε πως ο/η σύζυγος σας δεν θα δύναται χρήσης της Άδειας Ειδικού Σκοπού</p>
                            <Link className="btn" to="/" >Κάντε Δήλωση</Link>
                        </div>
                        <div className="content three_quarter first" id="idremote"> 
                            <br/><br/>
                            <h1><u>Σύζυγος Ιδιωτικός τομέας - Διευκόλυνση εργασίας εξ αποστάσεως</u></h1>
                            <p>Θα πρέπει να δηλώσετε τον αριθμό των τέκνων σας. καθώς και τις ηλικίες τους και το δημόσιο ή ιδιωτικό ίδρυμα που φοιτούν <br/><br/> Προσέξτε πως ο/η σύζυγος σας δεν θα δύναται χρήσης της Άδειας Διευκόλυνση Τροποποίησης του Ωραρίου και θα πρέπει να καταθέσετε τον Αριθμό της αντίστοιχης <Link to="/">Υπεύθυνης Δήλωσης</Link></p>
                            <Link className="btn" to="/" >Κάντε Δήλωση</Link>
                        </div>
                        <div className="content three_quarter first" id="idhours"> 
                            <br/><br/>
                            <h1><u>Σύζυγος Ιδιωτικός τομέας - Διευκόλυνση τροποποίησης του ωραρίου</u></h1>
                            <p>Θα πρέπει να δηλώσετε τον αριθμό των τέκνων σας. καθώς και τις ηλικίες τους και το δημόσιο ή ιδιωτικό ίδρυμα που φοιτούν <br/><br/> Προσέξτε πως ο/η σύζυγος σας δεν θα δύναται χρήσης της Άδειας Διευκόλυνση Τροποποίησης του Ωραρίου και θα πρέπει να καταθέσετε τον Αριθμό της αντίστοιχης <Link to="/">Υπεύθυνης Δήλωσης</Link></p>
                            <Link className="btn" to="/" >Κάντε Δήλωση</Link>
                        </div>
                        <div className="content three_quarter first" id="freelance"> 
                            <br/><br/>
                            <h1><u>Σύζυγος Ελεύθερος Επαγγελματίας</u></h1>
                            <p>Θα πρέπει να δηλώσετε τον αριθμό των τέκνων σας. καθώς και τις ηλικίες τους και το δημόσιο ή ιδιωτικό ίδρυμα που φοιτούν. <br/><br/>Τέλος θα πρέπει να καταθέσετε το διάστημα κατα το οποίο θα κάνετε χρήση της Άδειας Ειδικόυ Σκοπού </p>
                            <Link className="btn" to="/" >Κάντε Δήλωση</Link>
                        </div>
                        <div className="content three_quarter first" id="sick"> 
                            <br/><br/>
                            <h1><u>Σύζυγος δεν εργάζεται - Νοσηλεύεται</u></h1>
                            <p>Θα πρέπει να δηλώσετε τον αριθμό των τέκνων σας. καθώς και τις ηλικίες τους και το δημόσιο ή ιδιωτικό ίδρυμα που φοιτούν. <br/><br/>Τέλος θα πρέπει να καταθέσετε το διάστημα κατα το οποίο θα κάνετε χρήση της Άδειας Ειδικόυ Σκοπού  </p>
                            <Link className="btn" to="/" >Κάντε Δήλωση</Link>
                        </div>
                        <div className="content three_quarter first" id="sickcov"> 
                            <br/><br/>
                            <h1><u>Σύζυγος δεν εργάζεται - Κορωνοϊό</u></h1>
                            <p>Θα πρέπει να δηλώσετε τον αριθμό των τέκνων σας. καθώς και τις ηλικίες τους και το δημόσιο ή ιδιωτικό ίδρυμα που φοιτούν. <br/><br/>Τέλος θα πρέπει να καταθέσετε το διάστημα κατα το οποίο θα κάνετε χρήση της Άδειας Ειδικόυ Σκοπού </p>
                            <Link className="btn" to="/" >Κάντε Δήλωση</Link>
                        </div>
                        <div className="content three_quarter first" id="amea"> 
                            <br/><br/>
                            <h1><u>Σύζυγος δεν εργάζεται - ΑΜΕΑ</u></h1>
                            <p>Θα πρέπει να δηλώσετε τον αριθμό των τέκνων σας. καθώς και τις ηλικίες τους και το δημόσιο ή ιδιωτικό ίδρυμα που φοιτούν <br/><br/>Τέλος θα πρέπει να καταθέσετε το διάστημα κατα το οποίο θα κάνετε χρήση της Άδειας Ειδικόυ Σκοπού, εφόσον ο/η σύζυγος σας είναι Άτομο με Αναπηρία (ΑμεΑ) και λαμβάνει επίδομα από τον ΟΠΕΚΑ</p>
                            <Link className="btn" to="/" >Κάντε Δήλωση</Link>
                        </div>
                        <br/>
                    </div>
                    <div className="sidebar one_quarter"> 
                        <h6>Άδεια Ειδικού Σκοπού</h6>
                        <nav className="sdb_holder">
                        <ul>
                            <li><ScrollLink activeClass="active" to="mongon" spy={true} smooth={true} duration={500}>Μονογονέας</ScrollLink></li>
                            <li><ScrollLink activeClass="active" to="exgon" spy={true} smooth={true} duration={500}>Αποκλειστική επιμέλεια</ScrollLink></li>
                            <li><ScrollLink activeClass="active" to="dimboth" spy={true} smooth={true} duration={500}>Σύζυγος Δημόσιο - Και οι δύο Άδεια ειδικού σκοπού</ScrollLink></li>
                            <li><ScrollLink activeClass="active" to="dimsolo" spy={true} smooth={true} duration={500}>Σύζυγος Δημόσιο - Αποκλειστικά εγώ Άδεια ειδικού σκοπού</ScrollLink></li>
                            <li><ScrollLink activeClass="active" to="oneandone" spy={true} smooth={true} duration={500}>Σύζυγος Δημόσιο - Εγώ Άδεια ειδικού σκοπού, ο/η σύζυγος απλή άδεια</ScrollLink></li>
                            <li><ScrollLink activeClass="active" to="idsolo" spy={true} smooth={true} duration={500}>Σύζυγος Ιδιωτικός τομέας - Άδεια ειδικού σκοπού</ScrollLink></li>
                            <li><ScrollLink activeClass="active" to="idremote" spy={true} smooth={true} duration={500}>Σύζυγος Ιδιωτικός τομέας - Διευκόλυνση εργασίας εξ αποστάσεως</ScrollLink></li>
                            <li><ScrollLink activeClass="active" to="idhours" spy={true} smooth={true} duration={500}>Σύζυγος Ιδιωτικός τομέας - Διευκόλυνση τροποποίησης του ωραρίου</ScrollLink></li>
                            <li><ScrollLink activeClass="active" to="freelance" spy={true} smooth={true} duration={500}>Σύζυγος Ελεύθερος Επαγγελματίας</ScrollLink></li>
                            <li><ScrollLink activeClass="active" to="sick" spy={true} smooth={true} duration={500}>Σύζυγος δεν εργάζεται - Νοσηλεύεται</ScrollLink></li>
                            <li><ScrollLink activeClass="active" to="sickcov" spy={true} smooth={true} duration={500}>Σύζυγος δεν εργάζεται - Κορωνοϊό</ScrollLink></li>
                            <li><ScrollLink activeClass="active" to="amea" spy={true} smooth={true} duration={500}>Σύζυγος δεν εργάζεται - ΑΜΕΑ</ScrollLink></li>
                        </ul>
                        </nav>
                    </div>
                    
                </main>
            </div>
        </div>
    );
  }
}

export default EmployeesEidikouSkopou;


