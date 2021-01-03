import React from 'react';

import {Link} from "react-router-dom";

class Homepage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
        path: 'Home/'
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
            <div className="wrapper row3">
                <main className="hoc container clear"> 
                    <section id="introblocks">
                    <ul className="nospace group">
                        <li className="one_quarter first">
                        <article><Link to="/"><h6 className="heading">Εργοδότες</h6></Link>        
                            <p>Per conubia nostra per mauris aliquet massa nulla facilisi porta ligula non elementum</p>
                            <footer><Link className="btn" to="/">Περισσότερα</Link></footer>
                        </article>
                        </li>
                        <li className="one_quarter">
                        <article><Link to="/"><h6 className="heading">Εργαζόμενοι</h6></Link>
                            <p>Ultricies justo urna egestas metus ut ornare leo augue pharetra risus morbi tincidunt massa</p>
                            <footer><Link className="btn" to="/">Περισσότερα</Link></footer>
                        </article>
                        </li>
                        <li className="one_quarter">
                        <article><Link to="/"><h6 className="heading">Άνεργοι</h6></Link>
                            <p>Ac vestibulum rutrum orci augue iaculis nibh quis porta nunc nisi suscipit leo nam ac lacus</p>
                            <footer><Link className="btn" to="/">Περισσότερα</Link></footer>
                        </article>
                        </li>
                        <li className="one_quarter">
                        <article><Link to="/"><h6 className="heading">Facilisis</h6></Link>
                            <p>Cras tempor ultricies urna aliquam massa sapien posuere in iaculis adipiscing vulputate</p>
                            <footer><Link className="btn" to="/">Περισσότερα</Link></footer>
                        </article>
                        </li>
                    </ul>
                    </section>
                    <div className="clear"></div>
                </main>
            </div>
            <div className="wrapper row3">
                <main className="hoc container clear"> 
                    <section id="introblocks">
                    <ul className="nospace group">
                        <li className="one_quarter first">
                        <Link to="/"><article><h6 className="heading">Οδηγίες για Εργαζομένους</h6>        
                        </article></Link>
                        </li>
                        <li className="one_quarter">
                        <Link to="/"><article><h6 className="heading">Άδεια Ειδικού σκοπού</h6>
                        </article></Link>
                        </li>
                        <li className="one_quarter">
                        <Link to="/"><article><h6 className="heading">Δηλώσεις Εργαζομένων</h6>
                        </article></Link>
                        </li>
                        <li className="one_quarter">
                        <Link to="/"><article><h6 className="heading">Αλλαγές Λειτουργίας λόγω COVID</h6>
                        </article></Link>
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

export default Homepage;


