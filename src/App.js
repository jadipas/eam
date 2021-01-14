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
import EmployeesAdeies from './EmployeesAdeies';
import Login from './Login';
import Register from './Register';
import Footer from './Footer'
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
       
    );
  }
}

export default App;
