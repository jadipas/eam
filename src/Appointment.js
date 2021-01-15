import React from 'react';

//import {Link} from "react-router-dom";
import MyCalendar from './MyCalendar';
import { utils } from "react-modern-calendar-datepicker";

class Appointment extends React.Component {
  constructor(props) {
    super(props)

    const deafultValue = utils().getToday()
    deafultValue.day = deafultValue.day + 1;

    this.state = {
        selectedDate: deafultValue,
        time:'1:01'
    }

    this.onChange = this.onChange.bind(this)
    this.changeDate = this.changeDate.bind(this)

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
                </form>
            </main>
          </div>
        </div>
    );
  }
}

export default Appointment;


