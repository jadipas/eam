import React from 'react';

import {Link} from "react-router-dom";
import { Link as Scroll_link, animateScroll as scroll } from "react-scroll";
import ReactPlayer from "react-player"

class EmployeeCOVIDInstr extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
        path: 'Home/Employees/COVID/Instructions'
    }

    this.onChange = this.onChange.bind(this)

    this.props.navbarUpdate(this.state.path)
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
                <h1>Ιατρικές Οδηγίες για την Πρόληψη της Διασποράς του Ιού</h1>
                <p>Επαναλαμβάνονται με εμφατικό τρόπο οι γενικές οδηγίες ατομικής υγιεινής και προστασίας. Η τήρηση τους μειώνει δραστικά τον κίνδυνο μετάδοσης του ιού:</p>
                <ul>
                  <li>
                    <p>
                      Φοράτε ΠΑΝΤΟΥ και ΠΑΝΤΑ την μάσκα σας.
                    </p>
                  </li>
                  <li>
                    <p>
                      <b>ΜΗΝ</b> ακουμπάτε την μάσκα σας με τα χέρια σας. Πιάστε μόνον τα λάστιχα για να την βάλετε και να την βγάλετε                     
                    </p>
                  </li>
                  <li>
                    <p>
                      Αν βήξετε ή φταρνιστείτε καλύψτε το στόμα και τον μύτn σας επιπλέον με χαρτομάvτnλο.
                    </p>
                  </li>
                  <li>
                    <p>
                      Πετάξτε αμέσως το χαρτομάντηλο στον κάδο απορριμμάτων.
                    </p>
                  </li>
                  <li>
                    <p>
                      Πλένετε τακτικά τα χέρια σας με σαπούνι και νερό (τουλάχιστον για 30 δευτερόλεπτα - και τον αντίχειρα) ή χρησιμοποιείστε αλκοολούχο αντισηπτικό διάλυμα.
                    </p>
                    <ReactPlayer
                      url="https://www.youtube.com/watch?v=3PmVJQUCm4E&feature=youtu.be"
                    />
                  </li>
                  <li>
                    <p>
                      Μην αγγίζετε τα μάτια, τη μύτη και το στόμα σας.
                    </p>
                  </li>
                  <li>
                    <p>                     
                      Καθαρίζετε τακτικά το χώρο σας, τις επιφάνειες εργασίας καθώς και τα πόμολα με αραιωμένη χλωρίνη ή αντισηπτικό διάλυμα.
                    </p>
                  </li>
                  <li>
                    <p>
                        Τηρείτε τις αποστάσεις και αποφεύγετε τον συγχρωτισμό                      
                    </p>
                  </li>
                  <li>
                    <p>
                      Αερίζετε τους χώρους εργασίας επαρκώς (ανοιχτά παράθυρα, αποφυγή συγχρωτισμού).                     
                    </p>
                  </li>
                </ul>
              </div>
              <div class="sidebar one_quarter"> 
                <h6>Lorem ipsum dolor</h6>
                <nav class="sdb_holder">
                  <ul>
                    <li><Scroll_link activeClass="active" to="general_info" spy={true} smooth={true} duration={500}>Γενικές Οδηγίες</Scroll_link></li>
                    <li><a href="#">Navigation - Level 1</a>
                      <ul>
                        <li><a href="#">Navigation - Level 2</a></li>
                        <li><a href="#">Navigation - Level 2</a></li>
                      </ul>
                    </li>
                    <li><a href="#">Navigation - Level 1</a>
                      <ul>
                        <li><a href="#">Navigation - Level 2</a></li>
                        <li><a href="#">Navigation - Level 2</a>
                          <ul>
                            <li><a href="#">Navigation - Level 3</a></li>
                            <li><a href="#">Navigation - Level 3</a></li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li><a href="#">Navigation - Level 1</a></li>
                  </ul>
                </nav>
                <div class="sdb_holder">
                  <h6>Lorem ipsum dolor</h6>
                  <address>
                  Full Name<br/>
                  Address Line 1<br/>
                  Address Line 2<br/>
                  Town/City<br/>
                  Postcode/Zip<br/>
                  <br/>
                  Tel: xxxx xxxx xxxxxx<br/>
                  Email: <a href="#">contact@domain.com</a>
                  </address>
                </div>
                <div class="sdb_holder">
                  <article>
                    <h6>Lorem ipsum dolor</h6>
                    <p>Nuncsed sed conseque a at quismodo tris mauristibus sed habiturpiscinia sed.</p>
                    <ul>
                      <li><a href="#">Lorem ipsum dolor sit</a></li>
                      <li>Etiam vel sapien et</li>
                      <li><a href="#">Etiam vel sapien et</a></li>
                    </ul>
                    <p>Nuncsed sed conseque a at quismodo tris mauristibus sed habiturpiscinia sed. Condimentumsantincidunt dui mattis magna intesque purus orci augue lor nibh.</p>
                    <p class="more"><a href="#">Continue Reading &raquo;</a></p>
                  </article>
                </div>
              </div>
              <div class="clear"></div>
            </main>
          </div>
        </div>
    );
  }
}

export default EmployeeCOVIDInstr;


