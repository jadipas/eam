import React from 'react';

import {Link} from "react-router-dom";

class Contact extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
        path: 'Home/Contact'
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

        </div>
    );
  }
}

export default Contact;


