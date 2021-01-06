import React from 'react';

import {Link} from "react-router-dom";
import { Link as Scroll_link, animateScroll as scroll } from "react-scroll";
import ReactPlayer from "react-player"

class EmployeeCOVIDInstr extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
        path: 'Home/Employees/EmployeesCOVID/Instructions'
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
                      url="https://www.youtube.com/watch?v=3PmVJQUCm4E&feature=youtu.be" width='75%'
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
                <h6>Ιατρικές Οδηγίες</h6>
                <nav class="sdb_holder">
                  <ul>
                    <li><Scroll_link activeClass="active" to="general_info" spy={true} smooth={true} duration={500}>Γενικές Οδηγίες</Scroll_link></li>
                    <li><Scroll_link activeClass="active" to="variety" spy={true} smooth={true} duration={500}>1. Είδη κριτηρίων</Scroll_link>
                      <ul>
                        <li><Scroll_link activeClass="active" to="one-one" spy={true} smooth={true} duration={500}>1.1 Κλινικά κριτήρια</Scroll_link></li>
                        <li><Scroll_link activeClass="active" to="one-two" spy={true} smooth={true} duration={500}>1.2 Απεικονιστικά διαγνωστικά κριτήρια</Scroll_link></li>
                        <li><Scroll_link activeClass="active" to="one-three" spy={true} smooth={true} duration={500}>1.3 Εργαστηριακά κριτήρια</Scroll_link></li>
                        <li><Scroll_link activeClass="active" to="one-four" spy={true} smooth={true} duration={500}>1.4 Επιδημιολογικά κριτήρια</Scroll_link></li>
                      </ul>
                    </li>
                    <li><Scroll_link activeClass="active" to="sick-class" spy={true} smooth={true} duration={500}>2. Ταξινόμηση Πιθανών Κρουσμάτων Στον Χώρο Εργασίας</Scroll_link>
                      <ul>
                        <li><Scroll_link activeClass="active" to="two-one" spy={true} smooth={true} duration={500}>2.1 Ενδεχόμενο κρούσμα</Scroll_link></li>
                        <li><Scroll_link activeClass="active" to="two-two" spy={true} smooth={true} duration={500}>2.2 Πιθανό κρούσμα</Scroll_link></li>
                        <li><Scroll_link activeClass="active" to="two-three" spy={true} smooth={true} duration={500}>2.3 Επιβεβαιωμένο κρούσμα</Scroll_link></li>
                      </ul>
                    </li>
                    <li><Scroll_link activeClass="active" to="contact-class" spy={true} smooth={true} duration={500}>3. Ταξινόμηση Ανάλογα με το Επίπεδο Έκθεσης</Scroll_link>
                      <ul>
                        <li><Scroll_link activeClass="active" to="three-one" spy={true} smooth={true} duration={500}>3.1 Στενές επαφές (έκθεση υψηλού κινδύνου)</Scroll_link></li>
                        <li><Scroll_link activeClass="active" to="three-two" spy={true} smooth={true} duration={500}>3.2  Επαφές (έκθεση χαμηλού κινδύνου)</Scroll_link></li>
                      </ul>
                    </li>
                    <li><Scroll_link activeClass="active" to="scenarios-class" spy={true} smooth={true} duration={500}>4. Πιθανά Σενάρια και Αντίστοιχες Δράσεις απο τους Εργαζομένους</Scroll_link>
                      <ul>
                        <li><Scroll_link activeClass="active" to="four-one" spy={true} smooth={true} duration={500}>4.1 O εργαζόμενος παρουσιάσει συμπτωματολογία ίωσης</Scroll_link></li>
                        <li><Scroll_link activeClass="active" to="four-two" spy={true} smooth={true} duration={500}>4.2 Ο εργαζόμενος παρουσιάσει συμπτωματολογία ίωσης και έχει ιστορικό Στενής Επαφής</Scroll_link></li>
                        <li><Scroll_link activeClass="active" to="four-three" spy={true} smooth={true} duration={500}>4.3	Ο εργαζόμενος δεν έχει κανένα  σύμπτωμα αλλά έχει ιστορικό ΣΤΕΝΗΣ ΕΠΑΦΗΣ</Scroll_link></li>
                        <li><Scroll_link activeClass="active" to="four-four" spy={true} smooth={true} duration={500}>4.4 Ο εργαζόμενος δεν έχει κανένα  σύμπτωμα αλλά έχει ιστορικό ΕΠΑΦΗΣ</Scroll_link></li>
                        <li><Scroll_link activeClass="active" to="flu-symptoms" spy={true} smooth={true} duration={500}>Συμπτωματολογία ίωσης</Scroll_link></li>
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>
              <div class="clear"></div>
              <div class="content three_quarter first" id="variety"> 
                <br/>
                <h1><u>1. Είδη κριτηρίων</u></h1>
                <br/>
                <div class="content three_quarter first" id="one-one"> 
                  <h1>1.1 Κλινικά κριτήρια</h1>
                  <p>Ασθενής με ένα τουλάχιστον από τα κατωτέρω συμπτώματα :</p>
                  <ul>
                    <li>
                      <p>
                        Βήχας
                      </p>
                    </li>
                    <li>
                      <p>
                        Πυρετός                   
                      </p>
                    </li>
                    <li>
                      <p>
                        Δύσπνοια
                      </p>
                    </li>
                    <li>
                      <p>
                        Αιφνίδια εκδήλωση ανοσμίας, αγευσίας ή δυσγευσίας
                      </p>
                    </li>
                  </ul>
                  <br/>
                  <p>Επιπρόσθετα λιγότερο ειδικά συμπτώματα περιλαμβάνουν:</p>
                  <ul>
                    <li>
                      <p>
                        Κεφαλαλγία
                      </p>
                    </li>
                    <li>
                      <p>
                        Φρίκια                   
                      </p>
                    </li>
                    <li>
                      <p>
                        Μυαλγίες
                      </p>
                    </li>
                    <li>
                      <p>
                        Καταβολή
                      </p>
                    </li>
                    <li>
                      <p>
                        Έμετο 
                      </p>
                    </li>
                    <li>
                      <p>
                        Διάρροια
                      </p>
                    </li>
                  </ul>
                  <br/>
                </div>
                <div class="content three_quarter first" id="one-two"> 
                  <h1>1.2 Απεικονιστικά διαγνωστικά κριτήρια</h1>
                  <ul>
                    <li>
                      <p>
                        Ακτινολογικά ευρήματα συμβατά με COVID-19
                      </p>
                    </li>
                  </ul>
                  <br/>
                </div>
                <div class="content three_quarter first" id="one-three"> 
                  <h1>1.3 Εργαστηριακά κριτήρια</h1>
                  <ul>
                    <li>
                      <p>
                        Ανίχνευση νουκλεϊκού οξέος SARS-CoV-2 σε κλινικό δείγμα
                      </p>
                    </li>
                  </ul>
                  <br/>
                </div>
                <div class="content three_quarter first" id="one-four"> 
                  <h1>1.4 Επιδημιολογικά κριτήρια</h1>
                  <p>Ασθενής με ένα τουλάχιστον από τα κατωτέρω επιδημιολογικά κριτήρια :</p>
                  <ul>
                    <li>
                      <p>
                        Στενή επαφή με επιβεβαιωμένο κρούσμα COVID-19 εντός 14 ημερών πριν την έναρξη συμπτωμάτων
                      </p>
                    </li>
                    <li>
                      <p>
                        Φιλοξενούμενοι ή προσωπικό δομών στις οποίες φιλοξενούνται ευάλωτα άτομα και έχει επιβεβαιωθεί συνεχιζόμενη μετάδοσηCOVID-19                   
                      </p>
                    </li>
                  </ul>
                  <br/>
                  <p>
                    Ως «επαφή» κρούσματος λοίμωξης COVID-19 ορίζεται άτομο που είχε ιστορικό επαφής με κρούσμα COVID-19 εντός χρονικού διαστήματος που κυμαίνεται από 48 ώρες πριν την έναρξη συμπτωμάτων του κρούσματος έως και 14 ημέρες μετά την έναρξη των συμπτωμάτων. Αν το κρούσμα COVID-19 δεν είχε συμπτώματα κατά τη διάγνωσή του, ως «επαφή» κρούσματος ορίζεται άτομο που είχε επαφή με το κρούσμα εντός χρονικού διαστήματος που κυμαίνεται από 48 ώρες πριν να ληφθεί το δείγμα το οποίο οδήγησε στην επιβεβαίωση του κρούσματος έως και 14 ημέρες μετά τη λήψη του δείγματος. Ο σχετιζόμενος με την έκθεση κίνδυνος λοίμωξης εξαρτάται από το επίπεδο έκθεσης, ο οποίος, με τη σειρά του, καθορίζει και την περαιτέρω διαχείριση των «επαφών» του κρούσματος. 
                  </p>
                  <br/>
                </div>
              </div>
              <div class="content three_quarter first" id="sick-class"> 
                <h1><u>2. Ταξινόμηση Πιθανών Κρουσμάτων Στον Χώρο Εργασίας</u></h1>
                <p> Yπάρχουν 3 είδη κρούσματος (ενδεχόμενο - πιθανό - επιβεβαιωμένο ) και 2 είδη επαφών (στενή υψηλού κινδύνου - απλή χαμηλού κινδύνου)</p>
                <br/>
                <div id="two-one">
                  <h1>2.1 Ενδεχόμενο κρούσμα</h1>
                  <p>Ασθενής που πληροί τα <Scroll_link activeClass="active" to="one-one" spy={true} smooth={true} duration={500}><u>κλινικά κριτήρια</u></Scroll_link></p>
                </div>
                <br/>
                <div id="two-two">
                  <h1>2.2 Πιθανό κρούσμα</h1>
                  <p>Ασθενής που πληροί τα <Scroll_link activeClass="active" to="one-one" spy={true} smooth={true} duration={500}><u>κλινικά κριτήρια</u></Scroll_link> και ένα <Scroll_link activeClass="active" to="one-four" spy={true} smooth={true} duration={500}><u>επιδημιολογικό κριτήριο</u></Scroll_link><br/>ή<br/>Άτομο που πληροί τα <Scroll_link activeClass="active" to="one-two" spy={true} smooth={true} duration={500}><u>απεικονιστικά διαγνωστικά κριτήρια</u></Scroll_link></p>
                </div>
                <br/>
                <div id="two-three">
                  <h1>2.3 Επιβεβαιωμένο κρούσμα</h1>
                  <p>Ασθενής που πληροί τα <Scroll_link activeClass="active" to="one-three" spy={true} smooth={true} duration={500}><u>εργαστηριακά κριτήρια</u></Scroll_link></p>
                </div>
                <br/>
              </div>
              <div class="content three_quarter first" id="contact-class"> 
                <h1><u>3. Ταξινόμηση Ανάλογα με το Επίπεδο Έκθεσης</u></h1>
                <p> Ανάλογα με το επίπεδο της έκθεσης, οι επαφές του κρούσματος κατηγοριοποιούνται σε:</p>
                <br/>
                <div id="three-one">
                  <h1>3.1 Στενές επαφές (έκθεση υψηλού κινδύνου)</h1>
                  <p>Ως στενή επαφή επιβεβαιωμένου κρούσματος λοίμωξης COVID-19 ορίζεται:</p>
                  <ul>
                    <li>
                      <p>
                      Άτομο που είχε επαφή πρόσωπο με πρόσωπο με ασθενή με COVID-19 σε απόσταση &lt; 2 μέτρων και για &ge; 15 λεπτά
                      </p>
                    </li>
                    <li>
                      <p>
                      Άτομο που είχε άμεση σωματική επαφή με ασθενή με COVID-19                   
                      </p>
                    </li>
                    <li>
                      <p>
                      Άτομο με απροφύλακτη επαφή με μολυσματικές εκκρίσεις ασθενή με COVID-19                    
                      </p>
                    </li>
                    <li>
                      <p>
                      Άτομο  που παρέμεινε σε κλειστό χώρο (π.χ. οικία, αίθουσα διδασκαλίας ή συσκέψεων, χώρο αναμονής νοσοκομείου, κλπ.) με ασθενή με COVID-19 για περισσότερο από 15 λεπτά                  
                      </p>
                    </li>
                    <li>
                      <p>
                      Συνταξιδιώτης στο ίδιο αεροσκάφος, ο οποίος καθόταν σε απόσταση δύο σειρών θέσεων (προς κάθε κατεύθυνση) από τον ασθενή με λοίμωξη COVID-19 , άτομα που ταξίδευαν μαζί ή φρόντισαν τον ασθενή και μέλη του πληρώματος που εξυπηρέτησαν το συγκεκριμένο τμήμα του αεροσκάφους όπου καθόταν ο ασθενής (επί ύπαρξης σοβαρών συμπτωμάτων ή μετακινήσεων του ασθενούς εντός του αεροσκάφους, που ενδέχεται να συνεπάγονται περισσότερο εκτεταμένη έκθεση, οι επιβάτες που κάθονταν στο ίδιο τμήμα του αεροσκάφους ή ακόμη και όλοι οι επιβάτες της πτήσης μπορεί να θεωρηθούν στενές επαφές)                 
                      </p>
                    </li>
                    <li>
                      <p>
                      Επαγγελματίας υγείας ή άλλο άτομο που παρείχε άμεση φροντίδα σε ασθενή με COVID-19 ή εργαζόμενος σε εργαστήριο που χειρίστηκε κλινικό δείγμα ασθενούς με COVID-19, χωρίς λήψη ή επί αστοχίας των ενδεδειγμένων μέτρων ατομικής προστασίας.                  
                      </p>
                    </li>
                  </ul>
                  <br/>
                </div>
                <br/>
                <div id="three-two">
                  <h1>3.2  Επαφές (έκθεση χαμηλού κινδύνου)</h1>
                  <p>Ως επαφή επιβεβαιωμένου κρούσματος COVID-19 ορίζεται:</p>
                  <ul>
                    <li>
                      <p>
                      Άτομο που είχε επαφή πρόσωπο με πρόσωπο με ασθενή με COVID-19 εντός 2 μέτρων για &lt; 15 λεπτά                    
                      </p>
                    </li>
                    <li>
                      <p>
                      Άτομο που παρέμεινε σε κλειστό χώρο με τον ασθενή με COVID-19 για &lt; 15 λεπτά
                      </p>
                    </li>
                    <li>
                      <p>
                      Άτομο που ταξίδεψε μαζί με τον ασθενή με COVID-19 σε οποιοδήποτε μεταφορικό μέσο (εξαιρουμένης της περίπτωσης ταξιδιού με αεροσκάφος που περιγράφεται παραπάνω για τις στενές επαφές-έκθεση υψηλού κινδύνου)                
                      </p>
                    </li>
                    <li>
                      <p>
                      Επαγγελματίας υγείας ή άλλο άτομο που παρείχε άμεση φροντίδα σε ασθενή με COVID-19 ή εργαζόμενος σε εργαστήριο που χειρίστηκε κλινικό δείγμα ασθενούς με COVID-19, με λήψη των ενδεδειγμένων μέτρων ατομικής προστασίας.                 
                      </p>
                    </li>
                  </ul>
                </div>
                <br/>
              </div>
              <div class="content three_quarter first" id="scenarios-class"> 
                <h1><u>4. Πιθανά Σενάρια και Αντίστοιχες Δράσεις απο τους Εργαζομένους</u></h1>
                <div id="four-one">
                  <h1>4.1 O εργαζόμενος παρουσιάσει συμπτωματολογία ίωσης </h1>
                  <p>Αν ο εργαζόμενος παρουσιάσει <Scroll_link activeClass="active" to="flu-symptoms" spy={true} smooth={true} duration={500}><u>συμπτωματολογία ίωσης</u></Scroll_link>, τότε <b>ΔΕΝ ΕΡΧΕΤΑΙ ΣΤΗΝ ΕΡΓΑΣΙΑ ΤΟΥ, ΜΕΝΕΙ ΣΤΟ ΣΠΙΤΙ ΤΟΥ</b>, επικοινωνεί με τον θεράποντα ιατρό του και παραμένει εκτός εργασίας για όσο χρονικό διάστημα απαιτηθεί, προσκομίζοντας ιατρική βεβαίωση ή άδεια απουσίας λόγω ασθενείας από τον ασφαλιστικό του φορέα
                  </p>
                </div>
                <br/>
                <div id="four-two">
                  <h1>4.2 Ο εργαζόμενος παρουσιάσει συμπτωματολογία ίωσης και έχει ιστορικό Στενής Επαφής</h1>
                  <p>Αν  ο εργαζόμενος  παρουσιάσει <Scroll_link activeClass="active" to="flu-symptoms" spy={true} smooth={true} duration={500}><u>συμπτωματολογία ίωσης</u></Scroll_link>, και  <Scroll_link activeClass="active" to="three-one" spy={true} smooth={true} duration={500}><u>έχει ιστορικό στενής επαφής</u></Scroll_link>, τότε <b>ΔΕΝ ΕΡΧΕΤΑΙ ΣΤΗΝ ΕΡΓΑΣΙΑ ΤΟΥ, ΜΕΝΕΙ ΣΤΟ ΣΠΙΤΙ ΤΟΥ</b>, και επικοινωνεί με</p>
                  <ul>
                    <li>
                      <p>
                      Με τον θεράποντα ιατρό του
                      </p>
                    </li>
                    <li>
                      <p>
                      Με τον ΕΟΔΥ (τηλ. 1135 για λήψη οδηγιών)
                      </p>
                    </li>
                    <li>
                      <p>
                      Με τον Προϊστάμενο του και μέσω αυτού με την Εταιρεία 
                      </p>
                    </li>
                  </ul>
                  <p>Τέλος, υποβάλλεται σε τεστ ανίχνευσης του ιού</p>
                </div>
                <br/>
                <div id="four-three">
                  <h1>4.3	Ο εργαζόμενος δεν έχει κανένα  σύμπτωμα αλλά έχει ιστορικό Στενής Επαφής</h1>
                  <p>Αν  ο εργαζόμενος  δεν παρουσιάσει <Scroll_link activeClass="active" to="flu-symptoms" spy={true} smooth={true} duration={500}><u>συμπτωματολογία ίωσης</u></Scroll_link>, αλλά  <Scroll_link activeClass="active" to="three-one" spy={true} smooth={true} duration={500}><u>έχει ιστορικό στενής επαφής</u></Scroll_link>, τότε <b>ΔΕΝ ΕΡΧΕΤΑΙ ΣΤΗΝ ΕΡΓΑΣΙΑ ΤΟΥ, ΜΕΝΕΙ ΣΤΟ ΣΠΙΤΙ ΤΟΥ</b>, και επικοινωνεί με</p>
                  <ul>
                    <li>
                      <p>
                      Με τον θεράποντα ιατρό του
                      </p>
                    </li>
                    <li>
                      <p>
                      Με τον ΕΟΔΥ (τηλ. 1135 για λήψη οδηγιών)
                      </p>
                    </li>
                    <li>
                      <p>
                      Με τον Προϊστάμενο του και μέσω αυτού με την Εταιρεία 
                      </p>
                    </li>
                  </ul>
                  <p>Τέλος, ενδεχομένως υποβάλλεται σε τεστ ανίχνευσης του ιού</p>
                </div>
                <br/>
                <div id="four-four">
                  <h1>4.4 Ο εργαζόμενος δεν έχει κανένα  σύμπτωμα αλλά έχει ιστορικό Επαφής</h1>
                  <p>Αν εργαζόμενος δεν έχει κανένα <Scroll_link activeClass="active" to="flu-symptoms" spy={true} smooth={true} duration={500}><u>σύμπτωμα ίωσης</u></Scroll_link> αλλά <Scroll_link activeClass="active" to="three-two" spy={true} smooth={true} duration={500}><u>έχει ιστορικό απλής επαφής</u></Scroll_link>, τότε <b>ΕΡΧΕΤΑΙ </b>μεν στην εργασία του, παρακολουθώντας  στενά τον εαυτό του για πιθανά συμπτώματα, ακολουθώντας  πιστά  τις  οδηγίες  ατομικής  υγιεινής.</p>
                </div>
                <br/>
                <p id="flu-symptoms"><i>Συμπτωματολογία ίωσης: πυρετός, βήχας, δυσκολία στην αναπνοή, αγευσία ή ανοσμία, πονοκέφαλος , ρίγος, μυαλγίες, καταβολή, έμετος ή διάρροια</i></p>
                <br/>
              </div>
            </main>
          </div>
        </div>
    );
  }
}

export default EmployeeCOVIDInstr;


