import React from 'react';
import './App.css';
import {BrowserRouter as Router, Link, Switch, Route} from "react-router-dom";
import ScrollUpButton from "react-scroll-up-button";

import background from './images/background3.png'

import Homepage from './Homepage'
import Contact from './Contact'
import EmployeeCOVIDInstr from './EmployeeCOVIDInstr'
import Employees from './Employees'
import EmployeesCOVID from './EmployeesCOVID'
import UnderConstruction from './UnderConstruction';
import COVID from './COVID';
import EmployeesAdeies from './EmployeesAdeies';
import MyLoginForm from './MyLoginForm';
import Register from './Register';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
        path: '',
        navbar: null,
    }

    this.onChange = this.onChange.bind(this)
    this.setPath = this.setPath.bind(this)

  }

  onChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value,
    });
  }

  setPath(npath){
    
    const n_arr = npath.split('/')
    var f_arr = []
    var rel_path='/';
    var n;

    var names = {
      Employees: 'Εργαζομενοι',
      Employers: 'Εργοδοτες',
      Jobless: 'Ανεργοι',
      COVID: 'COVID',
      EmployeesCOVID: 'COVID',
      Instructions: 'Οδηγιες',
      Home: 'Αρχικη'
    }

    for (n of n_arr) {
      if (n !== 'Home' && n !== ''){
        rel_path = rel_path + n + '/'
      }

      if(n !== ''){
        f_arr.push(<li><Link exact  to={rel_path}>{names[n]}</Link></li>)
      }
    }
    
    this.setState({
      path: npath,
      navbar: f_arr
    })
  }

  render(){
    return (
      <div className="bgded overlay" >
      <Router>
      <div style={{backgroundImage : `url(${background})`, backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat'}}>  
        <div>
          <header id="header" className="hoc clear"> 
          <div id="logo" className="fl_left">
            <h1><Link exact to="/">Butt</Link></h1>
          </div>
          <nav id="mainav" className="fl_right">
            <ul className="clear">
              <li className="active">
                <Link exact  to="/">Butt</Link>
              </li>
              <li><Link exact className="drop" to="/">Batter</Link>
                <ul>
                  <li>
                    <Link exact  to="/">Button1</Link>
                  </li>
                  <li>
                    <Link exact  to="/">Button2</Link>
                  </li>
                  <li>
                    <Link exact  to="/">Button3</Link>
                  </li>
                  <li>
                    <Link exact  to="/">Button4</Link>
                  </li>
                  <li>
                    <Link exact  to="/">Button5</Link>
                  </li>
                  <li>
                    <Link exact  to="/">Button6</Link>
                  </li>
                </ul>
              </li>
              <li><Link exact className="drop" to="/">Butt</Link>
                <ul>
                  <li><Link exact  to="/">Butt</Link></li>
                  <li><Link exact  to="/">Butt</Link>
                    <ul>
                      <li>
                        <Link exact  to="/">Butt</Link>
                        </li>
                      <li>
                        <Link exact  to="/">Butt</Link>
                      </li>
                      <li>
                        <Link exact  to="/">Butt</Link>
                      </li>
                    </ul>
                  </li>
                  <li><Link exact  to="/">Butt</Link></li>
                </ul>
              </li>
              <li><Link exact to="fgddfh">Err</Link></li>
              <li><Link exact to="/">Butt</Link></li>
              <li><Link exact to="/">Butt</Link></li>
            </ul>
          </nav>
        </header>
        <MyLoginForm/>
        </div>
        <div id="breadcrumb" className="hoc clear"> 
          <h6 className="heading">Υπουργείο Εργασίας</h6>
          <ul>
            {this.state.navbar}
          </ul>
        </div>
      </div>
      <Switch>
        <Route exact path="/" render={(props) => (
                                                  <Homepage  {...props} navbarUpdate={this.setPath} path={'Home'}/>
                                                  )}
                                                  
                      />
        
        <Route exact path="/Register" render={(props) => (
                                                  <Register  {...props} navbarUpdate={this.setPath} path={'Home/Contact'}/>
                                                  )}
                                                  
                      />

        <Route exact path="/Contact" render={(props) => (
                                                  <Contact  {...props} navbarUpdate={this.setPath} path={'Home/Register'}/>
                                                  )}
                                                  
                      />

         <Route exact path="/Employees" render={(props) => (
                                                  <Employees  {...props} navbarUpdate={this.setPath} path={'Home/Employees'}/>
                                                  )}
                                                  
                      />

        <Route exact path="/Employees/EmployeesCOVID" render={(props) => (
                                                  <EmployeesCOVID  {...props} navbarUpdate={this.setPath} path={'Home/Employees/EmployeesCOVID'}/>
                                                  )}
                                                  
                      />

        <Route exact path="/Employees/EmployeesCOVID/Instructions" render={(props) => (
                                                  <EmployeeCOVIDInstr  {...props} navbarUpdate={this.setPath} path={'Home/Employees/EmployeesCOVID/Instructions'}/>
                                                  )}
                                                  
                      />

        <Route exact path="/Jobless" render={(props) => (
                                                  <UnderConstruction  {...props} navbarUpdate={this.setPath} path={'Home/Jobless'}/>
                                                  )}
                                                  
                      />

        <Route exact path="/COVID" render={(props) => (
                                                  <COVID  {...props} navbarUpdate={this.setPath} path={'Home/COVID'}/>
                                                  )}
                                                  
                      />

        <Route exact path="/Employees/EmployeesCOVID/EmployeesAdeies" render={(props) => (
                                                          <EmployeesAdeies  {...props} navbarUpdate={this.setPath} path={'Home/COVID'}/>
                                                          )}
                                                          
                              />
        <Route path="">
          <div>
            <h1>404 PAGE NOT FOUND</h1>
          </div>
        </Route>
      </Switch>
      <ScrollUpButton />
      <div className="wrapper row4">
        <footer id="footer" className="hoc clear"> 
          <div id="ctdetails" className="clear">
            <ul className="nospace clear">
              <li className="one_quarter first">
                <div className="block clear"><a href="#"><i className="fas fa-phone"></i></a> <span><strong>Καλέστε μας:</strong> +30 2131516649<br/><br/>+30 2131516651</span></div>
              </li>
              <li className="one_quarter">
                <div className="block clear"><a href="#"><i className="fas fa-envelope"></i></a> <span><strong>Στείλτε μας email:</strong> support@ypakp.gov</span></div>
              </li>
              <li className="one_quarter">
                <div className="block clear"><a href="#"><i className="fas fa-clock"></i></a> <span><strong> Δευτέρα - Παρασκευή:</strong> 08.00πμ - 02.00μμ <br/>(<Link to="/Contact">Μόνο μετα απο ραντεβού</Link>)</span></div>
              </li>
              <li className="one_quarter">
                <div className="block clear"><a href="#"><i className="fas fa-map-marker-alt"></i></a> <span><strong>Επισκεφθείτε μας:</strong> Directions to <a href="#">our location</a></span></div>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </Router>
    </div>
    );
  }
}

export default App;
