import React from 'react';
import axiosInstance from './axios';

class Profile extends React.Component {
  constructor(props) {
    super(props)

    this.state={
      afm: "",
      amka: "",
      company: "",
      email: "",
      first_name: "",
      last_name: "",
      phone: "",
      role: "",
      username: "",
      oafm: '',
      oamka: '',
      ocompany: '',
      oemail: '',
      ofirst_name: '',
      olast_name: '',
      ophone: '',
      orole: '',
      ousername: '',
    }
    this.onChange = this.onChange.bind(this)
    this.getProfile = this.getProfile.bind(this)
    this.handleReset = this.handleReset.bind(this)

    this.props.navbarUpdate(this.props.path)
  }

  onChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value,
    });
  }

  handleReset = (e) => {
    e.preventDefault()

    this.setState({
      afm: this.state.oafm,
      amka: this.state.oamka,
      company: this.state.ocompany,
      email: this.state.oemail,
      first_name: this.state.ofirst_name,
      last_name: this.state.olast_name,
      phone: this.state.ophone,
      role: this.state.orole,
      username: this.state.ousername,
    });
  }

  async getProfile(){

    const path = '/authentication/profile' 

    axiosInstance
			.get(path)
			.then((res) => {
				//console.log(res);
        //console.log(res.data);
        this.setState({
          afm: res.data.afm,
          amka: res.data.amka,
          company: res.data.company,
          email: res.data.email,
          first_name: res.data.first_name,
          last_name: res.data.last_name,
          phone: res.data.phone,
          role: res.data.role,
          username: res.data.username,
          oafm: res.data.afm,
          oamka: res.data.amka,
          ocompany: res.data.company,
          oemail: res.data.email,
          ofirst_name: res.data.first_name,
          olast_name: res.data.last_name,
          ophone: res.data.phone,
          orole: res.data.role,
          ousername: res.data.username,
        })
      });
      
      const path2='/forms/myforms';
      axiosInstance
			.get(path2)
			.then((res) => {
				console.log(res);
        //console.log(res.data);
        this.setState({
          
        })
			});
  }

  async componentDidMount() {
      //console.log(this.state.loading)
      await this.getProfile();
  }

  render(){    
    return (
        <div>
            <div className="wrapper row3">
                <main className="hoc container clear"> 
                    <div className="conten one_quarter first">
                        <form>
                            <fieldset>
                                <input className="inpt" type="text" placeholder="Όνομα Χρήστη" id="username" name="username" value={this.state.username} onChange={this.onChange}/>
                                <input className="inpt" type="text" placeholder="Όνομα" id="first_name" name="first_name" value={this.state.first_name} onChange={this.onChange}/>
                                <input className="inpt" type="text" placeholder="Επίθετο" id="last_name" name="last_name" value={this.state.last_name} onChange={this.onChange}/>
                                <input className="inpt" type="email" placeholder="Email" id="email" name="email" value={this.state.email} onChange={this.onChange}/>
                                <input className="inpt" type="text" placeholder="ΑΦΜ" id="afm" name="afm" value={this.state.afm} onChange={this.onChange}/>
                                <input className="inpt" type="text" placeholder="ΑΜΚΑ" id="amka" name="amka" value={this.state.amka} onChange={this.onChange}/>
                                <input className="inpt" type="phone" placeholder="Τηλέφωνο" id="thl" name="thl" value={this.state.phone} onChange={this.onChange}/>
                                <input className="inpt" type="text" placeholder="Εταιρία" id="company" name="company" value={this.state.company} onChange={this.onChange}/>
                                <div className="sbt_rst"><button className="rst" style={{float: 'left'}} type="cancel" onClick={this.handleReset}>Επαναφορά</button><button className="sbt" style={{float: 'right'}} type="submit">Αλλαγή</button></div>
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


