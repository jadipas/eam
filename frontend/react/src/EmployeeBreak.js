import React from 'react';

//import {Link} from "react-router-dom";
import { utils } from "@hassanmojab/react-modern-calendar-datepicker";
import MyDatePicker from './MyDatePicker';
import {Link} from "react-router-dom";
import axiosInstance from './axios';

class EmployeeBreak extends React.Component {
  constructor(props) {
    super(props)

    const deafultValue = utils().getToday()
    deafultValue.day = deafultValue.day + 1;

    this.state = {
        selectedDate: deafultValue,
        err: 'Everything is fine right now. No errors to report ',
    }

    this.onChange = this.onChange.bind(this)
    this.changeDate = this.changeDate.bind(this)
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
    console.log(newDate)
    this.setState({
        selectedDate: newDate,
    });
  }

  sendReq = (e) => {
    e.preventDefault()
    if(this.props.role!=='employee'){
        this.setState({
            err: <p>Παρακαλώ συνδεθείτε ως Εργαζόμενος. Αν είστε εγγεγραμμένος ως Εργοδότης <Link to="/Employers/EmployersCOVID/EmployersCOVIDAdeies/EmployerBreak">πάτε στην αντίστοιχη σελίδα</Link> </p>
          })
        document.getElementById("errmsg").style.opacity = "1"; 
        return;
    }

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
        .post(`/forms/anastoliergasias`, {
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
                <h1><u>Δήλωση Αναστολής εργασίας</u></h1>
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

export default EmployeeBreak;


