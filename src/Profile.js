import React from 'react';

import {Link} from "react-router-dom";

class Profile extends React.Component {
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
                    <div className="content one_third first">
                        <form>
                            <fieldset>
                                <input className="inpt" type="text" placeholder="Όνομα" id="name" name="name" onChange={this.onChange}/>
                                <input className="inpt" type="text" placeholder="Επίθετο" id="surname" name="surname" onChange={this.onChange}/>
                                <input className="inpt" type="email" placeholder="Email" id="email" name="email" onChange={this.onChange}/>
                                <input className="inpt" type="password" placeholder="Κωδικός" id="password" name="password" onChange={this.onChange}/>
                                <input className="inpt" type="password" placeholder="Επαλήθευση Κωδικού" id="rpassword" name="rpassword" onChange={this.onChange}/>
                                <input className="inpt" type="text" placeholder="ΑΦΜ" id="afm" name="afm" onChange={this.onChange}/>
                                <input className="inpt" type="text" placeholder="ΑΜΚΑ" id="amka" name="amka" onChange={this.onChange}/>
                            </fieldset>
                        </form>
                    </div>
                    <div className="one_quarter">

                    </div>
                    <div className="clear"></div>
                </main>
            </div>
        </div>
    );
  }
}

export default Profile;


