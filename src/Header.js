import React from 'react';
import {Link} from "react-router-dom";
import background from './images/background3.png'
import Login from './Login';


class Header extends React.Component {
  
  render(){     
    return (
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
                                </ul>
                            </li>
                            <li><Link to="/register">ΕΓΓΡΑΦΗ</Link></li>
                            
                        </ul>   
                    </nav>
                </header>
                <Login />
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


