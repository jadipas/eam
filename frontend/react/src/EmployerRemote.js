import React from 'react';

//import {Link} from "react-router-dom";
import { utils } from "@hassanmojab/react-modern-calendar-datepicker";
import MyDatePicker from './MyDatePicker';
import axiosInstance from './axios';

class EmployerRemote extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
        t: [],
        children:[],
        cName: '',
        from_date: '',
        to_date: '',
        count: 0,
        c: [],
        cbox: false,
        err: 'Everything is fine right now. No errors to report ',
    }

    this.onChange = this.onChange.bind(this)
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

  handleSubmit = (e) =>{
    e.preventDefault()

    if(this.state.cName === '' || this.state.from_date === '' || this.state.to_date === ''){
      return
    }

    var d1=this.state.from_date.split('-')
    var d2=this.state.to_date.split('-')

    if(parseInt(d1[1]) > parseInt(d2[1])){
        this.setState({
            err: 'Δεν γίνεται η ημερομηνία λήξης να είναι πιο μετά απο την ημμερομηνία έναρξης'
        })
        document.getElementById("errmsg").style.opacity = "1"; 
        return;
    }else if(parseInt(d1[1]) === parseInt(d2[1])){
        if(parseInt(d1[2]) > parseInt(d2[2])){
            this.setState({
                err: 'Δεν γίνεται η ημερομηνία λήξης να είναι πιο μετά απο την ημμερομηνία έναρξης'
            })
            document.getElementById("errmsg").style.opacity = "1"; 
            return;
        }
    }

    var ncount = this.state.count + 1;

    var new_t = this.state.t.concat([<tr key={ncount}>
      <td>{this.state.cName}</td>
      <td>{this.state.from_date}</td>
      <td>{this.state.to_date}</td>
      <td><button id={this.state.count} type="cancel" onClick={this.handleCancel}>Cancel</button></td>
    </tr>])

    var new_c = this.state.c.concat([this.state.count]);
    var new_ch = this.state.children.concat([{
      from_date: this.state.from_date,
      to_date: this.state.to_date,
      cName: this.state.cName
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

    if(this.props.role!=='employer'){
        this.setState({
            err: "Παρακαλώ συνδεθείτε ως εργοδότης. "
          })
        document.getElementById("errmsg").style.opacity = "1"; 
        return;
    }
    
    if(this.state.t.length === 0){
      this.setState({
        err: "Παρακαλώ προσθέστε τουλάχιστον έναν/μία (1) υπάλληλο. "
      })
      document.getElementById("errmsg").style.opacity = "1"; 
    }else{
      this.setState({
        err: "Everything is fine right now. No errors to report"
      })

      document.getElementById("errmsg").style.opacity = "0"; 
      var child;
      for(child of this.state.children){
          axiosInstance
            .post(`/forms/adeiaergasias`, {
              from_time: child.from_date,
              to_time: child.to_date,
              employee_username: child.cName,
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
  }

  render(){ 
      return (
        <div>
        <div className="wrapper row3">
            <main className="hoc container clear"> 
                <h1><u>Δήλωση Εξ Αποστέσεως Εργασίας Εργαζομένων</u></h1>
                <form>
                    <div className="content">
                        <table>
                        <thead>
                            <tr>
                            <th>Όνομα Χρήστη Υπαλλήλου</th>
                            <th>Ημμερομηνία Έναρξης</th>
                            <th>Ημμερομηνία Λήξης</th>
                            <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.t}   
                            <tr>
                            <td><input value={this.state.cName} onChange={this.onChange} name="cName" type="text"/></td>
                            <td><input value={this.state.from_date} onChange={this.onChange} name="from_date" type="date"/></td>
                            <td><input value={this.state.to_date} onChange={this.onChange} name="to_date" type="date"/></td>
                            <td><button type="submit" onClick={this.handleSubmit}>Submit</button></td>
                            </tr>                 
                        </tbody>
                        </table>
                        <p id="errmsg" style={{color:"#ED254E",opacity: '0', float:'left'}}>{this.state.err}</p>
                        <button type="submit" className="btn" style={{float:'right', marginTop: '10%'}} onClick={this.sendReq}>Κάντε Αίτηση</button>
                    </div>
                </form>
            </main>
        </div>
        </div>
    );
    
  }
}

export default EmployerRemote;


