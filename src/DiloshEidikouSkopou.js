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
    console.log(this.state.selectedDate)
    this.setState({
        selectedDate: newDate,
    });
  }

  render(){    
    return (
        <div>
          <div className="wrapper row3">
            <main className="hoc container clear"> 
                <h1><u>Δήλωση Ειδικού Σκοπού</u></h1>
                <form>
                    <div className="content one_third first">
                        <MyDatePicker pChange={this.changeDate}/>
                    </div>
                    <div className="content one_third">
                        <div className="scrollable">
                            <table>
                            <thead>
                                <tr>
                                <th>Είδος Δηλωσης</th>
                                <th>Ημμερομηνία Δήλωσης</th>
                                <th>Απο</th>
                                <th>Εως</th>
                                <th>Κατάσταση</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.children}   
                                <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                </tr>                 
                            </tbody>
                            </table>
                        </div>
                    </div>
                </form>
            </main>
          </div>
        </div>
    );
  }
}

export default DiloshEidikouSkopou;


