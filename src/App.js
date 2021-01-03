import React from 'react';
import './App.css';
import {BrowserRouter as Router, Link, Switch, Route} from "react-router-dom";

import background from './images/demo/backgrounds/01.png'

import Homepage from './Homepage'
import Contact from './Contact'
import EmployeeCOVIDInstr from './EmployeeCOVIDInstr'

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

    for (n of n_arr) {
      if (n !== 'Home' && n !== ''){
        rel_path = rel_path + n + '/'
      }

      if(n !== ''){
        f_arr.push(<li><Link exact  to={rel_path}>{n}</Link></li>)
      }
    }
    
    this.setState({
      path: npath,
      navbar: f_arr
    })
  }

  render(){
    return (
      <div className="bgded overlay" style={{backgroundImage : `url(${background})`}}>
        <Router>
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
              <li><Link exact to="/">Butt</Link></li>
            </ul>
          </nav>
        </header>
        </div>
        <div id="breadcrumb" className="hoc clear"> 
          <h6 className="heading">Υπουργείο Εργασίας</h6>
          <ul>
            {this.state.navbar}
          </ul>
        </div>
        <Switch>
          <Route exact path="/" render={(props) => (
                                                    <Homepage  {...props} navbarUpdate={this.setPath} />
                                                    )}
                                                    
                        />
          <Route exact path="/Contact" render={(props) => (
                                                    <Contact  {...props} navbarUpdate={this.setPath} />
                                                    )}
                                                    
                        />
          <Route exact path="/Employees/COVID/Instructions" render={(props) => (
                                                    <EmployeeCOVIDInstr  {...props} navbarUpdate={this.setPath} />
                                                    )}
                                                    
                        />
          <Route path="">
            <div>
              <h1>404 PAGE NOT FOUND</h1>
            </div>
          </Route>
        </Switch>
      </Router>
      
    </div>
    );
  }
}

export default App;
