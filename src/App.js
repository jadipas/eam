import React from 'react';
import './App.css';
import {BrowserRouter as Router, Link, Switch, Route} from "react-router-dom";
import ScrollUpButton from "react-scroll-up-button";

import Header from './Header'
import Homepage from './Homepage'
import Contact from './Contact'
import EmployeeCOVIDInstr from './EmployeeCOVIDInstr'
import Employees from './Employees'
import EmployeesCOVID from './EmployeesCOVID'
import UnderConstruction from './UnderConstruction';
import COVID from './COVID';
<<<<<<< HEAD
import EmployeesEidikouSkopou from './EmployeesEidikouSkopou';
import MyLoginForm from './MyLoginForm';
=======
import EmployeesAdeies from './EmployeesAdeies';
import Login from './Login';
>>>>>>> 7e5c7851661e066a3f952bb1aee5fed72b596169
import Register from './Register';
import Footer from './Footer'
import Appointment from './Appointment';
import EmployeesCOVIDAdeies from './EmployeesCOVIDAdeies';
import EditRequests from './EditRequests';
import Profile from './Profile';

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
      EmployeesEidikouSkopou: 'Ειδικου Σκοπου',
      EmployeesCOVIDAdeies: 'Αδειες',
      Instructions: 'Οδηγιες',
      Home: 'Αρχικη',
      Appointment: 'Ραντεβου',
      Contact: 'Επικοινωνια',
      EditRequests: 'Επεξεργασια Δηλωσεων',
      Profile: 'Προφίλ',
      Register: 'Εγγραφη',
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
        
<<<<<<< HEAD
        <Route exact path="/Register" render={(props) => (
                                                  <Register  {...props} navbarUpdate={this.setPath} path={'Home/Register'}/>
                                                  )}
                                                  
                      />

        <Route exact path="/Contact" render={(props) => (
                                                  <Contact  {...props} navbarUpdate={this.setPath} path={'Home/Contact'}/>
                                                  )}
                                                  
                      />

        <Route exact path="/Contact/Appointment" render={(props) => (
                                                    <Appointment  {...props} navbarUpdate={this.setPath} path={'Home/Contact/Appointment'}/>
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
        <Route exact path="/Employees/EmployeesCOVID/EmployeesCOVIDAdeies" render={(props) => (
                                                          <EmployeesCOVIDAdeies  {...props} navbarUpdate={this.setPath} path={'Home/Employees/EmployeesCOVID/EmployeesCOVIDAdeies'}/>
                                                          )}
                                                          
                              />

        <Route exact path="/Employees/EmployeesCOVID/EmployeesCOVIDAdeies/EmployeesEidikouSkopou" render={(props) => (
                                                          <EmployeesEidikouSkopou  {...props} navbarUpdate={this.setPath} path={'Home/Employees/EmployeesCOVID/EmployeesCOVIDAdeies/EmployeesEidikouSkopou'}/>
                                                          )}
                                                          
                              />
        <Route exact path="/Profile" render={(props) => (
                                                          <Profile  {...props} navbarUpdate={this.setPath} path={'Home/Profile/EditRequests'}/>
                                                          )}
                                                          
                              />
        <Route exact path="/Profile/EditRequests" render={(props) => (
                                                          <EditRequests  {...props} navbarUpdate={this.setPath} path={'Home/Profile/EditRequests'}/>
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
=======
        <div className="bgded overlay" >
            <Router>
                    <Header path={this.state.navbar}/>  
                    <Switch>
                        <Route exact path="/" render={(props) => (
                                                                <Homepage  {...props} navbarUpdate={this.setPath} path={'Home'}/>
                                                                )}
                                                                
                                    />
                        
                        <Route exact path="/Register" render={(props) => (
                                                                <Register  {...props} navbarUpdate={this.setPath} path={'Home/Register'}/>
                                                                )}
                                                                
                                    />
                        
                        <Route exact path="/Login" render={(props) => (
                                                                <Login  {...props} navbarUpdate={this.setPath} path={'Home/Login'}/>
                                                                )}
                                                                
                                    />

                        <Route exact path="/Contact" render={(props) => (
                                                                <Contact  {...props} navbarUpdate={this.setPath} path={'Home/Contact'}/>
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
                <Footer />
            </Router>
        </div>
>>>>>>> 7e5c7851661e066a3f952bb1aee5fed72b596169
    );
  }
}

export default App;
