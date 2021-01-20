import React from 'react';

//import {Link} from "react-router-dom";
import { utils } from "@hassanmojab/react-modern-calendar-datepicker";
import MyDatePicker from './MyDatePicker';
import axiosInstance from './axios';

class EmployeeRemote extends React.Component {
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

    if(this.state.selectedDate.from === '' || this.state.selectedDate.to === ''){
      this.setState({
        err: "Παρακαλώ επιλέξτε ημμερομηνίες."
      })
      document.getElementById("errmsg").style.opacity = "1"; 
    }else{
      this.setState({
        err: "Everything is fine right now. No errors to report"
      })

      document.getElementById("errmsg").style.opacity = "0"; 

      axiosInstance
        .post(`/forms/tilergasia`, {
            from_time: this.state.selectedDate.from,
            to_time: this.state.selectedDate.to,
        })
        .then((res) => {
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
    return (
        <div>
        <div className="wrapper row3">
            <main className="hoc container clear"> 
                <h1><u>Δήλωση Ειδικού Σκοπού</u></h1>
                <form>
                    <div className="content one_half first">
                        <MyDatePicker pChange={this.changeDate}/>
                        <br/>
                        <br/>
                        <br/>
                    </div>
                    <div className="content one_half">
                        <p id="errmsg" style={{color:"#ED254E",opacity: '0'}}>{this.state.err}</p>
                        <button type="submit" className="btn" style={{float:'right', marginTop: '80%', marginBottom: '10%'}} onClick={this.sendReq}>Κάντε Αίτηση</button>
                    </div>
                </form>
            </main>
        </div>
        </div>
    );
  }
}

export default EmployeeRemote;


