import React from 'react';
import './App.css';
import {BrowserRouter as Router, Link, Switch, Route} from "react-router-dom";
import ScrollUpButton from "react-scroll-up-button";

import Header from './Header'
import Homepage from './Homepage'
import Contact from './Contact'
import EmployeeCOVIDInstr from './EmployeeCOVIDInstr'
import Employees from './Employees'
import Employers from './Employers'
import EmployeesCOVID from './EmployeesCOVID'
import EmployersCOVID from './EmployersCOVID'
import UnderConstruction from './UnderConstruction';
import COVID from './COVID';
import EmployeesEidikouSkopou from './EmployeesEidikouSkopou';
import Register from './Register';
import Footer from './Footer'
import Appointment from './Appointment';
import EmployeesCOVIDAdeies from './EmployeesCOVIDAdeies';
import EditRequests from './EditRequests';
import Profile from './Profile';
import ProfileForms from './ProfileForms';
import Logout from './Logout';
import DiloshEidikouSkopou from './DiloshEidikouSkopou';
import NotFound from './NotFound';
import EmployerRemote from './EmployerRemote';
import EmployerBreak from './EmployerBreak';
import EmployersCOVIDAdeies from './EmployersCOVIDAdeies';
import EmployeeRemote from './EmployeeRemote';
import EmployeeBreak from './EmployeeBreak';

class App extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
        path: '',
        navbar: null,
        currentRole: undefined,
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
      Employers: 'Εργοδότες',
      EmployersCOVID: 'COVID',
      EmployerRemote: 'Δηλωση Τηλεργασιας Εργαζομενων',
      EmployerBreak: 'Δηλωση Αναστολής Εργασίας Εργαζομενων',
      EmployersCOVIDAdeies: 'Άδειες για Εργαζόμενους',
      EmployeeRemote: 'Τηλεργασία',
      EmployeeBreak: 'Αναστολή Εργασίας',
      ProfileForms: 'Οι Φoρμες Μου',

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
      navbar: f_arr,
    })
  }
  componentDidMount() {
    const accessToken = localStorage.getItem('access_token');
        if (accessToken) {
        const tokenParts = JSON.parse(atob(accessToken.split('.')[1]));
        console.log(tokenParts)
        if (tokenParts) {
            this.setState({
                currentRole: tokenParts.role,
            });
        }
        else {
            this.setState({
                currentRole: undefined,
            });
        }
    }
    else {
        this.setState({
            currentRole: undefined,
        });
    }
    
    
  }

  render(){
    return (
        <div className="bgded overlay" >
            <Router>
                    <Header path={this.state.navbar} role = {this.state.currentRole}/>  
                    <Switch>
                      <Route exact path="/" render={(props) => (
                                                    <Homepage  {...props} navbarUpdate={this.setPath} path={'Home'}/>
                                                    )}
                                                    
                        />
                        <Route exact path="/Register" render={(props) => (
                                                    <Register  {...props} navbarUpdate={this.setPath} path={'Home/Register'}/>
                                                    )}
                                                    
                        />
                        <Route exact path="/Logout" render={(props) => (
                                                    <Logout  {...props} navbarUpdate={this.setPath} path={'Home/Logout'}/>
                                                    )}
                                                    
                        />
                      <Route exact path="/Contact" render={(props) => (
                                                                <Contact  {...props} navbarUpdate={this.setPath} path={'Home/Contact'}/>
                                                                )}
                                                                
                                    />

                      <Route exact path="/Contact/Appointment" render={(props) => (
                                                                  <Appointment  {...props} role={this.state.currentRole} navbarUpdate={this.setPath} path={'Home/Contact/Appointment'}/>
                                                                  )}
                                                                  
                                      />

                      <Route exact path="/Employees" render={(props) => (
                                                                <Employees  {...props} navbarUpdate={this.setPath} path={'Home/Employees'}/>
                                                                )}
                                                                
                                    />

                      <Route exact path="/Employers" render={(props) => (
                                                                  <Employers  {...props} navbarUpdate={this.setPath} path={'Home/Employers'}/>
                                                                  )}
                                                                                      
                                                          />

                      <Route exact path="/Employees/EmployeesCOVID" render={(props) => (
                                                                <EmployeesCOVID  {...props} navbarUpdate={this.setPath} path={'Home/Employees/EmployeesCOVID'}/>
                                                                )}
                                                                
                                    />
                      
                      <Route exact path="/Employers/EmployersCOVID" render={(props) => (
                                                                <EmployersCOVID  {...props} navbarUpdate={this.setPath} path={'Home/Employers/EmployersCOVID'}/>
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
                      <Route exact path="/Employees/EmployeesCOVID/EmployeesCOVIDAdeies/EmployeesEidikouSkopou" render={(props) => (
                                                                        <EmployeesEidikouSkopou  {...props} navbarUpdate={this.setPath} path={'Home/Employees/EmployeesCOVID/EmployeesCOVIDAdeies/EmployeesEidikouSkopou'}/>
                                                                        )}                                                                        
                                            />

                      <Route exact path="/Employers/EmployersCOVID/EmployersCOVIDAdeies/" render={(props) => (
                                                                                              <EmployersCOVIDAdeies  {...props} navbarUpdate={this.setPath} path={'Home/Employers/EmployersCOVID/EmployersCOVIDAdeies/EmployerRemote'}/>
                                                                                              )}
                                                                                              
                                                                  />

                      <Route exact path="/Employers/EmployersCOVID/EmployersCOVIDAdeies/EmployerRemote" render={(props) => (
                                                                                              <EmployerRemote  {...props} role={this.state.currentRole} navbarUpdate={this.setPath} path={'Home/Employers/EmployersCOVID/EmployersCOVIDAdeies/EmployerRemote'}/>
                                                                                              )}
                                                                                              
                                                                  />
                        <Route exact path="/Employees/EmployeesCOVID/EmployeesCOVIDAdeies/EmployeeRemote" render={(props) => (
                                                                        <EmployeeRemote  {...props} role={this.state.currentRole} navbarUpdate={this.setPath} path={'Home/Employees/EmployeesCOVID/EmployeesCOVIDAdeies/EmployeeRemote'}/>
                                                                        )}      
                                                                    />
                      <Route exact path="/Employers/EmployersCOVID/EmployersCOVIDAdeies/" render={(props) => (
                                                                                              <EmployersCOVIDAdeies  {...props} navbarUpdate={this.setPath} path={'Home/Employers/EmployersCOVID/EmployersCOVIDAdeies/'}/>
                                                                                              )}
                                                                                              
                                                                  />    
                        <Route exact path="/Employers/EmployersCOVID/EmployersCOVIDAdeies/EmployerBreak" render={(props) => (
                                                                                              <EmployerBreak  {...props} role={this.state.currentRole} navbarUpdate={this.setPath} path={'Home/Employers/EmployersCOVID/EmployersCOVIDAdeies/EmployerBreak'}/>
                                                                                              )}
                                                                                              
                                                                  />
                        <Route exact path="/Employees/EmployeesCOVID/EmployeesCOVIDAdeies/EmployeeBreak" render={(props) => (
                                                                        <EmployeeBreak  {...props} role={this.state.currentRole} navbarUpdate={this.setPath} path={'Home/Employees/EmployeesCOVID/EmployeesCOVIDAdeies/EmployeeBreak'}/>
                                                                        )}      
                                                                    />
                      <Route exact path="/Employees/EmployeesCOVID/EmployeesCOVIDAdeies/EmployeesEidikouSkopou/DiloshEidikouSkopou/:type" render={(props) => (
                                                                                              <DiloshEidikouSkopou  {...props} role={this.state.currentRole} navbarUpdate={this.setPath} path={'Home/Employees/EmployeesCOVID/EmployeesCOVIDAdeies/EmployeesEidikouSkopou'}/>
                                                                                              )}                                                                        
                                                                  />

                      {this.state.currentRole && (<Route exact path="/Profile" render={(props) => (
                                                                        <Profile  {...props} role={this.state.currentRole} navbarUpdate={this.setPath} path={'Home/Profile'}/>
                                                                        )}
                                                                        
                                            />)}
                      <Route exact path="/Profile/ProfileForms" render={(props) => (
                                                                        <ProfileForms  {...props} role = {this.state.currentRole} navbarUpdate={this.setPath} path={'Home/Profile/ProfileForms'}/>
                                                                        )}
                                                                        
                                            />

                      <Route exact path="/UnderConstruction" render={(props) => (
                                                                <UnderConstruction  {...props} navbarUpdate={this.setPath} path={'Home'}/>
                                                                )}
                                                                
                                    />
                      <Route exact path="" render={(props) => (
                                                    <NotFound  {...props} navbarUpdate={this.setPath} path={'Home'}/>
                                                    )}
                                                    
                        />
                    </Switch>
                    <ScrollUpButton />
                <Footer />
            </Router>
        </div>
    );
  }
}

export default App;
