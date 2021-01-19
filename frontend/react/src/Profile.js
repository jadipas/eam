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
      old_password: "",
      new_password: "",
      new_rpassword: "",
      err: "Everything is fine right now. No errors to report ",
    }
    this.onChange = this.onChange.bind(this)
    this.getProfile = this.getProfile.bind(this)
    this.handleReset = this.handleReset.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleSubmitPassword = this.handleSubmitPassword.bind(this)

    this.props.navbarUpdate(this.props.path)
  }

  onChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value,
    });
  }

  handleReset = (e) => {
    e.preventDefault()

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
          t: []
        })
      });
  }

  handleSubmit = (e) => {
    e.preventDefault()

    axiosInstance
			.post(`/authentication/update_profile`, {
				email: this.state.email,
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        amka: this.state.amka,
        afm: this.state.afm,
        phone: this.state.phone,
			})
			.then((res) => {
				console.log(res);
				//console.log(res.data);
			});
  }

  handleSubmitPassword = (e) => {
    e.preventDefault()

    if(this.state.old_password === '' || this.state.new_password === '' || this.state.new_rpassword === ''){
      this.setState({
        err: "Παρακαλώ συμπληρώστε τον παλιο κωδικό, το νέο κωδικό και μετά επαναλάβετε ορθά το νέο κωδικό"
      })
      document.getElementById("errmsg").style.opacity = "1"; 
    }else if(this.state.new_password !== this.state.new_rpassword){
      this.setState({
        err: "Επαναλάβετε ορθά το νέο κωδικό"
      })
      document.getElementById("errmsg").style.opacity = "1"; 
    }else{
      axiosInstance
        .post(`/authentication/update_password`, {
          old_password: this.state.old_password,
          new_password: this.state.new_password,
          new_rpassword: this.state.new_rpassword,
        })
        .then((res) => {
          console.log(res);
          //console.log(res.data);
        })
        .catch(err => {
          this.setState({
            err: err.message
          })
          document.getElementById("errmsg").style.opacity = "1"; 
        });
    }
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
        })
      });
      
      const path2='/forms/myforms';
      axiosInstance
			.get(path2)
			.then((res) => {
				console.log(res);
        //console.log(res.data);
        var new_t = []
        var n;

        for(n of res.data.AdeiaEidikoySkopoy){
          var stat = ''
          if(n.status === -1){
            stat='Απορρίφθηκε'
          }else if(n.status === 0){
            stat='Σε Αναμονή'
          }else{
            stat='Εγκρίθηκε'
          }
          new_t = new_t.concat([<tr>
            <td>Ειδικού Σκοπού</td>
            <td>{n.from_time}</td>
            <td>{n.to_time}</td>
            <td>{}</td>
          </tr>])
        }

        this.setState({
          t: new_t,
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
                            <h1>Αλλαγή Προσωπικών στοιχείων</h1>
                            <fieldset>
                                <p>Όνομα Χρήστη</p>
                                <input className="inpt" type="text" placeholder="Όνομα Χρήστη" id="username" name="username" value={this.state.username} onChange={this.onChange}/>
                                <p>Όνομα</p>
                                <input className="inpt" type="text" placeholder="Όνομα" id="first_name" name="first_name" value={this.state.first_name} onChange={this.onChange}/>
                                <p>Επίθετο</p>
                                <input className="inpt" type="text" placeholder="Επίθετο" id="last_name" name="last_name" value={this.state.last_name} onChange={this.onChange}/>
                                <p>Email</p>
                                <input className="inpt" type="email" placeholder="Email" id="email" name="email" value={this.state.email} onChange={this.onChange}/>
                                <p>ΑΦΜ</p>
                                <input className="inpt" type="text" placeholder="ΑΦΜ" id="afm" name="afm" value={this.state.afm} onChange={this.onChange}/>
                                <p>ΑΜΚΑ</p>
                                <input className="inpt" type="text" placeholder="ΑΜΚΑ" id="amka" name="amka" value={this.state.amka} onChange={this.onChange}/>
                                <p>Τηλέφωνο</p>
                                <input className="inpt" type="phone" placeholder="Τηλέφωνο" id="thl" name="thl" value={this.state.phone} onChange={this.onChange}/>
                                <p>Εταιρία</p>
                                <input className="inpt" type="text" placeholder="Εταιρία" id="company" name="company" value={this.state.company} onChange={this.onChange}/>
                                <div className="sbt_rst"><button className="rst" style={{float: 'left'}} type="cancel" onClick={this.handleReset}>Επαναφορά</button><button className="sbt" style={{float: 'right'}} type="submit">Αλλαγή</button></div>
                            </fieldset>
                        </form>
                    </div>
                    <div className="one_quarter">
                      <h2>Αλλαγή Κωδικού Πρόσβασης</h2>
                      <form>
                        <fieldset>
                            <p>Παλιός Κωδικός</p>
                            <input className="inpt" type="password" placeholder="Παλιός Κωδικός" id="old_password" name="old_password" value={this.state.old_password} onChange={this.onChange}/>
                            <p>Νέος Κωδικός</p>
                            <input className="inpt" type="password" placeholder="Νέος Κωδικός" id="new_password" name="new_password" value={this.state.new_password} onChange={this.onChange}/>
                            <p>Επανάληψη Νέου Κωδικού</p>
                            <input className="inpt" type="password" placeholder="Επανάληψη Νέου Κωδικού" id="new_rpassword" name="new_rpassword" value={this.state.old_rpassword} onChange={this.onChange}/>
                            <div className="sbt_rst"><button className="sbt" style={{float: 'right'}} type="submit" onClick={this.handleSubmitPassword}>Αλλαγή Κωδικού</button></div>
                        </fieldset>
                      </form>
                      <p id="errmsg" style={{color:"#ED254E",opacity: '0'}}>{this.state.err}</p>
                    </div>
                    <div className="content one_half">
                      <h2>Ιστορικό Δηλώσεων</h2>
                      <br/>
                      <br/>
                      <table>
                      <thead>
                          <tr>
                          <th>Τύπος Άδειας</th>
                          <th>Από</th>
                          <th>Εώς</th>
                          <th>Κατάσταση</th>
                          </tr>
                      </thead>
                      <tbody>
                          {this.state.t}   
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

export default Profile;


