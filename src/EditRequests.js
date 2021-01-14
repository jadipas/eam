import React from 'react';

import {Link} from "react-router-dom";

class EditRequests extends React.Component {
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
                    <div className="scrollable">
                        <table>
                        <thead>
                            <tr>
                            <th>Είδος Δηλωσης</th>
                            <th>Ημμερομηνία Δήλωσης</th>
                            <th>Απο</th>
                            <th>Εως</th>
                            <th>Κατάσταση</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td><a href="#">Value 1</a></td>
                            <td>Value 2</td>
                            <td>Value 3</td>
                            <td>Value 4</td>
                            </tr>
                            <tr>
                            <td>Value 5</td>
                            <td>Value 6</td>
                            <td>Value 7</td>
                            <td><a href="#">Value 8</a></td>
                            </tr>
                            <tr>
                            <td>Value 9</td>
                            <td>Value 10</td>
                            <td>Value 11</td>
                            <td>Value 12</td>
                            </tr>
                            <tr>
                            <td>Value 13</td>
                            <td><a href="#">Value 14</a></td>
                            <td>Value 15</td>
                            <td>Value 16</td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                    <div className="clear"></div>
                </main>
            </div>
        </div>
    );
  }
}

export default EditRequests;


