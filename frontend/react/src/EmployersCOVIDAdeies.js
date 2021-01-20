import React from 'react';

import {Link} from "react-router-dom";

class EmployersCOVIDAdeies extends React.Component {
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
                    <section id="introblocks">
                    <ul className="nospace group">
                        <li className="one_third first">
                        <article><h6 className="heading">Τηλεργασία</h6>     
                            <p>Per conubia nostra per mauris aliquet massa nulla facilisi porta ligula non elementum</p>
                            <footer><Link className="btn" to="/">Περισσoτερα</Link></footer>
                        </article>
                        </li>
                        <li className="one_third">
                        <article><h6 className="heading">Αναστολή Εργασίας</h6>
                            <p>Ultricies justo urna egestas metus ut ornare leo augue pharetra risus morbi tincidunt massa</p>
                            <footer><Link className="btn" to="/Employees">Περισσoτερα</Link></footer>
                        </article>
                        </li>
                    </ul>
                    </section>
                    <div className="clear"></div>
                </main>
            </div>
        </div>
    );
  }
}

export default EmployersCOVIDAdeies;


