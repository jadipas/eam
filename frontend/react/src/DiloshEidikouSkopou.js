import React from 'react';

//import {Link} from "react-router-dom";
import { utils } from "react-modern-calendar-datepicker";
import MyDatePicker from './MyDatePicker';
import axiosInstance from './axios';

class DiloshEidikouSkopou extends React.Component {
  constructor(props) {
    super(props)

    const deafultValue = utils().getToday()
    deafultValue.day = deafultValue.day + 1;

    this.state = {
        selectedDate: deafultValue,
        selectedDate2: deafultValue,
        t: [],
        children:[],
        cName: '',
        cSurname: '',
        birthdate: '',
        edRank: '',
        edInst: '',
        ardis: '',
        count: 0,
        c: [],
        cbox: false,
        err: 'Everything is fine right now. No errors to report ',
    }

    this.onChange = this.onChange.bind(this)
    this.changeDate = this.changeDate.bind(this)
    this.changeDate2 = this.changeDate2.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
    this.sendReq = this.sendReq.bind(this)

    this.props.navbarUpdate(this.props.path)
  }

  onChange = (e) => {
    console.log(this.state.cbox)
    if(e.target.type !== 'checkbox'){
      this.setState({
        [e.target.name]: e.target.value,
      });
    }else if(e.target.name === 'cbox'){
      this.setState(prevState => {
          return({
                  ...prevState,
                  cbox: !prevState.cbox})
      })
    }
  }

  changeDate = (newDate) => {
    this.setState({
        selectedDate: newDate,
    });
  }

  changeDate2 = (newDate) => {
    this.setState({
        selectedDate2: newDate,
    });
  }

  handleSubmit = (e) =>{
    e.preventDefault()

    if(this.state.cName === '' || this.state.cSurname === '' || this.state.birthdate === '' || this.state.edRank === '' || this.state.edInst === ''){
      return
    }

    var ncount = this.state.count + 1;

    var new_t = this.state.t.concat([<tr>
      <td>{this.state.cName}</td>
      <td>{this.state.cSurname}</td>
      <td>{this.state.birthdate}</td>
      <td>{this.state.edRank}</td>
      <td>{this.state.edInst}</td>
      <td><button id={this.state.count} type="cancel" onClick={this.handleCancel}>Cancel</button></td>
    </tr>])

    var new_c = this.state.c.concat([this.state.count]);
    var new_ch = this.state.children.concat([{
      age: this.state.birthdate,
      school: this.state.edInst
    }])

    this.setState({
      t: [...new_t],
      cName: '',
      cSurname: '',
      birthdate: '',
      edRank: '',
      edInst: '',
      count: ncount,
      c: [...new_c],
      children: [...new_ch],
    })
  }

  handleCancel = (e) =>{
    e.preventDefault()

    console.log(this.state.t)

    var array = this.state.c;
    var array2 = this.state.t;
    const index = array.indexOf(parseInt(e.target.id));

    if (index > -1) {
      array.splice(index, 1);
      array2.splice(index, 1);
    }
    
    this.setState({
      t: [...array2],
      c: [...array],
    })
    
  }

  sendReq = (e) => {
    e.preventDefault()

    if(this.state.t.length === 0){
      this.setState({
        err: "Παρακαλώ προσθέστε τουλάχιστον ένα (1) τέκνο. "
      })
      document.getElementById("errmsg").style.opacity = "1"; 
    }
    else if(this.state.selectedDate.from === '' || this.state.selectedDate.to === '' || this.state.selectedDate2.from === '' || this.state.selectedDate2.to === ''){
      this.setState({
        err: "Παρακαλώ επιλέξτε ημμερομηνίες."
      })
      document.getElementById("errmsg").style.opacity = "1"; 
    } 
    else if( this.state.ardis === "" && ((this.props.match.params.type === 'ApoklistikhEpimeleia') || (this.props.match.params.type === 'DhmosioApokleistikh') || (this.props.match.params.type === 'PrivRemote') || (this.props.match.params.type === 'PrivHours'))){
      if(this.props.match.params.type === 'ApoklistikhEpimeleia'){
        this.setState({
          err: "Παρακαλώ προσθέστε τον Αριθμό Δικαστικής Απόφασης. "
        })
      }else if(this.props.match.params.type === 'DhmosioApokleistikh' || this.props.match.params.type === 'PrivRemote' || this.props.match.params.type === 'PrivHours'){
        this.setState({
          err: "Παρακαλώ προσθέστε τον Αριθμό Υπεύθυνης Δήλωσης. "
        })
      }
      document.getElementById("errmsg").style.opacity = "1"; 
    }else if( this.state.cbox === false && ((this.props.match.params.type === 'PrivSyz'))){
      if(this.props.match.params.type === 'PrivSyz'){
        this.setState({
          err: "Πρέπει να συμφωνήσετε πριν καταθέσετε τη δήλωση "
        })
      }
      document.getElementById("errmsg").style.opacity = "1"; 
    }else{
      this.setState({
        err: "Everything is fine right now. No errors to report"
      })

      document.getElementById("errmsg").style.opacity = "0"; 

      axiosInstance
        .post(`/forms/adeiaeidikoyskopoy`, {
          from: this.state.selectedDate.from,
          to: this.state.selectedDate.to,
          children: this.state.children,
        })
        .then((res) => {
          localStorage.setItem('access_token', res.data.access);
          localStorage.setItem('refresh_token', res.data.refresh);
          axiosInstance.defaults.headers['Authorization'] =
            'JWT ' + localStorage.getItem('access_token');
                  window.location.reload();
          console.log(res);
          console.log(res.data);
        })
        .catch(err => {
          if(err.message === 'Request failed with status code 401'){
            this.setState({
              err: "Παρακαλώ συνδεθείτε ως Εργαζόμενος για να κάνετε τη δήλωση."
            })
          }else{
            this.setState({
              err: "Άγνωστο σφάλμα. Παρακαλώ προσπαθήστε αργότερα."
            })
          }
          document.getElementById("errmsg").style.opacity = "1"; 
    });
    }
  }

  render(){   
    if(this.props.match.params.type === 'ApoklistikhEpimeleia'){
      return (
        <div>
          <div className="wrapper row3">
            <main className="hoc container clear"> 
                <h1><u>Δήλωση Ειδικού Σκοπού</u></h1>
                <form>
                    <div className="content one_third first">
                      <h2>Διάστημας Αποκλειστικής Χρήσης</h2>
                      <br/>
                      <MyDatePicker pChange={this.changeDate}/>
                      <br/>
                      <br/>
                    </div>
                    <div className="content one_third">
                      <p>Παρακαλώ εισάγετε τον Αριθμό Δικαστικής Απόφασης, βάση της οποίας έχετε αποκλειστική κηδεμονία</p>
                      <br/>
                      <label for="ardis"><u>Αριθμός Δικαστικής Απόφασης</u></label>
                      <input className="inpt" placeholder="Αριθμός Δικαστικής Απόφασης" value={this.state.ardis} onChange={this.onChange} name="ardis" type="text"/>
                      <br/>
                    </div>
                    <div className="content one_third">
                      <p id="errmsg" style={{color:"#ED254E",opacity: '0'}}>{this.state.err}</p>
                      <button type="submit" className="btn" style={{float:'right', marginTop: '80%', marginBottom: '10%'}} onClick={this.sendReq}>Κάντε Αίτηση</button>
                    </div>
                    <div className="content">
                            <table>
                            <thead>
                                <tr>
                                <th>Όνομα Τέκνου</th>
                                <th>Επώνυμο Τέκνου</th>
                                <th>Ηλικία</th>
                                <th>Εκπαιδευτική Βαθμίδα</th>
                                <th>Εκπαιδευτικό Ίδρυμα</th>
                                <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.t}   
                                <tr>
                                <td><input value={this.state.cName} onChange={this.onChange} name="cName" type="text"/></td>
                                <td><input value={this.state.cSurname} onChange={this.onChange} name="cSurname" type="text"/></td>
                                <td><input value={this.state.birthdate} onChange={this.onChange} name="birthdate" type="number" min="0" max="30"/></td>
                                <td><input value={this.state.edRank} onChange={this.onChange} name="edRank" type="text"/></td>
                                <td><input value={this.state.edInst} onChange={this.onChange} name="edInst" type="text"/></td>
                                <td><button type="submit" onClick={this.handleSubmit}>Submit</button></td>
                                </tr>                 
                            </tbody>
                            </table>
                    </div>
                </form>
              </main>
            </div>
          </div>
      );
    } else if(this.props.match.params.type === 'Dhmosio'){
      return (
        <div>
          <div className="wrapper row3">
            <main className="hoc container clear"> 
                <h1><u>Δήλωση Ειδικού Σκοπού</u></h1>
                <form>
                    <div className="content one_third first">
                      <h2>Διάστημας Αποκλειστικής Χρήσης</h2>
                      <br/>
                      <MyDatePicker pChange={this.changeDate}/>
                      <br/>
                      <br/>
                    </div>
                    <div className="content one_third">
                      <h2>Διάστημας Αποκλειστικής Χρήσης Συζύγου</h2>
                      <MyDatePicker pChange={this.changeDate2}/>
                      <br/>
                      <br/>
                      <br/>
                    </div>
                    <div className="content one_third">
                      <p id="errmsg" style={{color:"#ED254E",opacity: '0'}}>{this.state.err}</p>
                      <button type="submit" className="btn" style={{float:'right', marginTop: '80%', marginBottom: '10%'}} onClick={this.sendReq}>Κάντε Αίτηση</button>
                    </div>
                    <div className="content">
                            <table>
                            <thead>
                                <tr>
                                <th>Όνομα Τέκνου</th>
                                <th>Επώνυμο Τέκνου</th>
                                <th>Ηλικία</th>
                                <th>Εκπαιδευτική Βαθμίδα</th>
                                <th>Εκπαιδευτικό Ίδρυμα</th>
                                <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.t}   
                                <tr>
                                <td><input value={this.state.cName} onChange={this.onChange} name="cName" type="text"/></td>
                                <td><input value={this.state.cSurname} onChange={this.onChange} name="cSurname" type="text"/></td>
                                <td><input value={this.state.birthdate} onChange={this.onChange} name="birthdate" type="number" min="0" max="30"/></td>
                                <td><input value={this.state.edRank} onChange={this.onChange} name="edRank" type="text"/></td>
                                <td><input value={this.state.edInst} onChange={this.onChange} name="edInst" type="text"/></td>
                                <td><button type="submit" onClick={this.handleSubmit}>Submit</button></td>
                                </tr>                 
                            </tbody>
                            </table>
                    </div>
                </form>
              </main>
            </div>
          </div>
      );
    } else if(this.props.match.params.type === 'DhmosioApokleistikh'){
      return (
        <div>
          <div className="wrapper row3">
            <main className="hoc container clear"> 
                <h1><u>Δήλωση Ειδικού Σκοπού</u></h1>
                <form>
                    <div className="content one_third first">
                      <h2>Διάστημας Αποκλειστικής Χρήσης</h2>
                      <br/>
                      <MyDatePicker pChange={this.changeDate}/>
                      <br/>
                      <br/>
                    </div>
                    <div className="content one_third">
                      <p>Παρακαλώ εισάγετε τον Αριθμό Υπεύθυνης Δήλωσης, βάση της οποίας ο/η σύζυγος σας αδυνατεί να προσέχει τα τέκνα σας</p>
                      <br/>
                      <label for="ardis"><u>Αριθμός Υπεύθυνης Δήλωσης</u></label>
                      <input className="inpt" placeholder="Αριθμός Υπεύθυνης Δήλωσης" value={this.state.ardis} onChange={this.onChange} name="ardis" type="text"/>
                      <br/>
                    </div>
                    <div className="content one_third">
                      <p id="errmsg" style={{color:"#ED254E",opacity: '0'}}>{this.state.err}</p>
                      <button type="submit" className="btn" style={{float:'right', marginTop: '80%', marginBottom: '10%'}} onClick={this.sendReq}>Κάντε Αίτηση</button>
                    </div>
                    <div className="content">
                            <table>
                            <thead>
                                <tr>
                                <th>Όνομα Τέκνου</th>
                                <th>Επώνυμο Τέκνου</th>
                                <th>Ηλικία</th>
                                <th>Εκπαιδευτική Βαθμίδα</th>
                                <th>Εκπαιδευτικό Ίδρυμα</th>
                                <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.t}   
                                <tr>
                                <td><input value={this.state.cName} onChange={this.onChange} name="cName" type="text"/></td>
                                <td><input value={this.state.cSurname} onChange={this.onChange} name="cSurname" type="text"/></td>
                                <td><input value={this.state.birthdate} onChange={this.onChange} name="birthdate" type="number" min="0" max="30"/></td>
                                <td><input value={this.state.edRank} onChange={this.onChange} name="edRank" type="text"/></td>
                                <td><input value={this.state.edInst} onChange={this.onChange} name="edInst" type="text"/></td>
                                <td><button type="submit" onClick={this.handleSubmit}>Submit</button></td>
                                </tr>                 
                            </tbody>
                            </table>
                    </div>
                </form>
              </main>
            </div>
          </div>
      );
    } else if(this.props.match.params.type === 'DhmosioAplh'){
      return (
        <div>
          <div className="wrapper row3">
            <main className="hoc container clear"> 
                <h1><u>Δήλωση Ειδικού Σκοπού</u></h1>
                <form>
                    <div className="content one_third first">
                      <h2>Διάστημας Αποκλειστικής Χρήσης</h2>
                      <br/>
                      <MyDatePicker pChange={this.changeDate}/>
                      <br/>
                      <br/>
                    </div>
                    <div className="content one_third">
                      <h2>Διάστημα Αποκλειστικής Χρήσης Συζύγου</h2>
                      <MyDatePicker pChange={this.changeDate2}/>
                      <br/>
                      <br/>
                      <br/>
                    </div>
                    <div className="content one_third">
                      <p>Παρακαλώ εισάγετε τον Τύπο Άδειας του/της συζύγου σας</p>
                      <label for="ardis"><u>Τύπος Άδειας</u></label>
                      <select name="ardis" onChange={this.handleChange}>
                          <option value="">---Επιλέξτε τύπο άδειας---</option>
                          <option value="mother">Μητρότητα</option>
                          <option value="rec">Αναρρωτική</option>
                          <option value="preg">Κυοφορίας</option>
                      </select>
                      <p id="errmsg" style={{color:"#ED254E",opacity: '0'}}>{this.state.err}</p>
                      <button type="submit" className="btn" style={{float:'right', marginTop: '80%', marginBottom: '10%'}} onClick={this.sendReq}>Κάντε Αίτηση</button>
                    </div>
                    <div className="content">
                        <table>
                        <thead>
                            <tr>
                            <th>Όνομα Τέκνου</th>
                            <th>Επώνυμο Τέκνου</th>
                            <th>Ηλικία</th>
                            <th>Εκπαιδευτική Βαθμίδα</th>
                            <th>Εκπαιδευτικό Ίδρυμα</th>
                            <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.t}   
                            <tr>
                            <td><input value={this.state.cName} onChange={this.onChange} name="cName" type="text"/></td>
                            <td><input value={this.state.cSurname} onChange={this.onChange} name="cSurname" type="text"/></td>
                            <td><input value={this.state.birthdate} onChange={this.onChange} name="birthdate" type="number" min="0" max="30"/></td>
                            <td><input value={this.state.edRank} onChange={this.onChange} name="edRank" type="text"/></td>
                            <td><input value={this.state.edInst} onChange={this.onChange} name="edInst" type="text"/></td>
                            <td><button type="submit" onClick={this.handleSubmit}>Submit</button></td>
                            </tr>                 
                        </tbody>
                        </table>
                    </div>
                </form>
              </main>
            </div>
          </div>
      );
    } else if(this.props.match.params.type === 'PrivSyz'){
      return (
        <div>
          <div className="wrapper row3">
            <main className="hoc container clear"> 
                <h1><u>Δήλωση Ειδικού Σκοπού</u></h1>
                <form>
                    <div className="content one_third first">
                      <h2>Διάστημας Αποκλειστικής Χρήσης</h2>
                      <br/>
                      <MyDatePicker pChange={this.changeDate}/>
                      <br/>
                      <br/>
                    </div>
                    <div className="content one_third">
                      <p>Παρακαλώ σημειώστε πως ο/η συζυγός σας δεν θα δυνάται Άδεια Ειδικού Σκοπού</p>
                      <br/>
                      <div style={{display:'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                        <label for="cbox"><u>Συμφωνώ</u></label>                    
                        <input value={this.state.cbox} onChange={this.onChange} name="cbox" type="checkbox"/>
                      </div>
                      <br/>
                    </div>
                    <div className="content one_third">
                      <p id="errmsg" style={{color:"#ED254E",opacity: '0'}}>{this.state.err}</p>
                      <button type="submit" className="btn" style={{float:'right', marginTop: '80%', marginBottom: '10%'}} onClick={this.sendReq}>Κάντε Αίτηση</button>
                    </div>
                    <div className="content">
                        <table>
                        <thead>
                            <tr>
                            <th>Όνομα Τέκνου</th>
                            <th>Επώνυμο Τέκνου</th>
                            <th>Ηλικία</th>
                            <th>Εκπαιδευτική Βαθμίδα</th>
                            <th>Εκπαιδευτικό Ίδρυμα</th>
                            <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.t}   
                            <tr>
                            <td><input value={this.state.cName} onChange={this.onChange} name="cName" type="text"/></td>
                            <td><input value={this.state.cSurname} onChange={this.onChange} name="cSurname" type="text"/></td>
                            <td><input value={this.state.birthdate} onChange={this.onChange} name="birthdate" type="number" min="0" max="30"/></td>
                            <td><input value={this.state.edRank} onChange={this.onChange} name="edRank" type="text"/></td>
                            <td><input value={this.state.edInst} onChange={this.onChange} name="edInst" type="text"/></td>
                            <td><button type="submit" onClick={this.handleSubmit}>Submit</button></td>
                            </tr>                 
                        </tbody>
                        </table>
                    </div>
                </form>
              </main>
            </div>
          </div>
      );
    } else if(this.props.match.params.type === 'PrivRemote' || this.props.match.params.type === 'PrivHours'){
      return (
        <div>
          <div className="wrapper row3">
            <main className="hoc container clear"> 
                <h1><u>Δήλωση Ειδικού Σκοπού</u></h1>
                <form>
                    <div className="content one_third first">
                      <h2>Διάστημας Αποκλειστικής Χρήσης</h2>
                      <br/>
                      <MyDatePicker pChange={this.changeDate}/>
                      <br/>
                      <br/>
                    </div>
                    <div className="content one_third">
                      <p>Παρακαλώ εισάγετε τον Αριθμό Υπεύθυνης Δήλωσης, βάση της οποίας ο/η σύζυγος σας δεν θα κάνει χρήση της Άδειας Διευκόλυνσης Τροποποίησης του Ωραρίου</p>
                      <br/>
                      <label for="ardis"><u>Αριθμός Υπεύθυνης Δήλωσης</u></label>
                      <input className="inpt" placeholder="Αριθμός Υπεύθυνης Δήλωσης" value={this.state.ardis} onChange={this.onChange} name="ardis" type="text"/>
                      <br/>
                    </div>
                    <div className="content one_third">
                      <p id="errmsg" style={{color:"#ED254E",opacity: '0'}}>{this.state.err}</p>
                      <button type="submit" className="btn" style={{float:'right', marginTop: '80%', marginBottom: '10%'}} onClick={this.sendReq}>Κάντε Αίτηση</button>
                    </div>
                    <div className="content">
                        <table>
                        <thead>
                            <tr>
                            <th>Όνομα Τέκνου</th>
                            <th>Επώνυμο Τέκνου</th>
                            <th>Ηλικία</th>
                            <th>Εκπαιδευτική Βαθμίδα</th>
                            <th>Εκπαιδευτικό Ίδρυμα</th>
                            <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.t}   
                            <tr>
                            <td><input value={this.state.cName} onChange={this.onChange} name="cName" type="text"/></td>
                            <td><input value={this.state.cSurname} onChange={this.onChange} name="cSurname" type="text"/></td>
                            <td><input value={this.state.birthdate} onChange={this.onChange} name="birthdate" type="number" min="0" max="30"/></td>
                            <td><input value={this.state.edRank} onChange={this.onChange} name="edRank" type="text"/></td>
                            <td><input value={this.state.edInst} onChange={this.onChange} name="edInst" type="text"/></td>
                            <td><button type="submit" onClick={this.handleSubmit}>Submit</button></td>
                            </tr>                 
                        </tbody>
                        </table>
                    </div>
                </form>
              </main>
            </div>
          </div>
      );
    } else if(this.props.match.params.type === 'PrivHours'){
      return (
        <div>
          <div className="wrapper row3">
            <main className="hoc container clear"> 
                <h1><u>Δήλωση Ειδικού Σκοπού</u></h1>
                <form>
                    <div className="content one_third first">
                      <h2>Διάστημας Αποκλειστικής Χρήσης</h2>
                      <br/>
                      <MyDatePicker pChange={this.changeDate}/>
                      <br/>
                      <br/>
                    </div>
                    <div className="content one_third">
                      <p>Παρακαλώ εισάγετε τον Αριθμό Υπεύθυνης Δήλωσης, βάση της οποίας ο/η σύζυγος σας δεν θα κάνει χρήση της Άδειας Διευκόλυνσης Τροποποίησης του Ωραρίου</p>
                      <br/>
                      <label for="ardis"><u>Αριθμός Υπεύθυνης Δήλωσης</u></label>
                      <input className="inpt" placeholder="Αριθμός Υπεύθυνης Δήλωσης" value={this.state.ardis} onChange={this.onChange} name="ardis" type="text"/>
                      <br/>
                    </div>
                    <div className="content one_third">
                      <p id="errmsg" style={{color:"#ED254E",opacity: '0'}}>{this.state.err}</p>
                      <button type="submit" className="btn" style={{float:'right', marginTop: '80%', marginBottom: '10%'}} onClick={this.sendReq}>Κάντε Αίτηση</button>
                    </div>
                    <div className="content">
                        <table>
                        <thead>
                            <tr>
                            <th>Όνομα Τέκνου</th>
                            <th>Επώνυμο Τέκνου</th>
                            <th>Ηλικία</th>
                            <th>Εκπαιδευτική Βαθμίδα</th>
                            <th>Εκπαιδευτικό Ίδρυμα</th>
                            <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.t}   
                            <tr>
                            <td><input value={this.state.cName} onChange={this.onChange} name="cName" type="text"/></td>
                            <td><input value={this.state.cSurname} onChange={this.onChange} name="cSurname" type="text"/></td>
                            <td><input value={this.state.birthdate} onChange={this.onChange} name="birthdate" type="number" min="0" max="30"/></td>
                            <td><input value={this.state.edRank} onChange={this.onChange} name="edRank" type="text"/></td>
                            <td><input value={this.state.edInst} onChange={this.onChange} name="edInst" type="text"/></td>
                            <td><button type="submit" onClick={this.handleSubmit}>Submit</button></td>
                            </tr>                 
                        </tbody>
                        </table>
                    </div>
                </form>
              </main>
            </div>
          </div>
      );
    }
    else{
      return (
          <div>
            <div className="wrapper row3">
              <main className="hoc container clear"> 
                  <h1><u>Δήλωση Ειδικού Σκοπού</u></h1>
                  <form>
                      <div className="content one_third first">
                          <MyDatePicker pChange={this.changeDate}/>
                          <br/>
                          <br/>
                          <br/>
                      </div>
                      <div className="content one_third" style={{opacity:'0'}}>
                            <p>Easy CSS hack ʕ•ᴥ•ʔ</p>
                      </div>
                      <div className="content one_third">
                        <p id="errmsg" style={{color:"#ED254E",opacity: '0'}}>{this.state.err}</p>
                        <button type="submit" className="btn" style={{float:'right', marginTop: '80%', marginBottom: '10%'}} onClick={this.sendReq}>Κάντε Αίτηση</button>
                      </div>
                      <div className="content">
                              <table>
                              <thead>
                                  <tr>
                                  <th>Όνομα</th>
                                  <th>Επώνυμο</th>
                                  <th>Ημμερομηνία Γέννησης</th>
                                  <th>Εκπαιδευτική Βαθμίδα</th>
                                  <th>Εκπαιδευτικό Ίδρυμα</th>
                                  <th></th>
                                  </tr>
                              </thead>
                              <tbody>
                                  {this.state.t}   
                                  <tr>
                                  <td><input value={this.state.cName} onChange={this.onChange} name="cName" type="text"/></td>
                                  <td><input value={this.state.cSurname} onChange={this.onChange} name="cSurname" type="text"/></td>
                                  <td><input value={this.state.birthdate} onChange={this.onChange} name="birthdate" type="date"/></td>
                                  <td><input value={this.state.edRank} onChange={this.onChange} name="edRank" type="text"/></td>
                                  <td><input value={this.state.edInst} onChange={this.onChange} name="edInst" type="text"/></td>
                                  <td><button type="submit" onClick={this.handleSubmit}>Submit</button></td>
                                  </tr>                 
                              </tbody>
                              </table>
                      </div>
                  </form>
              </main>
            </div>
          </div>
      );
    } 
  }
}

export default DiloshEidikouSkopou;


