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
        hours: [],
        selectedTime: '',
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
      console.log(res);
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
			.get(path,{
        date:  d
      })
			.then((res) => {
				//console.log(res);
        //console.log(res.data);
        this.setState({
          
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  async componentDidMount() {
      //console.log(this.state.loading)
      await this.getHours();
  }

  render(){    
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
                        <select>
                          {this.state.hours}
                        </select>
                    </div>
                </form>
            </main>
          </div>
        </div>
    );
  }
}

export default Appointment;


