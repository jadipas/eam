import React from 'react';

import {Link} from "react-router-dom";
import {Link as Scroll_link, animateScroll as scroll } from "react-scroll";
import ReactPlayer from "react-player"

import background from './images/demo/backgrounds/01.png'

class Employees extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
        path: 'Home/Employees/'
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
            <div className="wrapper row2">
                <section id="references" className="hoc container clear"> 
                    <div className="sectiontitle">
                    <h6 className="heading">Εργαζόμενοι</h6>
                    <p>Όλες οι απαραίτητες πληροφορίες για τους εργαζομένους</p>
                    </div>
                    <ul className="nospace group ref-img">
                        <li className="one_third"><Link className="" to="/"><p className='in_div' style={{backgroundImage : `url(${background})`}} alt="">Άδειες</p></Link></li>
                        <li className="one_third"><Link className="" to="/"><p className='in_div' style={{backgroundImage : `url(${background})`}} alt="">Νομοθεσία</p></Link></li>
                        <li className="one_third"><Link className="" to="/Employees/EmployeesCOVID"><p className='in_div' style={{backgroundImage : `url(${background})`}} alt="">Επιδόματα</p></Link></li>
                    </ul>
                    <footer className="block center"><a className="btn" href="#">View more here</a></footer>
                </section>
            </div>
        </div>
    );
  }
}

export default Employees;


