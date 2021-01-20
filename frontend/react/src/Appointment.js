import React from 'react';
import axiosInstance from './axios';

//import {Link} from "react-router-dom";
import MyCalendar from './MyCalendar';
import { utils } from "@hassanmojab/react-modern-calendar-datepicker";

class Appointment extends React.Component {
  constructor(props) {
    super(props)

    const deafultValue = utils().getToday()
    deafultValue.day = deafultValue.day + 1;

    this.state = {
        selectedDate: deafultValue,
        hour: '',
        selectedTime: '',
        options: [],
        email: '',
        phone: '',
        err: 'No errors to report yet',
        success: false,
    }

    this.onChange = this.onChange.bind(this)
    this.changeDate = this.changeDate.bind(this)
    this.getHours = this.getHours.bind(this)

    this.props.navbarUpdate(this.props.path)
  }

  onChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault()

    var d;
    if(this.state.selectedDate.day>=10){
      if(this.state.selectedDate.month >= 10){
        d=String(this.state.selectedDate.year) + '-' + String(this.state.selectedDate.month) + '-' + String(this.state.selectedDate.day)
      }else{
        d=String(this.state.selectedDate.year) + '-0' + String(this.state.selectedDate.month) + '-' + String(this.state.selectedDate.day)
      }
    }else{
      if(this.state.selectedDate.month >= 10){
        d=String(this.state.selectedDate.year) + '-' + String(this.state.selectedDate.month) + '-0' + String(this.state.selectedDate.day)
      }else{
        d=String(this.state.selectedDate.year) + '-0' + String(this.state.selectedDate.month) + '-0' + String(this.state.selectedDate.day)
      }
    }

    if(this.props.role){
      const path='/appointments/create_appointment';
      axiosInstance
        .post(path,{
          date:  d,
          time: this.state.hour
        })
        .then((res) => {
          console.log(res);
          //console.log(res.data);
          this.setState({ 
            success: true,
          })
        })
        .catch((err) => {
          console.log(err)
        })
    }else{
      if(this.state.phone === ''){
        this.setState({
          err: 'Παρακαλώ δώστε ένα τηλέφωνο επικοινωνίας'
        })
        document.getElementById("errmsg_app").style.opacity = "1"; 
        return;
      }else if(this.state.email === ''){
        this.setState({
          err: 'Παρακαλώ δώστε ένα email επικοινωνίας'
        })
        document.getElementById("errmsg_app").style.opacity = "1"; 
        return;
      }
      
      const path='/appointments/create_appointment';
      axiosInstance
        .post(path,{
          date:  d,
          time: this.state.hour,
          phone: this.state.phone,
          email: this.state.email
        })
        .then((res) => {
          console.log(res);
          //console.log(res.data);
          this.setState({
            success: true,
          })
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }

  changeDate = (newDate) => {
    var d;
    if(newDate.day>=10){
      if(newDate.month >= 10){
        d=String(newDate.year) + '-' + String(newDate.month) + '-' + String(newDate.day)
      }else{
        d=String(newDate.year) + '-0' + String(newDate.month) + '-' + String(newDate.day)
      }
    }else{
      if(newDate.month >= 10){
        d=String(newDate.year) + '-' + String(newDate.month) + '-0' + String(newDate.day)
      }else{
        d=String(newDate.year) + '-0' + String(newDate.month) + '-0' + String(newDate.day)
      }
    }

    console.log(d);
    const path='/appointments/appointment_by_date';
    axiosInstance
    .post(path,JSON.stringify({ date: d }))
    .then((res) => {
      console.log(res.data[0].date);
      var opt = []
      var av = ['08:00:00','08:30:00','09:00:00','09:30:00','10:00:00','10:30:00','1:00:00','11:30:00','12:00:00','12:30:00','13:00:00','13:30:00']
      if(res.data[0] !== undefined){
        const date=res.data[0].date
        var new_unav = {}
        var n
        new_unav[date] = {}
        for(n of res.data){
          new_unav[date][n.time] = true
        }
        var h
        for(h of av){
          var p = h.split(':')
          if(new_unav[date][h]===undefined){
            opt = opt.concat([
              <option key={h} value={h}>
                {p[0] + ':' + p[1]}
              </option>
            ])
          }
        }
      }else{
        var h
        for(h of av){
          var p = h.split(':')
          opt = opt.concat([
            <option key={h} value={h}>
              {p[0] + ':' + p[1]}
            </option>
          ])
        }
      }

      this.setState({
        options: opt,
      });
      //console.log(res.data);
    })
    .catch((err) =>{
      console.log(err.message)
    });

    this.setState({
        selectedDate: newDate,
    });
  }

  async getHours(){

    var d;
    if(this.state.selectedDate.day>=10){
      if(this.state.selectedDate.month >= 10){
        d=String(this.state.selectedDate.year) + '-' + String(this.state.selectedDate.month) + '-' + String(this.state.selectedDate.day)
      }else{
        d=String(this.state.selectedDate.year) + '-0' + String(this.state.selectedDate.month) + '-' + String(this.state.selectedDate.day)
      }
    }else{
      if(this.state.selectedDate.month >= 10){
        d=String(this.state.selectedDate.year) + '-' + String(this.state.selectedDate.month) + '-0' + String(this.state.selectedDate.day)
      }else{
        d=String(this.state.selectedDate.year) + '-0' + String(this.state.selectedDate.month) + '-0' + String(this.state.selectedDate.day)
      }
    }

    const path='/appointments/appointment_by_date';
    axiosInstance
    .post(path,JSON.stringify({ date: d }))
    .then((res) => {
      console.log(res.size);
      var opt = []
      var av = ['08:00:00','08:30:00','09:00:00','09:30:00','10:00:00','10:30:00','1:00:00','11:30:00','12:00:00','12:30:00','13:00:00','13:30:00']
      if(res.data[0] !== undefined){
        const date=res.data[0].date
        var new_unav = {}
        var n
        new_unav[date] = {}
        for(n of res.data){
          new_unav[date][n.time] = true
        }
        var h
        for(h of av){
          var p = h.split(':')
          if(new_unav[date][h]===undefined){
            opt = opt.concat([
              <option key={h} value={h}>
                {p[0] + ':' + p[1]}
              </option>
            ])
          }
        }
      }else{
        var h
        for(h of av){
          var p = h.split(':')
          opt = opt.concat([
            <option key={h} value={h}>
              {p[0] + ':' + p[1]}
            </option>
          ])
        }
      }

      this.setState({
        options: opt,
      });
      //console.log(res.data);
    })
    .catch((err) =>{
      console.log(err.message)
    });
  }

  async componentDidMount() {
      //console.log(this.state.loading)
      await this.getHours();
  }

  render(){    
    if(this.state.success){
        var p = this.state.hour.split(':')
        return(<div>
        <div className="wrapper row3">
          <main className="hoc container clear"> 
              <h1><u>Επιτυχία</u></h1>
              <p>
                Το ραντεβού σας κλείστηκε με επιτυχία για τις {p[0] + ':' + p[1]} την ημερομηνία {String(this.state.selectedDate.day) + '/' + String(this.state.selectedDate.month) + '/' + String(this.state.selectedDate.year)}
              </p>
          </main>
        </div>
      </div>)
    }else{
      return (
          <div>
            <div className="wrapper row3">
              <main className="hoc container clear"> 
                  <h1><u>Κλείστε Ραντεβού</u></h1>
                  <form>
                      <div className="content one_third first">
                        <MyCalendar pChange={this.changeDate} range="false"/>
                      </div>
                      <div className="content one_third">
                        <select className="inpt" name="hour" onChange={this.onChange}>
                          <option value="">-- Επιλέξτε Ώρα --</option>
                          {this.state.options}
                        </select>
                        {!this.props.role && (
                          <div>
                            <p>Email</p>
                            <input className="inpt" type="email" placeholder="Email" value={this.email} name="email" onChange={this.onChange}/>
                            <p>Τηλέφωνο</p>
                            <input className="inpt" type="phone" placeholder="Phone" value={this.phone} name="phone" onChange={this.onChange}/>
                          </div>
                        )}
                      </div>
                      <div className="content one_third">
                        <p id="errmsg_app" style={{color:"#ED254E",opacity: '0'}}>{this.state.err}</p>
                        <button className="butn" style={{marginTop: '90%', padding: '20px'}} type="submit" onClick={this.handleSubmit}>Κλείστε Ραντεβού</button>
                      </div>
                  </form>
              </main>
            </div>
          </div>
      );
    }
  }
}

export default Appointment;


