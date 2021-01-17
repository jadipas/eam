import React from 'react';

//import {Link} from "react-router-dom";
import { utils } from "react-modern-calendar-datepicker";
import MyDatePicker from './MyDatePicker';

class DiloshEidikouSkopou extends React.Component {
  constructor(props) {
    super(props)

    const deafultValue = utils().getToday()
    deafultValue.day = deafultValue.day + 1;

    this.state = {
        selectedDate: deafultValue,
        t: [],
        cName: '',
        cSurname: '',
        birthdate: '',
        edRank: '',
        edInst: '',
        count: 0,
        c: [],
    }

    this.onChange = this.onChange.bind(this)
    this.changeDate = this.changeDate.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
    this.sendReq = this.sendReq.bind(this)

    this.props.navbarUpdate(this.props.path)
  }

  onChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value,
    });
  }

  changeDate = (newDate) => {
    this.setState({
        selectedDate: newDate,
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

    this.setState({
      t: [...new_t],
      cName: '',
      cSurname: '',
      birthdate: '',
      edRank: '',
      edInst: '',
      count: ncount,
      c: [...new_c],
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

    if(this.state.t === []){
      this.setState({
        err: "Παρακαλώ προσθέστε τουλάχιστον ένα (1) τέκνο. "
      })
    }else if( this.state.ardis === ""){
      this.setState({
        err: "Παρακαλώ προσθέστε τον Αριθμό Δικαστικής Απόφασης. "
      })
    }else{
      this.setState({
        err: ""
      })
    }
  }

  render(){   
    if(this.props.match.params.type === 'Exclusive'){
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
                    <div className="content one_third">
                      <p>Παρακαλώ εισάγετε τον Αριθμό Δικαστικής Απόφασης, βάση της οποίας έχετε αποκλειστική κηδεμονία</p>
                      <br/>
                      <label for="ardis"><u>Αριθμός Δικαστικής Απόφασης</u></label>
                      <input className="inpt" placeholder="Αριθμός Δικαστικής Απόφασης" value={this.state.ardis} onChange={this.onChange} name="ardis" type="text"/>
                      <p>{this.state.err}</p>
                    </div>
                    <div className="content one_third">
                      <button type="submit" className="btn" style={{float:'right', marginTop: '100%'}} onClick={this.sendReq}>Κάντε Αίτηση</button>
                    </div>
                    <div className="content">
                            <table>
                            <thead>
                                <tr>
                                <th>Όνομα Τέκνου</th>
                                <th>Επώνυμο Τέκνου</th>
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


