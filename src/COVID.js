import React from 'react';

import {Link} from "react-router-dom";

class COVID extends React.Component {
  constructor(props) {
    super(props)

    this.onChange = this.onChange.bind(this)

    this.props.navbarUpdate(this.props.path)
  }

  onChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value,
    });
  }

  render(){     
    return (
        <div>
          <div className="wrapper row3">
            <main className="hoc container clear"> 
              <div className="content three_quarter first"> 
                <div className="one_half first" id="emplrscov">
                    <Link to="/"><h2><u>Εργοδότες</u></h2></Link>
                </div>
                <div className="one_half" id="emplescov">
                    <Link to="/Employees/EmployeesCOVID"><h2><u>Εργαζόμενοι</u></h2></Link>
                    <ul>

                    </ul>
                </div>
                <div className="one_half first" id="jblscov">
                    <Link to="/"><h2><u>Άνεργοι</u></h2></Link>
                </div>
                <div className="one_half" id="gencov">
                    <Link to="/"><h2><u>Γενικές Οδηγίες</u></h2></Link>
                </div>
              </div>
              <div className="sidebar one_quarter"> 
                <h6>Περιεχόμενα</h6>
                <nav className="sdb_holder">
                  <ul>
                    <li><Link activeClass="active" to="emplrscov" spy={true} smooth={true} duration={500}>Εργοδότες</Link></li>
                    <li><Link activeClass="active" to="emplescov" spy={true} smooth={true} duration={500}>Εργαζόμενοι</Link></li>
                    <li><Link activeClass="active" to="jblscov" spy={true} smooth={true} duration={500}>Άνεργοι</Link></li>
                    <li><Link activeClass="active" to="gencov" spy={true} smooth={true} duration={500}>Γενικές Οδηγίες</Link></li>
                  </ul>
                </nav>
              </div>
              <div className="clear"></div>
            </main>
          </div>
        </div>
    );
  }
}

export default COVID;


