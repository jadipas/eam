import React from 'react';
import {Link} from "react-router-dom";
import background from './images/background3.png'
import Login from './Login';
import logout from './Logout';

class Header extends React.Component {
  
  render(){     
    return (
        <div style={{backgroundImage : `url(${background})`, backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat'}}>  
            <div >
                <header id="header" className="hoc clear" style={{textShadow: "1px 1px black", fontSize: "15px"}}> 
                    <div id="logo" className="fl_left">
                        <h1><Link to="/" >ΥΠΑΚΠ</Link></h1>
                    </div>
                    <nav id="mainav" className="fl_right">
                        <ul className="clear">
                        <li><Link className="drop" to="/Employers">Εργοδoτες</Link>
                                <ul>
                                <li>
                                    <Link to="/UnderConstruction">Δηλώσεις</Link>
                                </li>
                                <li>
                                    <Link to="/UnderConstruction">Προγράμματα</Link>
                                </li>
                                <li>
                                    <Link to="/UnderConstruction">Νομοθεσία</Link>
                                </li>
                                <li>
                                    <Link to="/UnderConstruction">Φορολογία</Link>
                                </li>
                                <li>
                                    <Link to="/Employers/EmployersCOVID">COVID-19</Link>
                                </li>
                                </ul>
                            </li>
                            <li><Link className="drop" to="/Employees">Εργαζομενοι</Link>
                                <ul>
                                <li>
                                    <Link to="/UnderConstruction">Άδειες</Link>
                                </li>
                                <li>
                                    <Link to="/UnderConstruction">Νομοθεσία</Link>
                                </li>
                                <li>
                                    <Link to="/Employees/EmployeesCOVID">COVID-19</Link>
                                </li>
                                <li>
                                    <Link to="/UnderConstruction">Δηλώσεις</Link>
                                </li>
                                </ul>
                            </li>
                            <li><Link className="drop" to="/UnderConstruction">Ανεργοι</Link>
                                <ul>
                                <li><Link to="/UnderConstruction">Προγράμματα</Link></li>
                                <li><Link to="/UnderConstruction">Επιδόματα</Link></li>
                                </ul>
                            </li>
                            <li><Link className="drop" to="/COVID">COVID-19</Link>
                                <ul>
                                <li><Link to="/Employers/EmployersCOVID">Εργοδότες</Link></li>
                                <li><Link to="/Employees/EmployeesCOVID">Εργαζόμενοι</Link></li>
                                <li><Link to="/Employees/EmployeesCOVID/Instructions">Γενικές Οδηγίες</Link></li>
                                </ul>
                            </li>
                            <li><Link className="" to="/Contact">Επικοινωνια</Link></li>
                        </ul>   
                    </nav>
                </header>
                {this.props.role && (
                <div className="hoc clear">
                    <nav id="mainav" className="fl_right">
                        <ul className="clear">
                            <li><Link to="/profile">ΠΡΟΦΙΛ</Link></li>
                            <li><button style={{all: "unset", cursor: "pointer"}} type="button" onClick={logout}>ΕΞΟΔΟΣ</button></li>
                        </ul>   
                    </nav>
                </div>
                )}
                {!this.props.role && (
                    <div className="hoc clear">
                    <nav id="mainav" className="fl_right">
                        <Login />  
                    </nav>
                </div>
                )}
                
            </div>
            <div id="breadcrumb" className="hoc clear"> 
            <h6 className="heading">Υπουργείο Εργασίας</h6>
            <ul>                          
                {this.props.path}
            </ul>
            </div>
        </div>
    );
  }
}

export default Header;


